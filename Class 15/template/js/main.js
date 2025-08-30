"use strict";

//factory function
function createFactoryFuncObj(value) {
    return {
        value,
        method: function() {
            console.log(`This is a factory function with a label value of ${value}`);
        },
    };
};

createFactoryFuncObj.call({}, 100).method();

//constructor function
function CreateConstructorFuncObj(value) {
    this.value = value;
    this.method = function() {
        console.log(`This is a constructor function with a label value of ${value}`);
    };
};

let constructorFuncObj = new CreateConstructorFuncObj(50);
console.log(constructorFuncObj.method())

//class object
class CreateClassObj {
    constructor(value) {
        this.value = value;
        this.method = function() {
            console.log(`This is a class object with a label value of ${value}`);
        };
    };
};

let classObjFunc = new CreateClassObj(25);
console.log(classObjFunc.method());

//constructor function with private members
function PrivateMembersObj() {
    let value = 0;
    let method = function(){
        value = 12.5;
        console.log(`The value of value is ${value}`);
    };
    Object.defineProperty(this, "method", {
        get: function(){
            method();
        }
    });
};

let newPrivMembObj = new PrivateMembersObj();
console.log(newPrivMembObj);
