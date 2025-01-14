"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger0(constructor) {
    // common practice to capitalize the decorator name
    console.log("Logging...");
    console.log(constructor);
}
// decorator factory
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// building more useful decorators
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hook_element = document.getElementById(hookId);
        const p = new constructor();
        if (hook_element) {
            hook_element.innerHTML = template;
            hook_element.querySelector("h1").textContent = p.name;
        }
    };
}
// @Logger0
// @Logger("LOGGING-PERSON")
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
