Encapsulation  - Access Modifiers (public, private, protected, readonly)
Refers to the grouping of variables, methods and classes. It is used to hide data and methods that are meant to be internal required for the inner working of the object. It is equlivant to abstraction. 

Polymorphism - Method Overrinding 
When you have multiple classes that have the same method but a different implementation of that method. It decides what form of method to execute. 

Inheritance - Single / Multi - Level & Multiple
New classes that inherit features of the superclass. It allows a class to reuse the fuctionality of an existing class without rewriting it. 

Abstraction - Interface and Abstract Class
A method of modelling objects in a system that separates the responsibilities of the class or type from the code that inherits it


Static is accesing fields without creating an instance of a class(checking the tyoe of the object).  This allows you to use dot notation.  The protected modifer is similiar to the private access modifer with the exception of being accessed by deriving classes.  The private access modifer ensures that class members are visible only to that class and it is not accessible outside the containing class. 

The static method is faster than instance methods. It can also keep track of information that relates logically to an entire class as opposed to instances.  Protected modifers allows you to access certain data and that data can also be derived to a child class. For private classes, any attempt to access will result in a error. 