import { Card } from 'primereact/card';
import { TabPanel, TabView } from 'primereact/tabview';
import { PersonalData } from './PersonalData';
import { LaboralData } from './LaboralData';
import { useStoreSession } from '../../storage/LoginZustand';

export const PrincipalContentProfile = () => {
	const {userSession} = useStoreSession()
  return(
		<div className='h-full p-6 md:flex md:justify-content-center'>
			<Card className="sm:w-auto md:w-8 lg:w-8 h-auto shadow-4 " >
				<TabView>
					<TabPanel header="DATOS PERSONALES" >
						<PersonalData/>
					</TabPanel>
					{userSession.authorities[0].authority === 'ROLE_CANDIDATE' && (
						<TabPanel header="DATOS LABORALES">
							<LaboralData/>
						</TabPanel>
					)}
				</TabView>
			</Card>
		</div>
	)
}