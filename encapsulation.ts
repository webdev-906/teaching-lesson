class Person {
  fullName: string
  age: number 
  jobTitle: string 

  // blueprint or properties
  constructor(fullName: string, age: number, jobTitle: string){
    this.fullName = fullName
    this.age = age
    this.jobTitle = jobTitle
  }

  // behaviors of blueprint
  greeting(): string {
    return `${this.fullName} says hello...`
  }

  currentRole(): string{
    return `${this.fullName} is ${this.age} and is a ${this.jobTitle}`
  }
}
// initializing our person 
const person = new Person('John Pace', 56, 'Network Engineer');
console.log(person.currentRole())


