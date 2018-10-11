export class Num {
    constructor(num) {
        this.num = num || 0;
    }

    toString() {
        return `${this.num}`;
    }

    get val() {
        return this.num;
    }

    get isReducible() {
        return false;
    }
}
