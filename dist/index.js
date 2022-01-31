"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department :', this.name);
    }
}
const hm = new Department('Hotel Management');
hm.describe();
