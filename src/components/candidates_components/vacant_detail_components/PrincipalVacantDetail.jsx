import { Card } from 'primereact/card';
import { LeftCardDetail } from './LeftCardDetail';
import { RightCardDetail } from './RightCardDetail';

export const PrincipalVacantDetail = () => {
  return(
		<div className='h-max' style={{background:'#EAF3FB'}}>

			<div className="flex justify-content-center flex-wrap card-container pt-6">
				<LeftCardDetail/>
				<RightCardDetail/>
			</div>

		</div>
	)
}
