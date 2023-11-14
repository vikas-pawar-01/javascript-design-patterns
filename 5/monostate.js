class Person {
    get name() { return Person._name; }
    set name(value) { Person._name = value; }

    toString() {
        return `Person name is ${this.name}`;
    }
}

const p1 = new Person();
p1.name = 'Test111';

const p2 = new Person();
p2.name = 'Test222';

console.log(p1.toString());
console.log(p2.toString());
