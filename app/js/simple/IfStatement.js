export class IfStatement {
    constructor(condition, consequence, alternative) {
        this.condition = condition;
        this.consequence = consequence;
        this.alternative = alternative;
    }

    toString() {
        const alt = (this.alternative.isReducible) ? `else { 
            ${this.alternative}
        }` : '';
        return `if (${this.condition}) {
            ${this.consequence}
        } ${alt}`;
    }

    get isReducible() {
        return true;
    }

    reduce(env) {
        if (this.condition.isReducible) {
            return {expression: new IfStatement(this.condition.reduce(env), this.consequence, this.alternative), env};
        } else {
            switch (this.condition.val) {
                case true:
                    return { expression: this.consequence, env };
                    break;
                case false:
                    return { expression: this.alternative, env };
                    break;
            }
        }
    }

}