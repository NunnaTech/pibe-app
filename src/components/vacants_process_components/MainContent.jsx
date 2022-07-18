import { LeftCard } from './LeftCard';
import { RightCard } from './RightCard';

export const MainContent = () => {
	return (
		<div className="grid m-8">
			<div className="sm:col-12 md:col-8">
				<LeftCard/>
			</div>
			<div className="sm:col-12 md:col-4">
				<RightCard/>
			</div>
		</div>
	);
};
