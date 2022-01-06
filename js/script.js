'use strict';

const person = {
    name: "James",
    age: 15,
}

function info(num, city) {
    console.log(`Name: ${this.name}, Age: ${this.age} , School № ${num}, City: ${city}`);
}

function binds(fn, context, ...rest) {
    return function (...args) {
        return fn.apply(context, rest.concat(args))
    }
}

binds(info, person, '111', 'Chicago')()