import { Accordion, AccordionTab } from 'primereact/accordion';
import { AcademicAccordion } from './AcademicAccordion';
import { DescriptionAccordion } from './DescriptionAccordion';
import { ExperienceAccordion } from './ExperienceAccordion';
import { StudiesAccordion } from './StudiesAccordion';
import { LanguagesAccordion } from './LanguagesAccordion';
import { CertificationsAccordion } from './CertificationsAccordion';
import { CoursesAccordion } from './CoursesAccordion';
import { HabilitiesAccordion } from './HabilitiesAccordion';
import { Button } from 'primereact/button';
import { useStoreSession } from '../../storage/LoginZustand';
import { ProfileService } from '../../services/ProfileService';
import { useStoreResume } from '../../storage/ResumeZustand';
import { useEffect, useRef } from 'react';
import { useStoreCertifications } from '../../storage/profile_zustand/ZustandCertifications';
import { useStoreCourses } from '../../storage/profile_zustand/ZustandCourses';
import { useStoreExperience } from '../../storage/profile_zustand/ZustandExperience';
import { useStoreHabilities } from '../../storage/profile_zustand/ZustandHabilities';
import { useStoreLanguages } from '../../storage/profile_zustand/ZustandLanguages';
import { useStoreStudies } from '../../storage/profile_zustand/ZustandStudies';
import { useStoreResumeOthers } from '../../storage/profile_zustand/ZustandOther';
import { Toast } from 'primereact/toast';

export const LaboralData = () => {
	// Zustand States
	const {userSession,token} = useStoreSession()
	const {profile,setProfile, setIdResume,idResume} = useStoreResume()
	const {formInputCertifications,setFormInputCertifications} = useStoreCertifications()
	const {formInputCourses, setFormInputCourses} = useStoreCourses()
	const {formInputExperience,setFormInputExperience} = useStoreExperience()
	const {habilities, setHabilities} = useStoreHabilities()
	const {formInputLanguages, setFormInputLanguages} = useStoreLanguages()
	const {formInputStudies, setFormInputStudies} = useStoreStudies()
	const {academic,description, setAcademic, setDescription} = useStoreResumeOthers()
	// API services
	const profileService = new ProfileService()
	// Toast
	const toast = useRef(null);

	function setValuesResume() {
		// JSON to dreadful API, I hate this sh1t
		let objSend = {
			"active": true,
			"aptitudes": [],
			"certifications": [],
			"completed": true,
			"id":idResume,
			"courses": [],
			"curricularTitle": "string",
			"description": "string",
			"experiences": [],
			"languages": [],
			"profile":profile,
			"studies": [],
			"style": {
				"id": 1,
				"name": "Plantilla 1"
			}
		}
		// Aptitudes
		let aptitudes = []
		habilities.map((obj,index)=>{
			aptitudes.push({name:obj})
		})
		objSend.aptitudes = aptitudes
		// Certifications
		let certifications = []
		formInputCertifications.map((c,i)=>{
			certifications.push({
				active: true,
				company: c.company,
				expirationDate: `${c.expirationDate}T00:00:00`,
				name: c.name,
				obtainedDate: `${c.obtainedDate}T00:00:00`,
			})
		})
		objSend.certifications = certifications
		// Courses
		let courses = []
		formInputCourses.map((c,i)=>{
			courses.push({
				"active": true,
				"finishedDate": `${c.finishedDate}T00:00:00`,
				"hours": c.hours,
				"name": c.name,
				"realizationDate": `${c.realizationDate}T00:00:00`,
				"trainingInstitution": c.trainingInstitution
			})
		})
		objSend.courses = courses
		// Experiences
		let experiences = []
		formInputExperience.map((e,i)=>{
			experiences.push({
				"activities": e.activities,
				"endPeriod": `${e.endPeriod}T00:00:00`,
				"position": e.position,
				"startPeriod": `${e.startPeriod}T00:00:00`
			})
		})
		objSend.experiences = experiences
		// Languages
		let languages = []
		formInputLanguages.map((l,i)=>{
			languages.push({
				"active": true,
				"language": {
					"abbreviation": "NA",
					"language": l.name
				},
				"level": l.abbreviation
			})
		})
		objSend.languages = languages
		// Studies
		let studies = []
		formInputStudies.map((s,i)=>{
			studies.push({
				"endPeriod": `${s.endPeriod}T00:00:00`,
				"name": s.name,
				"startPeriod": `${s.startPeriod}T00:00:00`
			})
		})
		objSend.studies = studies
		// Curricular & description
		objSend.curricularTitle = academic
		objSend.description = description
		return objSend
	}

	const saveLaboralData = () =>{
		let resume = setValuesResume()
		profileService.saveResumeUser(userSession.username,token,resume)
			.then((res) =>{
				switch (res.status) {
					case 200:
						toast.current.show({
							severity: 'success',
							summary: 'Exito',
							detail: '¡Listo!, tus datos se han actualizado correctamente. Cierre sesión para ver los cambios.',
							sticky: true,
						});
						break;
					case 403:
						toast.current.show({
							severity: 'warn',
							summary: 'Atención',
							detail: 'No cuentas con los permisos suficientes para hacer esta acción.',
							sticky: true,
						});
						break;
					case 404:
						toast.current.show({
							severity: 'info',
							summary: 'Mensaje de información',
							detail: '¡Revise que todos sus datos sean correctos!',
							sticky: true,
						});
						break;
				}
			})
			.catch((error)=>console.log(error))
	}

	useEffect(()=>{
		profileService.getProfileUser(token,userSession.username)
			.then((res) => res.json())
			.then((data) => {
				setProfile(data)
				profileService.getResumeUser(token,userSession.username)
					.then((res) => res.json())
					.then((data) => {
						console.log(data)
						setAcademic(data.curricularTitle)
						setDescription(data.description)
						setIdResume(data.id)
						setFormInputExperience(data.experiences)
						setFormInputCertifications(data.certifications)
						setFormInputCourses(data.courses)
						let languages = []
						data.languages.map((l,i)=>{
							languages.push({
								name: l.language.language,
								abbreviation: l.level,
							})
						})
						setFormInputLanguages(languages)
						setFormInputStudies(data.studies)
					})
			})
			.catch((error) => console.log(error))
	},[])

	return (
		<div>
			<Toast ref={toast} />
			<div className='grid container mt-0'>
				<Button
					label='Guardar'
					onClick={saveLaboralData}
					icon={<span className='material-icons mr-2'>save</span>}
					className='p-button-plain mb-3'
					style={{ background: '#F763B6' }}
					aria-label='Submit'
				/>
				<Accordion
					multiple
					className='w-full h-max'>
					<AccordionTab header='Titúlo Académico'>
						<AcademicAccordion />
					</AccordionTab>

					<AccordionTab header='Descripción'>
						<DescriptionAccordion />
					</AccordionTab>

					<AccordionTab header='Experiencia Laboral'>
						<ExperienceAccordion />
					</AccordionTab>

					<AccordionTab header='Estudios'>
						<StudiesAccordion />
					</AccordionTab>

					<AccordionTab header='Idiomas'>
						<LanguagesAccordion />
					</AccordionTab>

					<AccordionTab header='Certificaciones'>
						<CertificationsAccordion />
					</AccordionTab>

					<AccordionTab header='Cursos Realizados'>
						<CoursesAccordion />
					</AccordionTab>

					<AccordionTab header='Conocimientos y Habilidades'>
						<HabilitiesAccordion />
					</AccordionTab>

				</Accordion>
			</div>
		</div>
	);
};
