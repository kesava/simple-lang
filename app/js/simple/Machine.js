export class Machine {
    constructor(expression) {
        this.expression = expression;
    }

    step() {
        // console.log(`Before Reducing: ${this.expression}`);
        this.expression = this.expression.reduce();
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
