// You cannot create a new object from it with abstract
abstract class Employee {
  constructor(private firstName: string, private lastName: string) {
  }
  abstract getSalary(): number
  get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
      return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

// let employee = new Employee('John','Doe'); // Cannot create an instance of an abstract class

class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
      super(firstName, lastName);
  }
  getSalary(): number {
      return this.salary;
  }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
console.log(john.compensationStatement());