// Car Class
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

// SportsCar Class inheriting from Car
class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); // Call the parent constructor
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
