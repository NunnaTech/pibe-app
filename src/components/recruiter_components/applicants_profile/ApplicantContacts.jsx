import React from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useStoreSession } from '../../../storage/LoginZustand';
import { ProfileService } from "../../../services/ProfileService"
import { Chip } from 'primereact/chip';
import { Card } from 'primereact/card';
import { useEffect } from 'react';

const ApplicantContacts = () => {
    const { token, userSession } = useStoreSession();
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
        contactService.getUserContacts(userSession.username, token)
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
            <Dialog draggable={false} header="Lista de contactos" visible={displayContacts} style={{ width: '50vw' }} footer={renderFooter} onHide={onHide}>
                {
                    contactList.map((item) => {

                        return (
                            <Card title={item.contact.username} subTitle={item.contact.email}>
                            </Card>
                        )
                    })
                }
            </Dialog>
        </>
    )
}

export default ApplicantContacts;