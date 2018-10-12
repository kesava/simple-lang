export class Variable {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `${this.name}`;
    }

    get isReducible() {
        return true;
    }

    reduce(env) {
        return env[this.name];
    }
}
