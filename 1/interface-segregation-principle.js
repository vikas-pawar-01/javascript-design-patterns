// Clients should not be forced to depend upon interfaces that they do not use.

class Document {

}

class Machine {
    constructor() {
        if (this.constructor.name === 'Machine') {
            throw new Error('Machine is abstract!');
        }
    }

    print(doc) { }
    fax(doc) { }
    scan(doc) { }
}

class MultiFunctionPrinter extends Machine {
    print(doc) {
        //
    }

    fax(doc) {
        //
    }

    scan(doc) {
        //
    }
}

class NotImplemented extends Error {
    constructor(name) {
        let msg = `${name} is not implemented!`;
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplemented);
        }
    }
}

class OldFashionedPrinter extends Machine {
    print(doc) {
        //
    }

    // fax(doc) {
    //     //
    // }

    scan(doc) {
        throw new NotImplemented('OldFashionedPrinter.scan');
    }
}

class Printer {
    constructor() {
        if (this.constructor.name === 'Printer') {
            throw new Error('Printer is abstract!');
        }
    }

    print() { }
}

class Scaner {
    constructor() {
        if (this.constructor.name === 'Scaner') {
            throw new Error('Scaner is abstract!');
        }
    }

    scan() { }
}

class Photocopier {
    constructor() {
        if (this.constructor.name === 'Photocopier') {
            throw new Error('Photocopier is abstract!');
        }
    }

    print() { }
    scan() { }
}