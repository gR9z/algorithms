import display from './utils/displayUtils';

import bubbleSort from './algorithms/bubbleSort';
import quickSortAlgorithm from './algorithms/quickSort';
import recursiveSum from './algorithms/recursivity';
import selectionSort from './algorithms/selectionSort';
import mergeSort from './algorithms/mergeSort';
import linearSearch from './algorithms/linearSearch';
import binarySearch from './algorithms/binarySearch';
import lcs from './algorithms/longestCommonSubsequence';
import findDivergenceIndex from './algorithms/findDivergenceIndex';
import findDivergenceIndexRecursive from './algorithms/findDivergenceIndexRecursive';
import { Graph, comparator } from './dataStructures/graph';
import { LinkedList } from './dataStructures/linkedList';

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

// console.log(lcs('salut', 'salot'));

// console.log(findDivergenceIndex('bonjour', 'bonjour')); // -1
// console.log(findDivergenceIndex('aBCDEFG', 'bBCDEFG')); // 0
// console.log(findDivergenceIndex('HelloWorl', 'HelloWorld')); // 9
// console.log(findDivergenceIndexRecursive('HelloWorl', 'HelloWorld')); // 9

// Graph
const graph = new Graph<number>(comparator);

// Adding nodes
// graph.addNode(1);
// graph.addNode(2);
// graph.addNode(3);
// graph.addNode(4);
// graph.addNode(5);
// graph.addNode(6);
// graph.addNode(7);
// graph.addNode(8);

// Adding edges
// graph.addEdge(1, 2);
// graph.addEdge(1, 3);
// graph.addEdge(2, 4);
// graph.addEdge(2, 5);
// graph.addEdge(3, 6);
// graph.addEdge(3, 7);
// graph.addEdge(4, 8);

// console.log('Depth-First Search:');
// graph.depthFirstSearch();

// console.log('Breadth-First Search:');
// graph.breadthFirstSearch();

const linkedList = new LinkedList();
linkedList.append(15);
linkedList.append(58);
linkedList.append(44);
linkedList.append(150);
console.log('The linked list contains: ');
linkedList.display();
console.log(`The length of the list is: ${linkedList.length()}`);
console.log(linkedList.search(150));
console.log(linkedList.isEmpty());
linkedList.delete(58);

const emptyLinkedList = new LinkedList();
console.log(emptyLinkedList.isEmpty());
