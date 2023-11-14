class Buffer {
    constructor(width = 30, height = 20) {
        super();

        this.width = width;
        this.height = height;
        this.alloc(width * height);
    }
}

class ViewPort {
    constructor() {
        
    }
}