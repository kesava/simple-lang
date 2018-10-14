export class DoNothing {
    constructor() {

    }

    toString() {
        return "DoNothing";
    }

    get isReducible() {
        return false;
    }
}