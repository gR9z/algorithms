import display from './utils/displayUtils';

import bubbleSort from './algorithms/bubbleSort';
import quickSortAlgorithm from './algorithms/quickSort';
import recursiveSum from './algorithms/recursivity';

const arr = [128, 15, 2, 44, 25, 19, 5, 18, 20, 99];

display('bubbleSort', bubbleSort, arr);
display('quickSort', quickSortAlgorithm, arr);
display('resursiveSum', recursiveSum, arr);
