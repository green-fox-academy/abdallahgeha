'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingSeconds: number;

let totalSeconds: number = 24*60*60;
let totalCurrentSeconds: number = currentHours*60*60 + currentMinutes*60 + currentSeconds ;

remainingSeconds = totalSeconds - totalCurrentSeconds;

console.log(remainingSeconds) ;