'use strict';
import '../css/style.scss';
import { Num } from './simple/Num';
import { Add } from './simple/Add';
import { Mul } from './simple/Mul';
import { Machine } from './simple/Machine';

// randomly using ES7 object rest spread because it currently raises
// an error in all browsers, but can be transpiled by Babel
var messageBuffer = '';

const stepCallback = (message) => {
    messageBuffer += `${message}<br/>`;
    document.querySelector('#output').innerHTML = messageBuffer;
};

const nn = new Num(50);
const n1 = new Mul(new Add(new Num(3), new Num(5)), new Mul(new Num(12), new Add(new Num(33), new Num(67))));
document.getElementById('editor').innerHTML = n1;
const mm = new Machine(n1);
mm.run(stepCallback);


