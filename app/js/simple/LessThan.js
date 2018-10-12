import { Boolean } from './Boolean';

export class LessThan {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    toString() {
        return `« ${this.left} < ${this.right} »`;
    }

    get isReducible() {
        return true;
    }

    reduce() {
        if (this.left.isReducible) {
            return new LessThan(this.left.reduce(), this.right);
        } else if (this.right.isReducible) {
            return new LessThan(this.left, this.right.reduce());
        } else {
            return new Boolean(this.left.val < this.right.val);
        }
    }
}
