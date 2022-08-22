import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { PaginatorData } from '../paginator_data/PaginatorData';
import { useStoreNotifications } from '../../storage/NotificationsZustand';
import { NotificationService } from '../../services/NotificationService';
import React, { useEffect } from 'react';
import { useStoreSession } from '../../storage/LoginZustand';
import { useStoreHomeCandidates } from '../../storage/HomeCandidateZustand';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


export const MainContentNoty = () => {
	// Router
	let navigate = useNavigate()
	// Zustand States
	const { token, userSession } = useStoreSession()
	const { notifications, setNotifications } = useStoreNotifications()
	const { page, setPage, totalPag, setTotalPag } = useStoreHomeCandidates()
	// Paginator
	const startIndex = (page - 1) * 4;
	//API Service
	const notificationService = new NotificationService()

	useEffect(() => {
		setNotifications([])
		notificationService.GetAllNotifications(token, userSession.username)
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setTotalPag(Math.ceil(data.length / 4))
				setNotifications(data.slice(startIndex, startIndex + 4))
			})
			.catch((error) => console.log(error))
	}, [])

	const RenderIcon = ({ opc }) => {
		switch (opc) {
			case "Compartir":
				return <span className="flex flex-wrap align-content-center material-icons text-indigo-500 text-2xl ml-2">share</span>
				break;
			case "Contacto":
				return <span className="flex flex-wrap align-content-center material-icons text-indigo-500 text-2xl ml-2">person_pin</span>
				break;
			case "Vacante cubierta":
				return <span className="flex flex-wrap align-content-center material-icons text-indigo-500 text-2xl ml-2">sensor_occupied</span>
				break;
			case "Finalizado":
				return <span className="flex flex-wrap align-content-center material-icons text-indigo-500 text-2xl ml-2">fact_check</span>
				break;
			case "Proceso Vacante":
				return <span className="flex flex-wrap align-content-center material-icons text-indigo-500 text-2xl ml-2">work</span>
				break;
		}
	}

	return (
		<div className="grid m-8">
			<div className="col-12 flex justify-content-center">
				<Card className="sm:w-full md:w-8 h-full">

					<div className="grid ml-3 mr-6">
						<div className="col flex justify-content-start">
							<div className="text-lg font-bold">TUS NOTIFICACIONES</div>
						</div>
					</div>

					<div className="grid ml-3 mr-3">
						<Divider />
					</div>

					<div className="grid m-3 flex justify-content-center">
						{notifications.length > 0 ?
							(
								<>
									{notifications.map((n, i) => {
										return (
											<div className="flex p-3 bg-gray-200 shadow-4 border-round-xl w-8 m-2">
												<div className="col grid">
													<RenderIcon opc={n.notification.type} />
													<div>
														<div className="flex flex-wrap align-content-center font-bold ml-3">Mensaje</div>
														<div className="flex flex-wrap align-content-center font-base text-base ml-3">{n.notification.description}</div>
														{n.notification.type == "Compartir" ? (
															<Button label="Abrir" onClick={() => navigate(n.content.slice(22, 31))} className="p-button-rounded p-button-info ml-3 p-button-sm" />
														) : (
															<div className="flex flex-wrap align-content-center font-light text-sm ml-3">{n.content}</div>
														)}
													</div>
												</div>
											</div>
										)
									})}
								</>
							) :
							(
								<div className="font-semibold text-color-secondary text-base">
									No hay notificaciones para mostrar.
								</div>
							)}
					</div>

					<div className="grid ml-3 mr-3 mt-1">
						<Divider />
					</div>

					<div className="grid ml-3 mr-3 mt-1 ">
						<div className="col flex justify-content-center">
							{notifications.length > 0 && (
								<PaginatorData />
							)}
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}