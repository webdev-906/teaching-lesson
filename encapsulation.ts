// Encapsulation in object-oriented programming refers to restricting unauthorized access and mutation of specific properties of an object.
// In TypeScript, access modifiers are used to achieve encapsulation.
// By default, all class properties in a class are public. This default behavior can be overridden by prefixing the properties with access modifiers.

class Person {
  fullName: string
  age: number 
  jobTitle: string 
  private ssn: string // access modifer private this means it won't be accesible outside outside of this class

  // blueprint or properties
  constructor(fullName: string, age: number, jobTitle: string, ssn: string ){
    this.fullName = fullName
    this.age = age
    this.jobTitle = jobTitle
    this.ssn = ssn
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
const person1 = new Person('John Pace', 56, 'Network Engineer', '000-00-0000');

// console.log(person1.ssn) // will warn you that this is private and only acessible within the class Person


