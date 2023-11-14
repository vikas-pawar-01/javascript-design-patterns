class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }

    toString() {
        return `Address: ${this.street} ${this.city}`;
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    toString() {
        return `${this.name} lives at ${this.address}`;
    }

}

const john = new Person('John', new Address('Lane 5', 'Pune'));

const jane = JSON.parse(JSON.stringify(john));

jane.name = 'Jane';
jane.address.street = 'Lane 10';
jane.address.city = 'Bombay';

console.log(john.toString());
console.log(jane.toString());