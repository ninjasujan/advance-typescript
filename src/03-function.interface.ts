interface ResourceGetter<U> {
	(id: number): U;
}

interface User {
	id: number;
	todo: string;
}

const getId: ResourceGetter<User> = (id) => {
	return {
		id: 1,
		todo: "some work",
	};
};
