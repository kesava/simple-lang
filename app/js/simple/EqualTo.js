import { Boolean } from './Boolean'

export class EqualTo {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    get isReducible() {
        return true;
    }

    toString() {
        return `(${this.left} == ${this.right})`;
    }

    reduce(env) {
        if (this.left.isReducible) {
            return new EqualTo(this.left.reduce(env), this.right);
        } else if (this.right.isReducible) {
            return new EqualTo(this.left, this.right.reduce(env));
        } else {
            return new Boolean(this.left.val === this.right.val);
        }
    }



    
}