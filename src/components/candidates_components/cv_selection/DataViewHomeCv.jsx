import { CVCardData } from './CvCardData';

export const DataViewHomeCv = () => {
	const templates = [
		{ id: 1, name: 'Plantilla 1', details: 'Azul' },
		{ id: 2, name: 'Plantilla 2', details: 'Verde'},
		{ id: 3, name: 'Plantilla 3', details: 'Gris' },
	];

	return (
		<>
			<div className='h-max'>
				<div className='flex justify-content-center flex-wrap card-container '>
					<div className='grid container'>
						{templates.map((e) => (<div className='col-12 lg:col-4'><CVCardData data={e} /></div>))}
					</div>
				</div>
			</div>
		</>
	);
};
