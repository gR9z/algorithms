import display from './utils/displayUtils';

import bubbleSort from './algorithms/bubbleSort';
import quickSortAlgorithm from './algorithms/quickSort';
import recursiveSum from './algorithms/recursivity';
import selectionSort from './algorithms/selectionSort';
import mergeSort from './algorithms/mergeSort';
import linearSearch from './algorithms/linearSearch';
import binarySearch from './algorithms/binarySearch';
import lcs from './algorithms/longestCommonSubsequence';

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

// display('linearSearch', linearSearch, musiciens);

// display(
// 	'binarySearch',
// 	binarySearch,
// 	[
// 		4, 10, 26, 32, 38, 44, 52, 59, 60, 67, 77, 78, 86, 89, 91, 95, 99, 101,
// 		108, 109,
// 	],
// 	99
// );

console.log(lcs('salut', 'salot'));
