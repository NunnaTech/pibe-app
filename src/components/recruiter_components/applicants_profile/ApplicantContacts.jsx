import React from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useStoreSession } from '../../../storage/LoginZustand';
import { ProfileService } from "../../../services/ProfileService"
import { Card } from 'primereact/card';
import { useEffect } from 'react';
import { Avatar } from 'primereact/avatar';
import { useParams } from 'react-router-dom';

const ApplicantContacts = () => {
    const { token } = useStoreSession();
    let params = useParams()
    const [contactList, setContactList] = useState([]);
    const [displayContacts, setDisplayContacts] = useState(false);

    const toast = useRef(null);
    const contactService = new ProfileService();

    const onClick = () => {
        setDisplayContacts(true)
    }

    const onHide = () => {
        setDisplayContacts(false)
    }

    useEffect(() => {
        contactService.getUserContacts(params.user, token)
            .then((res) => res.json())
            .then((data) => {
                setContactList(data)
            })
            .catch((error) => {
                toast.current.show({
                    severity: 'warn',
                    summary: 'Advertencia',
                    detail: 'Datos invalidos del usuario',
                    sticky: true,
                });
            });

    }, [])

    const renderFooter = () => {
        return (
            <div>
                <Button label="Cerrar" icon="pi pi-times" onClick={onHide} className="p-button-text" />
            </div>
        );
    }

    return (
        <>
            <Toast ref={toast} />
            <Button
                label='Ver Contactos'
                icon={<span className='material-icons mr-2 text-3xl'>visibility</span>}
                className='bg-blue-700 hover:bg-blue-800 shadow-5 p-4 text-2xl'
                onClick={onClick}
            />
            <Dialog draggable={false} closable={false} header="Lista de contactos" visible={displayContacts} style={{ width: '50vw' }} footer={renderFooter} onHide={onHide}>
               <div className="grid m-4">
                   {
                       contactList.map((item, index) => {
                           return (
                             <div className="card grid shadow-4 border-round flex p-2" key={index}>
                                 <div className="font-bold flex m-2 align-content-center flex-wrap justify-content-center">
                                     <Avatar label={item.contact.username[0].toUpperCase()} className="mr-2 bg-primary" shape="circle" />
                                 </div>
                                 <div className="font-bold flex m-1 align-content-center flex-wrap justify-content-center">
                                     Nombre: <div className="ml-2 font-light">{item.contact.username}</div>
                                 </div>
                                 <div className="flex align-content-center m-1 flex-wrap justify-content-center">
                                     <Button style={{color:"white"}} icon={<span className="material-icons">share</span>}
                                             className="p-button-rounded p-button-sm p-button-text p-button-plain text-blue-600" aria-label="Profile" />
                                 </div>
                             </div>
                           )
                       })
                   }
               </div>
            </Dialog>
        </>
    )
}

export default ApplicantContacts;