import React from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useStoreSession } from '../../../storage/LoginZustand';
import { ProfileService } from "../../../services/ProfileService"
import { useEffect } from 'react';
import { Avatar } from 'primereact/avatar';
import { useParams } from 'react-router-dom';
import { TabPanel, TabView } from 'primereact/tabview';


const ApplicantContacts = () => {
    const { token, userSession } = useStoreSession();
    let params = useParams()
    const [contactList, setContactList] = useState([]);
    const [userList,setUserList] = useState([])
    const [displayContacts, setDisplayContacts] = useState(false);

    const toast = useRef(null);
    const contactService = new ProfileService();

    const onClick = () => {
        setDisplayContacts(true)
    }

    const rechargeList = () => {
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
    }

    const saveContact = (name) => {
      contactService.saveContact(token,userSession.username,name)
        .then((res)=>{
          switch (res.status) {
            case 200:
              toast.current.show({
                severity: 'success',
                summary: 'Exito',
                detail: '¡Haz añadido este usuario a tus contactos correctamente!',
                sticky: true,
              });
              rechargeList();
              break;
            case 403:
              toast.current.show({
                severity: 'warn',
                summary: 'Atención',
                detail: 'No cuentas con los permisos suficientes para hacer esta acción',
                sticky: true,
              });
              break;
            case 404:
              toast.current.show({
                severity: 'info',
                summary: 'Mensaje de información',
                detail: '¡Este usuario ya forma parte de tus contactos!',
                sticky: true,
              });
              break;
          }
        })
        .catch((error)=>console.log(error))
    }

    const onHide = () => {
        setDisplayContacts(false)
    }

    useEffect(() => {
        contactService.getUserContacts(params.user, token)
            .then((res) => res.json())
            .then((data) => {
                setContactList(data)
              contactService.getAllUsers(token)
                .then((res)=>res.json())
                .then((data) => {
                  let filtered = data.filter(function(obj) { return obj.username != userSession.username; });
                  setUserList(filtered)
                })
                .catch((error) => console.log(error))
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
                className='bg-primary hover:bg-primary-600 shadow-5 p-4 text-2xl'
                onClick={onClick}
            />
            <Dialog draggable={false} closable={false} visible={displayContacts} style={{ width: '50vw' }} footer={renderFooter} onHide={onHide}>
              <TabView>
                <TabPanel header="MIS CONTACTOS" >
                  <div className="grid m-4 flex justify-content-center">
                    {contactList.length>0 ? (
                      <>
                        {
                          contactList.map((item, index) => {
                            return (
                              <div className="sm:col-12 md:col-6">
                                <div className="card grid shadow-4 border-round flex p-2 m-1" key={index}>
                                  <div className="font-bold flex m-2 align-content-center flex-wrap justify-content-center">
                                    <Avatar label={item.contact.username[0].toUpperCase()} className="mr-2 bg-primary" shape="circle" />
                                  </div>
                                  <div className="font-bold flex m-1 align-content-center flex-wrap justify-content-center mr-3">
                                    Usuario: <div className="ml-2 font-light">{item.contact.username}</div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </>
                    ):(
                      <div className="font-semibold text-color-secondary">
                        No hay contactos para mostrar.
                      </div>
                    )}
                  </div>
                </TabPanel>
                <TabPanel header="AÑADIR CONTACTOS">
                  <div className="grid m-4 flex justify-content-center">
                    {userList.map((u,index)=>{
                      return(
                        <div className="sm:col-12 md:col-6">
                          <div className="card grid shadow-4 border-round m-1 col w-auto" key={index}>
                            <div className="col font-bold flex m-2 align-content-center flex-wrap justify-content-center">
                              <Avatar size="large" label={u.username[0].toUpperCase()} className="mr-2 bg-pink-400 text-white" shape="circle" />
                            </div>
                            <div className="col font-bold flex m-1 align-content-center flex-wrap justify-content-center">
                              Usuario: <div className="ml-2 font-light">{u.username}</div>
                            </div>
                            <div className="col flex align-content-center m-1 flex-wrap justify-content-center">
                              <Button onClick={()=>saveContact(u.username)} style={{color:"white"}} icon={<span className="material-icons">group_add</span>}
                                      className="p-button-rounded p-button-sm p-button-text p-button-plain text-blue-600" aria-label="Profile" />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabPanel>
              </TabView>
            </Dialog>
        </>
    )
}

export default ApplicantContacts;