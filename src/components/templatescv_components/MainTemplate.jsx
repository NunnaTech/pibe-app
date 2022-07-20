import { DataViewHomeTemplate } from './DataViewHomeTemplate';
export const  MainTemplate = () => {
  return(
		<div className='h-max' style={{background:'#EAF3FB'}}>

			<div className="flex justify-content-center flex-wrap card-container pt-6">
				<DataViewHomeTemplate/>
				
			</div>

		</div>
	)
}
