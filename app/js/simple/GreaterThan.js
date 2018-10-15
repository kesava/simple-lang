import { LessThan } from './LessThan';
import { EqualTo } from './EqualTo';
import { Compliment } from './Compliment';
import { And } from './And';

export class GreaterThan {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    toString() {
        return `(${this.left} > ${this.right})`;
    }

    get isReducible() {
        return true;
    }

    reduce(env) {
        return new Compliment(new And(new LessThan(this.left, this.right), new EqualTo(this.left, this.right)));
    }
}