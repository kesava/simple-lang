export class Machine {
    constructor(expression, env) {
        this.expression = expression;
        this.env = env;
    }

    step() {
        // console.log(`Before Reducing: ${this.expression}`);
        this.expression = this.expression.reduce(this.env);
        // console.log(`After Reducing: ${this.expression}`);
    }

    run(stepCallback) {
        while (this.expression.isReducible) {
            console.log(String(this.expression));
            stepCallback(String(this.expression));
            this.step();
        }
        console.log(String(this.expression));
        stepCallback(String(this.expression));
    }
}
