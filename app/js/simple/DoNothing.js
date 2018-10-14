export class DoNothing {
    constructor() {

    }

    toString() {
        return "EndOfExecution";
    }

    get isReducible() {
        return false;
    }
}