import { NoOp } from "./NoOp";

export class Assign {
    constructor(name, expression) {
        this.name = name;
        this.expression = expression;
    }

    get isReducible() {
        return true;
    }

    toString() {
        return `${this.name} = ${this.expression};`;
    }

    reduce(env) {
        if (this.expression.isReducible) {
            return {expression: new Assign(this.name, this.expression.reduce(env)), env};
        } else {
            const result = {};
            result[this.name] = this.expression;
            return {expression: new NoOp(), env: Object.assign(env, result)};
        }
    }
}