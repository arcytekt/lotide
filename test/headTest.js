const head = require('../head');
const assertEqual = require('../assertEqual')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["test", "case"]), "test");