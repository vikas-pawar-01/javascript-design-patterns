# Chapter 1: SOLID Principles

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

# Chapter 6: Adapter

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
- Different proxies (communication, logging, caching, etc) have completely different behaviors

# Chapter 11: Iterator

- An object that facilitates the traversal of a data structure
- An iterator specified how you can traverse an object
- Stateful iterators cannot be recursive
- yield allows for much more succinct iteration

# Chapter 12: Observer

- An observer is an object that wishes to be informed about events happening in the system. The entity generating the events is an observable.
- Observer is an intrusive approach: an observable must provide an event to subscribe to
- Subscription and unsubscription handled with addition / removal of items in a list
- Property notifications are easy. Dependent property notifications are tricky.

# Chapter 13: Strategy

- Enables the exact nehavior of a system to be selected at run-time
- Define an algorithm at a high level
- Define the interfae you expect each strategy to follow
- Provide for dynamic composition of strategies in the resulting object

# Chapter 14: Template Method

- Allows us to define the skeleton of the algorithm, with concrete implementations defiend in subclasses.
- Inherit the algorithm class, providing necessary overrides

# Chapter 15: Visitor

- A component (visitor) that knows how to traverse a data structure composed of (possibly related) types
- Propagate an accept (Visitor v) method throughout the entire hierarchy
- Create a visitor with visitFoo(Foo), visitBar(Bar),.. for each element in the hierarchy
- Each accept() simply calls visitor.visitXxx(this)
