import { Boolean } from './Boolean';

export class Compliment {
    constructor(expression) {
        this.expression = expression;
    }

    toString() {
        return `(!${this.expression})`;
    }

    get isReducible() {
        return true;
    }

    reduce(env) {
        if (this.expression.isReducible) {
            return new Compliment(this.expression.reduce(env));
        } else {
            switch (this.expression.val) {
                case true:
                    return new Boolean(false);
                    break;

                case false:
                    return new Boolean(true);
                    break;
            }
        }
    }
}
