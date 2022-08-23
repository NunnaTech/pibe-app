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
import DateService from '../../services/DateService';
import { useState } from 'react';

export const LaboralData = () => {
	// Controlled Hooks
	const [flag, setFlag] = useState(false);
	// Zustand States
	const { userSession, token } = useStoreSession();
	const { profile, setProfile, setIdResume, idResume } = useStoreResume();
	const {
		formInputCertifications,
		setFormInputCertifications,
		toDeleteCertifications,
		resetToDeleteCertifications,
	} = useStoreCertifications();
	const {
		formInputCourses,
		setFormInputCourses,
		toDeleteCourses,
		resetToDeleteCourses,
	} = useStoreCourses();
	const {
		formInputExperience,
		setFormInputExperience,
		toDeleteExperience,
		resetToDeleteExperience,
	} = useStoreExperience();
	const { habilities, setHabilities } = useStoreHabilities();
	const {
		formInputLanguages,
		setFormInputLanguages,
		toDeleteLanguages,
		resetToDeleteLanguages,
	} = useStoreLanguages();
	const {
		formInputStudies,
		setFormInputStudies,
		toDeleteStudies,
		resetToDeleteStudies,
	} = useStoreStudies();
	const { academic, description, setAcademic, setDescription } =
		useStoreResumeOthers();
	// API services
	const profileService = new ProfileService();
	// Toast
	const toast = useRef(null);

	function setValuesResume() {
		// JSON to dreadful API, I hate this sh1t
		let objSend = {
			active: true,
			aptitudes: [],
			certifications: [],
			completed: true,
			id: idResume,
			courses: [],
			curricularTitle: 'string',
			description: 'string',
			experiences: [],
			languages: [],
			profile: profile,
			studies: [],
			style: {
				id: 1,
				name: 'Plantilla 1',
			},
		};
		// Aptitudes
		let aptitudes = [];
		habilities.map((obj, index) => {
			aptitudes.push({ name: obj });
		});
		objSend.aptitudes = aptitudes;
		// Certifications
		let certifications = [];
		toDeleteCertifications.map((c, i) => {
			if (c.company != '') {
				certifications.push({
					active: false,
					id: c.id,
					company: c.company,
					expirationDate: `${DateService.parseToDate(
						c.expirationDate,
					)}T00:00:00`,
					name: c.name,
					obtainedDate: `${DateService.parseToDate(c.obtainedDate)}T00:00:00`,
				});
			}
		});
		formInputCertifications.map((c, i) => {
			if (c.expirationDate != 'T00:00:00') {
				certifications.push({
					active: true,
					id: c.id,
					company: c.company,
					expirationDate: `${DateService.parseToDate(
						c.expirationDate,
					)}T00:00:00`,
					name: c.name,
					obtainedDate: `${DateService.parseToDate(c.obtainedDate)}T00:00:00`,
				});
			}
		});
		objSend.certifications = certifications;
		// Courses
		let courses = [];
		toDeleteCourses.map((c, i) => {
			courses.push({
				active: false,
				id: c.id,
				finishedDate: `${DateService.parseToDate(c.finishedDate)}T00:00:00`,
				hours: c.hours,
				name: c.name,
				realizationDate: `${DateService.parseToDate(
					c.realizationDate,
				)}T00:00:00`,
				trainingInstitution: c.trainingInstitution,
			});
		});
		formInputCourses.map((c, i) => {
			courses.push({
				active: c.active,
				id: c.id,
				finishedDate: `${DateService.parseToDate(c.finishedDate)}T00:00:00`,
				hours: c.hours,
				name: c.name,
				realizationDate: `${DateService.parseToDate(
					c.realizationDate,
				)}T00:00:00`,
				trainingInstitution: c.trainingInstitution,
			});
		});
		objSend.courses = courses;
		// Experiences
		let experiences = [];
		toDeleteExperience.map((o, i) => {
			experiences.push({
				id: o.id,
				active: false,
				activities: o.activities,
				endPeriod: `${DateService.parseToDate(o.endPeriod)}T00:00:00`,
				position: o.position,
				startPeriod: `${DateService.parseToDate(o.startPeriod)}T00:00:00`,
			});
		});
		formInputExperience.map((e, i) => {
			experiences.push({
				id: e.id,
				active: true,
				activities: e.activities,
				endPeriod: `${DateService.parseToDate(e.endPeriod)}T00:00:00`,
				position: e.position,
				startPeriod: `${DateService.parseToDate(e.startPeriod)}T00:00:00`,
			});
		});
		objSend.experiences = experiences;
		// Languages
		let languages = [];
		toDeleteLanguages.map((l, i) => {
			languages.push({
				active: false,
				id: l.id,
				language: {
					abbreviation: 'NA',
					language: l.name,
				},
				level: l.abbreviation,
			});
		});
		formInputLanguages.map((l, i) => {
			languages.push({
				active: true,
				id: l.id,
				language: {
					abbreviation: 'NA',
					language: l.name,
				},
				level: l.abbreviation,
			});
		});
		objSend.languages = languages;
		// Studies
		let studies = [];
		toDeleteStudies.map((s, i) => {
			studies.push({
				id: s.id,
				active: false,
				endPeriod: `${DateService.parseToDate(s.endPeriod)}T00:00:00`,
				name: s.name,
				startPeriod: `${DateService.parseToDate(s.startPeriod)}T00:00:00`,
			});
		});
		formInputStudies.map((s, i) => {
			studies.push({
				id: s.id,
				active: true,
				endPeriod: `${DateService.parseToDate(s.endPeriod)}T00:00:00`,
				name: s.name,
				startPeriod: `${DateService.parseToDate(s.startPeriod)}T00:00:00`,
			});
		});
		objSend.studies = studies;
		// Curricular & description
		objSend.curricularTitle = academic;
		objSend.description = description;
		return objSend;
	}

	const deleteAllsThings = () => {
		resetToDeleteCertifications();
		resetToDeleteCourses();
		resetToDeleteExperience();
		resetToDeleteLanguages();
		resetToDeleteStudies();
	};

	const reloadAll = () => {
		profileService
			.getProfileUser(token, userSession.username)
			.then((res) => res.json())
			.then((data) => {
				setProfile(data);
				profileService
					.getResumeUser(token, userSession.username)
					.then((res) => res.json())
					.then((data) => {
						setAcademic(data.curricularTitle);
						setDescription(data.description);
						setIdResume(data.id);
						setFormInputExperience(data.experiences);
						setFormInputCertifications(data.certifications);
						setFormInputCourses(data.courses);
						let languages = [];
						data.languages.map((l, i) => {
							languages.push({
								name: l.language.language,
								abbreviation: l.level,
								id: l.id,
							});
						});
						setFormInputLanguages(languages);
						setFormInputStudies(data.studies);
						let hab = [];
						data.aptitudes.map((a, i) => {
							hab.push(a.name);
						});
						setHabilities(hab);
					});
			})
			.catch((error) => console.log(error));
	};

	const saveLaboralData = () => {
		let resume = setValuesResume();
		setFlag(true);
		toast.current.show({
			severity: 'info',
			summary: 'Información',
			detail:
				'Sus datos estan siendo guardados, espere un momento por favor.',
			sticky: true,
		});
		profileService
			.saveResumeUser(userSession.username, token, resume)
			.then((res) => {
				switch (res.status) {
					case 200:
						toast.current.show({
							severity: 'success',
							summary: 'Exito',
							detail: '¡Listo!, tus datos se han actualizado correctamente',
							sticky: true,
						});
						setFlag(false);
						deleteAllsThings();
						break;
					case 403:
						toast.current.show({
							severity: 'warn',
							summary: 'Atención',
							detail:
								'No cuentas con los permisos suficientes para hacer esta acción.',
							sticky: true,
						});
						break;
					case 404:
						toast.current.show({
							severity: 'warn',
							summary: 'Mensaje de información',
							detail: '¡Revise que todos sus datos sean correctos!',
							sticky: true,
						});
						break;
				}
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		deleteAllsThings();
		reloadAll();
	}, []);

	return (
		<div>
			<Toast ref={toast} />
			{idResume != null && (
				<div className='grid container mt-0'>
					<Button
						label='Guardar'
						disabled={flag}
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
			)}
			{idResume == null && (
				<div className='grid container'>
					<div className='col flex justify-content-center font-semibold text-color-secondary'>
						Cargando datos...
					</div>
				</div>
			)}
		</div>
	);
};
