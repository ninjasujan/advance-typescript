/**
 * Generics functions
 */

const getTodo = <T>(id: T) => {
	return id;
};

console.log(getTodo<number>(1));

/**
 * Genric interfaces
 */

interface IPerson<T> {
	name: string;
	age: number;
	data: T;
}

const person: IPerson<string> = {
	name: "sujan",
	age: 10,
	data: "some data",
};

function getPerson<T>(data: IPerson<T>) {
	return { ...data, id: 1 };
}

console.log(getPerson<string>({ name: "sujan", age: 12, data: "some data" }));
