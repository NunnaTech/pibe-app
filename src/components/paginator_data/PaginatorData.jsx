import { Card } from 'primereact/card';
import { Paginator } from 'primereact/paginator';
import { useState } from 'react';
import { useStoreHomeCandidates } from '../../storage/HomeCandidateZustand';

export const PaginatorData = () => {
	const { totalPages, page, setPage } = useStoreHomeCandidates();

	const onBasicPageChange = (event) => {
		setPage(event.first + 1);
	};

	return (
		<div className='grid card p-2 bg-white w-auto h-auto border-round-md shadow-4 mr-3 ml-3'>
			<Paginator
				className='p-0 m-0'
				first={page}
				rows={3}
				totalRecords={totalPages}
				onPageChange={onBasicPageChange}></Paginator>
		</div>
	);
};
