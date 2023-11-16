# Chapter 1

## Single Resoponsibility Principle

- A class should only have one reason to change
- Seperation of concerns- different classes handling different, independent taasks.problems

## Open-Closed Principle

- Classes should be open for extension but closed for modification

## Liskov Substitution Principle

- You should be able to substitute a base type for a subtype

## Interface Segregation Principle

- Don't put too much into an interface; split into seperate interfaces
- YAGNI- You Ain't Going to Need It

## Dependency Inversion Principle

- High-level modules should not depend upon low-level onces; use abstraction

# Chapter 2: Builder

- A builder is a seperate component for building an object
- Can either give builder an initializer or return it via a static funciton
- To make builder fluent, return self
- Different facets of an object can be built with different builders working in tandem via a base class

# Chapter 3: Factory

- A factory method is a static method that creates objects
- A factory is any entity that can take care of object creation
- A factory can be external or reside inside the object as an inner class
- Hierarchies of cfactories can be used to create related objects

# Chapter 4: Prototype

- To implement a prototype, partially construct an object and store it somewhere
- Deep copy the prototype
- Customize the resulting instance
- A factory provides a convenient API for using prototypes

# Chapter 5: Singleton

- A constructor can choose what to return; we can keep returning same instance
- Monostate: many instances, shared data
- Directly depending on the singleton is bad idea; introduce a dependency instead

# Chapter 6

- Adapter
  - Implement an Adapter is easy
  - Determine the API you have and API you need
  - Create a component which aggregates (has reference to,..) hte adaptee
  - Intermediate representations can pile up: use caching and other optimizations

# Chapter 7: Facade

- Build a Facade to provide a simplified API over a set of classes
- May wish to (optionally) expose internal through the facade
- May allow users to 'escalate' to use more complex APIs if they need to

# Chapter 8: Decorator

- A decorator keeps the reference to the decorated objects
- Adds utility fields and methods to augment the objects features
- May or may not forward call to the underlying object

# Chapter 9: Composite

- Objects use other objects fields/methods through inheritance and composition
- Composition lets us make compound objects
  - e.g., a mathematical expression composed of simple expressions; or
  - A shape group made of several different shapes
- Composite design pattern is used to treat both single (scalar) and composite objects unitformly
  - i.e., class Foo and an array (containing Foos having the same API)
- A mechanism for treating individual (scalar) objects and compositions of objects in unitform manner

# Chapter 10: Proxy

- A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or som other added functionality.
- A proxy has the same interface as the underlying object
- To create a proxy, simply replicate the existing interface of an object
- Add relevent functionality to the redefined member fucntions
- Different proxies (communication, loggin, caching, etc) have completely different behaviors
