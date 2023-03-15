"use strict";

const calculate = (...args1) => (...args2) =>
[...args1, ...args2].reduce((accum, value) => accum + value, 0);