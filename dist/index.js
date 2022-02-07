"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var names = ['Arun', 'Asmita'];
function mergeObject(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObj = mergeObject({ number: 55 }, { roll: 11 });
console.log(newObj);
function countAndDescribe(element) {
    var descriptionText = '';
    if (element.length) {
        descriptionText = "".concat(element, " of length ").concat(element.length);
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hello '));
