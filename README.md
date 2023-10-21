# Chapter 1

- Single Resoponsibility Principle
    - A class should only have one reason to change
    - Seperation of concerns- different classes handling different, independent taasks.problems
- Open-Closed Principle
    - Classes should be open for extension but closed for modification
- Liskov Substitution Principle
    - You should be able to substitute a base type for a subtype
- Interface Segregation Principle
    - Don't put too much into an interface; split into seperate interfaces
    - YAGNI- You Ain't Going to Need It
- Dependency Inversion Principle
    - High-level modules should not depend upon low-level onces; use abstraction

# Chapter 2
- Builder
    - A builder is a seperate component for building an object
    - Can either give builder an initializer or return it via a static funciton
    - To make builder fluent, return self
    - Different facets of an object can be built with different builders working in tandem via a base class
