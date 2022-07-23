import React from 'react';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';
import '../../../resources/static/pibe-style.css';
import stylesModule from '../../../resources/static/pibe-style.css';

export const ApplicantExperience = () => {
	return (
		<>
			<div className='h-full p-5 m-0 lg:m-5'>
				<h1 className='mt-0 mb-5 text-black-alpha-60 '>
					<span className='material-icons text-pink-400 text-4xl mr-3'>
						work
					</span>
					Experiencia de Roberto
				</h1>
				<div>
					<Fieldset
						legend='Sobre Roberto'
						className='mypanelPrimary text-lg shadow-5'>
						<p className='text-gray-700  text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit
						</p>
					</Fieldset>
				</div>
				<Divider />
				<div>
					<Fieldset
						legend='Experiencia Laboral'
						className='mypanel text-lg shadow-5 '>
						<ul class='list-disc text-justify text-gray-700'>
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
					</Fieldset>
				</div>
				<Divider />
				<div>
					<Fieldset
						legend='Educación'
						className='mypanel text-lg shadow-5'>
						<ul class='list-disc text-justify text-gray-700'>
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
					</Fieldset>
				</div>
			</div>
		</>
	);
};
