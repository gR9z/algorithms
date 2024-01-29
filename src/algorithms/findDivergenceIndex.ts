const findDivergenceIndex = (s1: string, s2: string): number => {
	if (s1 === s2) {
		return -1;
	}

	if (s1.length === 0 || s2.length === 0) {
		return 0;
	}

	const smallestStringLength = s1.length < s2.length ? s1.length : s2.length;

	for (let i = 0; i < smallestStringLength; i++) {
		if (s1[i] !== s2[i]) {
			return i;
		}
	}

	return s1.length !== s2.length ? smallestStringLength : -1;
};

export default findDivergenceIndex;
