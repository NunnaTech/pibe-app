import { Chips } from 'primereact/chips';
import React, { useState, useEffect } from 'react';

export const BenefitsVacant = ({ vacant, setVacant }) => {
	const [benefits, setBenefits] = useState([]);

	useEffect(() => {
		setVacant({
			...vacant,
			benefits: benefits.map((b) => {
				let obj = { name: b };
				return obj;
			}),
		});
		console.log(vacant);
	}, [benefits]);

	return (
		<div>
			<h5 className='mt-0 text-pink-400 text-base'>
				Beneficios de la vacante (sepáralos con una coma){' '}
			</h5>
			<div className='grid p-fluid'>
				<div className='field col-12 '>
					<div className='p-inputgroup'>
						<span className='material-icons p-inputgroup-addon text-primary'>
							auto_awesome
						</span>
						<span className='p-float-label'>
							<span className='p-float-label'>
								<Chips
									value={benefits}
									onChange={(e) => setBenefits(e.value)}
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
