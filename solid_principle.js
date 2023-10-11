// SOLID Principle

// S - Single Responsiblity Principle
//A class should always solve for a single purpose rather than supporting multiple use cases
//Example - An api running with a synchronous process is being used at multiple places and if one of the place api needs to be run asynchronously then instead of changing the existing api . We should be adding a new api to support async process

// O - Open Closed Principle
//Any of the Factory or Class should be open for Extension but closed for Modification. The modification should be done in such a way that it does not break the existing functionality 


// L - Lisekov Substitution Principle
//States that a derived function should behave the same as its parent function
//Example - For example, if you have a logger module that logs messages to a file, a derived logger module that logs messages to a database should implement the same interface as the parent logger module.

// I - Interface Segregation Principle
//The client should not be forced to depend on the module/interface that they do not use
//Example - You should create small interfaces separately for each of the functionality to avoid inter dependencies


// D - Dependecy Inversion Principle
//States that both high level and low level objects should depend on abstraction instead of implementation
