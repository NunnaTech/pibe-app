import { Button } from 'primereact/button';
import { useStoreHomeCandidates } from '../../storage/HomeCandidateZustand';

export const PaginatorData = ({}) => {
	const { totalPag, page, setPage } = useStoreHomeCandidates();

	const onBasicPageChange = (page) => {
		setPage(page + 1);
	};

	return (
		<div className='grid card p-2 bg-white w-auto h-auto border-round-md shadow-4 mr-3 ml-3'>
			{Array.from({ length: totalPag }).map((o, index) => {
				return (
					<Button
						key={index}
						className={
							page === index + 1
								? 'bg-pink-400 p-button-rounded m-1 shadow-4'
								: 'surface-200 p-button-rounded m-1 text-900 shadow-4'
						}
						icon={index + 1}
						onClick={() => onBasicPageChange(index)}
					/>
				);
			})}
		</div>
	);
};
