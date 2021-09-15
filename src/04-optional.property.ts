interface IEmployee {
	name: string;
	empId?: string;
}

class Person implements IEmployee {
	constructor(public name: string, public empId?: string) {}
}

const per1 = new Person("sujan", "101");
const per2 = new Person("Shaun");
