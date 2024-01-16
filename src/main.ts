import quickSort from './algorithms/quickSort';
import recursiveSum from './algorithms/recursivity';

// use of the quickSort.ts algorithm
// console.log('----- quickSort Algorithm -----');
// const originalArray = Array.from({ length: 10 }, () =>
// 	Math.floor(Math.random() * 20)
// );
// const newArr = [...originalArray];

// console.time('quickSortExecutionTime');
// quickSort(newArr, 0, newArr.length - 1);
// console.timeEnd('quickSortExecutionTime');

// console.log('originalArray: ', originalArray);
// console.log('newArray:', newArr);
// console.log('-- End of quickSort Algorithm --');

// use of the recursivity.ts algorithm
console.log('----- recursivity Algorithm -----');
console.time('recursiveSumExecutionTime');
console.log(
	'Sum (expected 45): ',
	recursiveSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
); // output: 45
console.timeEnd('recursiveSumExecutionTime');
console.log('-- End of recursivity Algorithm --');
