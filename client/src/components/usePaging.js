import  { useEffect } from 'react';


export const usePaging = (list, setList, pageNum, pageSize) => {

	useEffect(() => {
		setList(list.slice((pageNum - 1)*pageSize, pageNum*pageSize));
	}, [list, setList, pageNum, pageSize]);

}
