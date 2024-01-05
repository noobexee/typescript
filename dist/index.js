"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const array1 = [1, 2, 5];
const array2 = [3, 4, 6];
const mergedArray1 = (0, merge_1.merge)(array1, array2);
console.log('Merged Array1:', mergedArray1);
