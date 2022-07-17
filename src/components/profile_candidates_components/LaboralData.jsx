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

export const LaboralData = () => {
	return (
		<div>
			<div className='grid container mt-0'>
				<Button
					label='Guardar'
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
