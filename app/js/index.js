'use strict';
import '../css/style.scss';
import { Num } from './simple/Num';
import { Add } from './simple/Add';
import { LessThan } from './simple/LessThan';
import { Mul } from './simple/Mul';
import { Machine } from './simple/Machine';
import { Variable } from './simple/Variable';
import { Assign } from './simple/Assign';
import { IfStatement } from './simple/IfStatement';
import { IfExpression } from './simple/IfExpression';
import { DoNothing } from './simple/DoNothing';

// randomly using ES7 object rest spread because it currently raises
// an error in all browsers, but can be transpiled by Babel
var messageBuffer = '';
console.log('Find my Linkedin profile at https://linkedin.com/in/kesava');
const stepCallback = (message) => {
    messageBuffer += `${message}<br/>`;
    document.querySelector('#output').innerHTML = messageBuffer;
};

const n1 = new Assign('x', new Mul(new Add(new Variable('x'), new Variable('y')), new Mul(new Variable('z'), new Add(new Variable('x'), new Variable('y')))), new Mul(new Variable('x'), new Mul(new Variable('y'), new Num(10000))));

const n2Cond = new LessThan(new Add(new Variable('x'), new Num(5)), new Num(9));
const n2 = new IfStatement(n2Cond, new Assign('r', new Num(42)), new Assign('t', new Num(22)));

const n3Cond = new LessThan(new Num(9), new Num(2));
const n3 = new Assign('z', new IfExpression(n3Cond, new Add(new Num(1000), new Num(729)), new Add(new Num(99), new Num(22))));

const env = { x: new Num(2234), y: new Num(9), z: new Num(30) };
document.getElementById('editor').innerHTML = `Initial Environment variables: ${JSON.stringify(env)}<br><br>${n1}<br><br>${n2}<br><br>${n3}`;

const mm = new Machine(n1, env);
mm.run(stepCallback);

const mm1 = new Machine(n2, env);
mm1.run(stepCallback);

const mm2 = new Machine(n3, env);
mm2.run(stepCallback);

