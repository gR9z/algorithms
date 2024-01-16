import display from './utils/displayUtils';

import bubbleSort from './algorithms/bubbleSort';
import quickSortAlgorithm from './algorithms/quickSort';
import recursiveSum from './algorithms/recursivity';

const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101));

display('bubbleSort', bubbleSort, arr);
display('quickSort', quickSortAlgorithm, arr);
display('resursiveSum', recursiveSum, arr);
