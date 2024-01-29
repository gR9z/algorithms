const findDivergenceIndexRecursive = (
	s1: string,
	s2: string,
	index: number = 0
): number => {
	if (s1 === s2) return -1;
	if (s1.length === 0 || s2.length === 0) return 0;
	if (index >= s1.length || index >= s2.length) {
		return s1.length !== s2.length ? index : -1;
	}

	if (s1[index] !== s2[index]) {
		return index;
	}

	return findDivergenceIndexRecursive(s1, s2, index + 1);
};

export default findDivergenceIndexRecursive;
