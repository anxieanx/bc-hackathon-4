import { DateTime } from 'luxon';

const searchFlights = async (origin, destination, direct) => {
	const dateFrom = DateTime.local().plus({ days: 1}).toFormat('dd/MM/yyyy');
	const dateTo = DateTime.local().plus({ days: 2}).toFormat('dd/MM/yyyy');

	const query = new URLSearchParams({
		partner: 'picky',
		flyFrom: 'PRG',
		to: 'VLC',
		dateFrom: dateFrom,
		dateTo: dateTo,
		v: 3
	});

	const url = new URL(`?${query}`, 'https://api.skypicker.com/flights');
	// console.log('url', url);
	
	const response = await fetch(url);
	const data = await response.json();
	const dataAll = data.data;

	return dataAll;
}

export default searchFlights;