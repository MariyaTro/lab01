const _ = require('lodash');

// chunk
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));


// isEmpty
console.log(_.isEmpty({}));


// capitalize
console.log(_.capitalize('hello'));


// reverse
console.log(_.reverse([1, 2, 3]));


// sortBy
const users = [
    { 'user': 'Max',   'age': 37 },
    { 'user': 'Anna', 'age': 19 },
    { 'user': 'Mary',   'age': 28 },
    { 'user': 'Ivan', 'age': 34 }
];
console.log(_.sortBy(users, ['user', 'age']));