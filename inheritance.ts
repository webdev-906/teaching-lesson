// Inheritance - Simply extending properties and methods to another subclass 

// declaring a blueprint of a parent 
class Parent{
  // initializes a newly created object of that type syntatical way of typescript
  parentName: string
  parentGender: string

  // setting the parent paramaters parentName and parentGender
  constructor(parentName: string, parentGender: string){
    // this will help us refer to the current object 
    this.parentName = parentName
    this.parentGender = parentGender

  }

  // methods of the parent class
  working(): string {
    return `${this.parentName} is working`
  }

  speaking(): string {
    return `${this.parentName} is speaking`
  }

  
}

// inherits from Parent class to use properties 
class Child extends Parent {
  constructor(parentName: string, parentGender: string){
    // getting access to the parents properties and methods
    super(parentName, parentGender)
  }

  // method of child
  childsParent():string {
    return `This child's parent's name is ${this.parentName}`
  }
}

// setting a new instance of parent 
let parent1 = new Parent ('Shelly', 'Female');
// calling the method
console.log(parent1.working())


// setting a new instance of child 
// calling the method speaking() of the parent class
let child1 = new Child('Lisa', 'Female');
console.log(child1.speaking())