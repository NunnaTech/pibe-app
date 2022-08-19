import { Toolbar } from 'primereact/toolbar';
import { LeftContents } from './LeftContents';
import { RightContents } from './RightContents';

export const NavBarApp = () => {
	return (
		<Toolbar
			left={LeftContents}
			className='border-noround'
			right={RightContents}
			style={{ backgroundColor: '#2557A7' }}
		/>
	);
};