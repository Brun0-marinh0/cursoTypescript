class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    logDetails():void{
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

const bruno = new UserAccount("Bruno", 22)

bruno.logDetails()
