import React from 'react';

export const ApplicantCertifications = () => {
	return (
		<>
			<div className='p-4'>
					<div className='flex align-content-center flex-wrap h-full'>
						<span
							style={{ marginRight: 5 }}
							className='material-icons text-pink-400 text-3xl mr-2'>
							workspace_premium
						</span>
						<h2 className='text-blue-700  text-2xl m-0'>Certificaciones</h2>
					</div>
					<div>
						<ul className='list-disc text-justify ml-5 text-lg text-gray-700'>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</li>
							<li>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus. Vitae proin sagittis nisl rhoncus mattis.
							</li>
							<li>
								Maecenas pharetra convallis posuere morbi leo urna molestie.
							</li>
						</ul>
					</div>
				</div>
		</>
	);
};
