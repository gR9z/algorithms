const display = <T>(
	name: string,
	fn: (input: T[]) => T[] | T,
	data: T[]
): void => {
	console.log(`******* ${name} Algorithm *******`);

	console.time(`${name}ExecutionTime`);
	const result = fn(data);
	console.timeEnd(`${name}ExecutionTime`);

	console.log(`result: ${result}`);

	console.log(`**** End of ${name} Algorithm ***`);
};

export default display;
