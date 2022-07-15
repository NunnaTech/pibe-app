import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { useState } from 'react';

export const CertificationsAccordion = () => {
	const [selectedStudies, setSelectedStudies] = useState([]);
	const [filteredStudies, setFilteredStudies] = useState([]);
	const searchStudies = (event) => {
		setTimeout(() => {
			let _filteredJobs;
			if (!event.query.trim().length) {
				_filteredJobs = [...studies];
			}
			else {
				_filteredJobs = studies.filter((obj) => {
					return obj.name.toLowerCase().startsWith(event.query.toLowerCase());
				});
			}
			setFilteredStudies(_filteredJobs);
		}, 250);
	}

	const addStudies = (event) =>{
		if (event.key==='Enter'){
			setSelectedStudies([...selectedStudies,{"name":event.target.value}])
			event.target.value = ""
		}
	}

	let studies = [
		{"name": "Software Engineer"},
		{"name": "Database Engineer"},
	]

	return(
		<div className="grid container flex">
			<div className="flex sm:justify-content-center md:justify-content-start  sm:col-12 md:col-6">
				<AutoComplete value={selectedStudies}
											placeholder="Java 11 Enterprise"
											suggestions={filteredStudies} completeMethod={searchStudies}
											onKeyPress={addStudies}
											field="name" multiple
											onChange={(e) => setSelectedStudies(e.value)} aria-label="Studies" />
			</div>
			<div className="flex justify-content-end sm:col-12 md:col-6 mt-1">
				<Button icon={<span className='material-icons m-0'>save</span>}
								className="p-button-rounded p-button-secondary" aria-label="Save" />
			</div>
		</div>
	)
}