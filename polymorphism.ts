// When multiple classes inherit from a parent and override the same functionality, the result is polymorphism. Each of those child classes now implements a property or method, but they each may have their own way of performing that implementation.


// blue print of Animal
class Animal {
  animalName: string 
  animalType: string 

  // blueprint or properties
  constructor(animalName: string, animalType: string){
    this.animalName = animalName
    this.animalType = animalType

  }

  // behaviors / methods
  makeSound(): string {
    return `${this.animalName} made a sound`
  }

  nature(): string{
    return `${this.animalType} animal goes by instict only`
  }
  
}


class Dog extends Animal {
  constructor(animalName: string, animalType: string){
    super(animalName, animalType)
  }
}

class Cat extends Animal {
  constructor(animalName: string, animalType: string){
    super(animalName, animalType)
  }
}

// instance of dog that inherits makeSound 
const dog1 = new Dog('Jazz', 'Dog')
console.log(dog1.makeSound())


// instance of cat that inherits makeSound 
const cat1 = new Cat('Blu', 'Cat')
console.log(cat1.makeSound())