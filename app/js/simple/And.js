import { Boolean } from './Boolean';

export class And {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    toString() {
        return `(${this.left} && ${this.right})`;
    }

    get isReducible() {
        return true;
    }

    reduce(env) {
        if (this.left.isReducible) {
            return new And(this.left.reduce(env), this.right);
        } else if (this.right.isReducible) {
            return new And(this.left, this.right.reduce(env));
        } else {
            return new Boolean(this.left.val && this.right.val);
        }
    }
}