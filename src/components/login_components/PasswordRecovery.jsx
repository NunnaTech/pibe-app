import { useState } from "react"
import { useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { PasswordService } from "../../services/PasswordService";
import { Toast } from 'primereact/toast';
const PasswordRecovery = () => {

    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [validPassword, setValidPassword] = useState("")
    const [displayRecoverEmail, setDisplayRecoverEmail] = useState(false);
    const [displayRecoverCode, setDisplayRecoverCode] = useState(false);
    const recoveryService = new PasswordService();
    const toast = useRef(null);

    const dialogFuncMap = {
        'displayRecoverEmail': setDisplayRecoverEmail,
        'displayRecoverCode': setDisplayRecoverCode
    }

    const onClick = (name) => {
        dialogFuncMap[`${name}`](true);
    }
    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const send = () => {
        recoveryService.ForgotPassword(email)
            .then((res) => res.json())
            .then((data) => {
                if (data.status == 500) {
                    onHide('displayRecoverEmail')
                    toast.current.show({
                        severity: 'warn',
                        summary: 'Advertencia',
                        detail: 'Correo inválido',
                        sticky: true,
                    });
                } else {
                    onHide('displayRecoverEmail');
                    onClick('displayRecoverCode');
                }
            })
            .catch((error) => {
                onHide('displayRecoverEmail')
                toast.current.show({
                    severity: 'warn',
                    summary: 'Advertencia',
                    detail: 'Correo inválido',
                    sticky: true,
                });
            });
            setCode("")
            setEmail("")
            setNewPassword("")
            setValidPassword("")
    };

    const sendRestorePassword=()=>{
        if(newPassword != validPassword){
            toast.current.show({
                severity: 'info',
                summary: 'Algo no cuadra',
                detail: 'Las contraseñas deben ser iguales',
                sticky: true,
            });
        }else{
            recoveryService.ResetPassword(code, newPassword)
            .then((res)=>res.json())
            .then((data)=>{
                if (data){
                    toast.current.show({
                        severity: 'success',
                        summary: 'Realizado',
                        detail: 'Se cambió tu contraseña satisfactoriamente',
                        sticky: true,
                    });
                    onHide('displayRecoverCode')
                }else{
                    toast.current.show({
                        severity: 'info',
                        summary: 'Algo no cuadra',
                        detail: 'Verifica que tu código secreto sea el correcto',
                        sticky: true,
                    });
                }
            })
            .catch((err)=>{
                toast.current.show({
                    severity: 'error',
                    summary: 'Error al procesar',
                    detail: 'Ocurrio un error al intentar cambiar su contraseña',
                    sticky: true,
                });
            })
        }
        setCode("")
        setEmail("")
        setNewPassword("")
        setValidPassword("")
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Cancelar" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Enviar" icon="pi pi-check" onClick={send} />
            </div>
        );
    }

    const renderFooterCode = (name) => {
        return (
            <div>
                <Button label="Cancelar" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Enviar" icon="pi pi-check" onClick={sendRestorePassword}/>
            </div>
        );
    }

    return (
        <>
            <Toast ref={toast} />
            <div className='flex align-items-center justify-content-center mt-2'>
                <Button label="¿Olvidaste tu contraseña?" className='p-button-text' icon="pi pi-external-link" onClick={() => onClick('displayRecoverEmail')} />
                <Dialog draggable={false} header="Recuperando mi cuenta" visible={displayRecoverEmail} onHide={() => onHide('displayRecoverEmail')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayRecoverEmail')}>
                    <p>Hola!, por favor ingresa tu correo electrónico asociado a PIBE, se te enviará un código especial para reestablecer tu contraseña.</p>
                    <span className="p-float-label">
                        <InputText
                            id='recoverIn'
                            className='w-full'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="recoverIn">Correo electrónico</label>
                    </span>
                </Dialog>
                <Dialog draggable={false} header="Código super secreto" visible={displayRecoverCode} onHide={() => onHide('displayRecoverCode')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooterCode('displayRecoverCode')}>
                    <p>Perfecto!, Ingresa el código super secreto que fue enviado a tu correo, asegúrate de copiarlo bien.</p>

                    <span className="p-float-label my-3">
                        <InputText
                            id='recoverCode'
                            className='w-full'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <label htmlFor="recoverCode">Código super secreto</label>
                    </span>


                    <span className="p-float-label my-3">
                        <InputText
                            id='newPassword'
                            className='w-full'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <label htmlFor="newPassword">Nueva contraseña</label>
                    </span>


                    <span className="p-float-label my-3">
                        <InputText
                            id='confirmPassword'
                            className='w-full'
                            value={validPassword}
                            onChange={(e) => setValidPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword">Confirmar contraseña</label>
                    </span>
                </Dialog>
            </div>
        </>
    )
}
export default PasswordRecovery;