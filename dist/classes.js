"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(nickname, level, name, age) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`my nickname is ${this.nickname}`);
    }
}
const bruno = new UserAccount("Bruno", 22);
bruno.logDetails();
const jkl = new CharAccount("JKL_br_", 12, "Bruno Marinho", 22);
jkl.logDetails();
jkl.logCharDetails();
console.log(jkl.level);
