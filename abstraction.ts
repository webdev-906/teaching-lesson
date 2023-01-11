//Abstraction makes things simpler, easier to change, easier to implement, easier to document. It can avoid writing tricky code multiple times, simplify design, optimisation and indexing, and ultimately increase the maintainability of the solution

// Conveying important information (also known as details or properties) of an object or concept, while leaving out the unnecessary information. A way to condense your code. 
 
abstract class Employee {
  // setting up constructor and passing in values
  constructor(private firstName: string, private lastName: string) {
  }

  // behaviors/methods 
  abstract getSalary(): number
  // defined in a program to extract the value of any variable or to access the property of any object in TypeScript
  get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
      return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

// You cannot create a new instance from it with abstract
// let employee = new Employee('John','Doe'); // Cannot create an instance of an abstract class


class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
      super(firstName, lastName);
  }
  getSalary(): number {
      return this.salary;
  }
}


// can create our new instance this way 
let john = new FullTimeEmployee('John', 'Doe', 12000);
console.log(john.compensationStatement());
// or you don't have to call the function in this case you can use john.fullName. 
console.log(john.fullName); // when using get 
// console.log(john.fullName()) // not callable 





