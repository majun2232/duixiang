// 继承
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() {
        alert(`${this.name} study`)
    }
}
let zhang = new Student('zhang', 20, 'A1')
zhang.eat()
zhang.speak()
alert(zhang.number)
zhang.study()