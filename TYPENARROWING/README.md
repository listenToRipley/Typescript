## Type Narrowing

#### Type of Guard 
Using typeof in a conditional

#### Truthiness Guards 
Determine if the input provided is true in order to pass the logic. 

#### Equality Narrowing 
Using === or != in comparison 

#### w/ In Operator
Using "variable_name" in type
This is usually done with interfaces to determine the type of interface being used. 

#### Instanceof 
The keyword `instanceof` used to determine if a prototype is currently being used. 

#### Working with the Type Predicates 
Specific to TS. Can tell TS the Type of something. 
Should be added a the resulting type within a function  `: parameterName is Type` It will allow helper functions to show specific types. 

#### Discriminated Unions
Determine a common patterns involved in multiples places and share properties. 
Way to know what is included is the same across specific variable.  

#### Exhaustiveness Checks w/ Never