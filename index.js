class Base {
  constructor() {
    console.log("base constructor");
  }
  printString() {
    console.log(`In base class ${this}`);
  }
}

class Derived extends Base {
  constructor() {
    super();
    console.log("derived constructor");
  }
  printDerived() {
    console.log(`In derived class ${this}`);
  }
}

const obj = new Derived();
obj.printDerived();
obj.printString();
