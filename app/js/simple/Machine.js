export class Machine {
    constructor(expression, env) {
        this.expression = expression;
        this.env = env;
    }

    step() {
        // console.log(`Before Reducing: ${this.expression}`);
        const result = this.expression.reduce(this.env);
        this.expression = result.expression;
        this.env = result.env;
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
        stepCallback(`------------<br>End state of Environment: ${JSON.stringify(this.env)}<br>------------`);
    }
}
