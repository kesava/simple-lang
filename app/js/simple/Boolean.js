export class Boolean {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return `(${this.value})`;
    }

    get val() {
        return this.value;
    }

    get isReducible() {
        return false;
    }
}
