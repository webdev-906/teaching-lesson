

class Parent{
  parentName: string
  parentGender: string

  constructor(parentName: string, parentGender: string){
    this.parentName = parentName
    this.parentGender = parentGender

  }

  working(): string {
    return `${this.parentName} is working`
  }

  
}

class Child extends Parent {
  constructor(parentName: string, parentGender: string){
    super(parentName, parentGender)
  }

  childsParent():string {
    return `This child's parent's name is ${this.parentName}`
  }
}

let parent1 = new Parent ('Shelly', 'Female');
console.log(parent1.working())

let child1 = new Child('Lisa', 'Female');
console.log(child1.childsParent())