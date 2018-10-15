export class NoOp {
    constructor() {

    }

    toString() {
        return "EndOfExecution";
    }

    get isReducible() {
        return false;
    }
}