import display from './utils/displayUtils';

import bubbleSort from './algorithms/bubbleSort';
import quickSortAlgorithm from './algorithms/quickSort';
import recursiveSum from './algorithms/recursivity';
import selectionSort from './algorithms/selectionSort';
import mergeSort from './algorithms/mergeSort';
import linearSearch from './algorithms/linearSearch';

const arrLength = 10;
const maxNumber = 101;

const musiciens = [
	'Kurt Cobain',
	'Axl Rose',
	'Freddie Mercury',
	'Jimi Hendrix',
	'David Bowie',
	'Robert Plant',
	'Mick Jagger',
	'John Lennon',
	'Paul McCartney',
	'Eddie Vedder',
	'Chris Cornell',
	'Bono',
	'Bruce Springsteen',
	'Steven Tyler',
	'Roger Waters',
	'David Gilmour',
	'Sting',
	'Elvis Presley',
	'Eric Clapton',
	'Janis Joplin',
];

// display(
// 	'bubbleSort',
// 	bubbleSort,
// 	Array.from({ length: arrLength }, () =>
// 		Math.floor(Math.random() * maxNumber)
// 	)
// );

// display(
// 	'bubbleSort',
// 	bubbleSort,
// 	Array.from({ length: arrLength }, () =>
// 		Math.floor(Math.random() * maxNumber)
// 	)
// );

// display(
// 	'quickSort',
// 	quickSortAlgorithm,
// 	Array.from({ length: arrLength }, () =>
// 		Math.floor(Math.random() * maxNumber)
// 	)
// );

// display(
// 	'resursiveSum',
// 	recursiveSum,
// 	Array.from({ length: arrLength }, () =>
// 		Math.floor(Math.random() * maxNumber)
// 	)
// );

// display(
// 	'selectionSort',
// 	selectionSort,
// 	Array.from({ length: arrLength }, () =>
// 		Math.floor(Math.random() * maxNumber)
// 	)
// );

// display(
// 	'mergeSort',
// 	mergeSort,
// 	Array.from({ length: arrLength }, () =>
// 		Math.floor(Math.random() * maxNumber)
// 	)
// );

display('linearSearch', linearSearch, musiciens);
