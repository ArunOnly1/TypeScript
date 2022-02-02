interface Greetable {
  name: string
  greet(phrase: string): void
}

class User implements Greetable {
  constructor(public name: string, private age: number) {}

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name + ' of age: ' + this.age)
  }
}

const newUser = new User('Arun', 27)

newUser.greet('Helo there, I am ')
