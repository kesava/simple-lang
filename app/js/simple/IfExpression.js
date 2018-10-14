export class IfExpression {
    constructor(condition, consequence, alternative) {
        this.condition = condition;
        this.consequence = consequence;
        this.alternative = alternative;
    }

    toString() {
        const alt = (this.alternative.isReducible) ? `else { 
            ${this.alternative}
        }` : '';
        return `ifExpr (${this.condition}) {
            ${this.consequence}
        } ${alt}`;
    }

    get isReducible() {
        return true;
    }

    reduce(env) {
        if (this.condition.isReducible) {
            return new IfExpression(this.condition.reduce(env), this.consequence, this.alternative);
        } else {
            switch (this.condition.val) {
                case true:
                    return this.consequence;
                    break;
                case false:
                    return this.alternative;
                    break;
            }
        }
    }

}