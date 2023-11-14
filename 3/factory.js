const CoordinateSystem = {
    cartesian: 0,
    polar: 1
};

class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static factory() {
        return new PointFactory();
    }
}

class PointFactory {
    newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta)
        );
    }
}

let c = Point.factory().newCartesianPoint(4, 5);
console.log(c);

let p = Point.factory().newPolarPoint(5, Math.PI / 2);
console.log(p);