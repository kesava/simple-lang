import { Num } from './Num';

export class Add {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    toString() {
        return `« ${this.left} + ${this.right} »`;
    }

    get isReducible() {
        return true;
    }

    reduce() {
        if (this.left.isReducible) {
            return new Add(this.left.reduce(), this.right);
        } else if (this.right.isReducible) {
            return new Add(this.left, this.right.reduce());
        } else {
            return new Num(this.left.val + this.right.val);
        }
    }
}
