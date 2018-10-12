'use strict';
import '../css/style.scss';
import { Num } from './simple/Num';
import { Add } from './simple/Add';
import { LessThan } from './simple/LessThan';
import { Mul } from './simple/Mul';
import { Machine } from './simple/Machine';
import { Variable } from './simple/Variable';

// randomly using ES7 object rest spread because it currently raises
// an error in all browsers, but can be transpiled by Babel
var messageBuffer = '';
console.log('Find my Linkedin profile at https://linkedin.com/in/kesava');
const stepCallback = (message) => {
    messageBuffer += `${message}<br/>`;
    document.querySelector('#output').innerHTML = messageBuffer;
};

const nn = new Num(50);
const n1 = new LessThan(new Mul(new Add(new Variable('x'), new Variable('y')), new Mul(new Variable('z'), new Add(new Variable('x'), new Variable('y')))), new Mul(new Variable('x'), new Mul(new Variable('y'), new Num(10000))));
const env = { x: new Num(2234), y: new Num(9), z: new Num(30) };
document.getElementById('editor').innerHTML = `${JSON.stringify(env)}<br>${n1}`;
const mm = new Machine(n1, env);
mm.run(stepCallback);


