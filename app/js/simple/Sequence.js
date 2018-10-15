import { NoOp } from "./NoOp";

export class Sequence {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    toString() {
        return `${this.first}`;
    }

    get isReducible() {
        return true;
    }

    reduce(env) {    
        if (this.first && this.first.isReducible) {
            const reducedEnv = this.first.reduce(env);
            return { expression: new Sequence(reducedEnv.expression, this.second), env: reducedEnv.env};
        } else if (this.second && this.second.isReducible) {
            return { expression: new Sequence(this.second, new NoOp()), env };
        }  else {
            return { expression: new NoOp(), env };
        }
    }
}
