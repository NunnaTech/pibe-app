import { Card } from 'primereact/card';
import { useStoreSession } from '../../storage/LoginZustand';
import { TabPanel, TabView } from 'primereact/tabview';
import { PersonalData } from './PersonalData';
import { DataViewHomeCv } from '../candidates_components/cv_selection/DataViewHomeCv';
import { LaboralData } from './LaboralData';

export const PrincipalContentProfile = () => {
	const { userSession } = useStoreSession();

	return (
		<div className='h-full p-6 md:flex md:justify-content-center'>
			<Card className='sm:w-auto md:w-8 lg:w-8 h-auto shadow-4 '>
				<TabView>
					<TabPanel header='DATOS PERSONALES'>
						<PersonalData />
					</TabPanel>
					<TabPanel header='DATOS LABORALES'>
						<LaboralData />
					</TabPanel>
					{userSession.authorities[0].authority === 'ROLE_CANDIDATE' && (
						<TabPanel header='SELECCIONAR CV'>
							<DataViewHomeCv />
						</TabPanel>
					)}
				</TabView>
			</Card>
		</div>
	);
};
