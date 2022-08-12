import { Chips } from 'primereact/chips';
import React, { useRef, useState } from 'react';

export const BenefitsVacant = () => {
	const [values2, setValues2] = useState([]);

	return (
		<div>
			<h5 className='mt-0 text-pink-400 text-base'>
				Beneficios de la vacante (sepáralos con una coma){' '}
			</h5>
			<div className='grid p-fluid'>
				<div className='field col-12 '>
					<div className='p-inputgroup'>
						<span class='material-icons p-inputgroup-addon text-primary'>
							auto_awesome
						</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Chips
									value={values2}
									onChange={(e) => setValues2(e.value)}
									separator=','
								/>
								<label htmlFor='dropdown'>Beneficios</label>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
