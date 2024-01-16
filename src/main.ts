import display from './utils/displayUtils';

import bubbleSort from './algorithms/bubbleSort';
import quickSortAlgorithm from './algorithms/quickSort';
import recursiveSum from './algorithms/recursivity';
import selectionSort from './algorithms/selectionSort';

const arrLength = 10;
const maxNumber = 101;

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

display(
	'selectionSort',
	selectionSort,
	Array.from({ length: arrLength }, () =>
		Math.floor(Math.random() * maxNumber)
	)
);
