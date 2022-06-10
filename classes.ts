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
class CharAccount extends UserAccount{
    nickname: string
    level: number

    constructor(nickname: string, level: number, name: string, age: number){
        super(name, age)

        this.nickname = nickname
        this.level = level
    }
}

const bruno = new UserAccount("Bruno", 22)

bruno.logDetails()

const jkl = new CharAccount("JKL_br_", 12, "Bruno Marinho", 22)
jkl.logDetails()
