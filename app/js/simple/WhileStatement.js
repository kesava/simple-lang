import { IfStatement } from './IfStatement';
import { DoNothing } from './DoNothing';
import { Sequence } from './Sequence';

export class WhileStatement {
    constructor(condition, sequence) {
        this.condition = condition;
        this.sequence = sequence;
    }

    get isReducible() {
        return true;
    }

    toString() {
        return `while (${this.condition}) {
            ${this.sequence}
        }`;
    }

    reduce(env) {
        return { expression: new IfStatement(this.condition, new Sequence(this.sequence, new WhileStatement(this.condition, this.sequence)), new DoNothing()), env}
    }
    
}