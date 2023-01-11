class Animal {
  animalName: string 
  animalType: string 

  // blueprint or properties
  constructor(animalName: string, animalType: string){
    this.animalName = animalName
    this.animalType = animalType

  }

  // behaviors
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
  makeSound(): string {
      return `${this.animalName} barked!`
  }
}

const dog1 = new Dog('Jazz', 'Dog')
console.log(dog1.makeSound())
