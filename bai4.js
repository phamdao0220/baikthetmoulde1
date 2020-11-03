class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    toString() {
        document.write("name : " + this.getName() + "weight : " + this.getWeight());
    }
}