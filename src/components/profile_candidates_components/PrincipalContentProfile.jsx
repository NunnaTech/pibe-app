import { Card } from 'primereact/card';
import { TabPanel, TabView } from 'primereact/tabview';
import { PersonalData } from './PersonalData';
import { LaboralData } from './LaboralData';

export const PrincipalContentProfile = () => {
  return(
		<div className='h-full p-6 md:flex md:justify-content-center'>
			<Card className="sm:w-auto md:w-8 lg:w-8 h-auto shadow-4 " >
				<TabView>
					<TabPanel header="DATOS PERSONALES" >
						<PersonalData/>
					</TabPanel>
					<TabPanel header="DATOS LABORALES">
						<LaboralData/>
					</TabPanel>
				</TabView>
			</Card>
		</div>
	)
}