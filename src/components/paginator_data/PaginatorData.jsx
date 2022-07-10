import { Card } from 'primereact/card';
import { Paginator } from 'primereact/paginator';
import { useState } from 'react';

export const PaginatorData = () => {
	const [basicFirst, setBasicFirst] = useState(0);
	const [basicRows, setBasicRows] = useState(10);

	const onBasicPageChange = (event) => {
		setBasicFirst(event.first);
		setBasicRows(event.rows);
	}
	return(
		<Card >
			<Paginator className="p-0 m-0" first={basicFirst} rows={basicRows} totalRecords={120} onPageChange={onBasicPageChange}></Paginator>
		</Card>
	)
}