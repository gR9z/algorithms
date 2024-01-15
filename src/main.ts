import quickSort from './algorithms/quickSort';

// use of the quickSort algorithm
console.log('----- Quick Sort Algorithm -----');
const originalArray = Array.from({ length: 50 }, () =>
	Math.floor(Math.random() * 50)
);
const newArr = [...originalArray];

console.time('quickSortExecutionTime');
quickSort(newArr, 0, newArr.length - 1);
console.timeEnd('quickSortExecutionTime');

console.log('originalArray: ', originalArray);
console.log('newArray:', newArr);
console.log('- End of Quick Sort Algorithm -');
