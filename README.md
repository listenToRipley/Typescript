## Goals

- Understand Typescript

### Auto Sync
Using [lite-server](https://www.npmjs.com/package/lite-server). 
  ~ See package.json "start" script. 

**Commands**
* `tsc -- init` starting a new project

* `tsc --watch` or `tsc -w` to compile 

* `node dist/index.js` to run the newly compiled code 

* `open index.html` to open in browser

* `npm start` to start lite-server


**Notes on Typescript**

*tsconfig.json* Formatting and requirements on the ts compiler and interactions. 

- [lib](https://www.typescriptlang.org/tsconfig#lib) 

* `.d.ts` declaration files. These files do not use JS, but are a way to do typechecking and allow us to keep declarative information separate. [Documentation on this.](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html) Often if you "go to type definition", you will be taken to one of these documents. 

**General Notes**

Best results, do not use Chrome as your browser. There is an known issue with lite-server. 

#### This repository contains 

* - [To Do](./TODO/)
  a basic process for creating a to do list in Typescript. 
    - how the DOM interacts with TS
    - Type Assertions 
    - readonly
* - [Classes](./CLASSES/)
  a review of how classes work with Typescript. 
    - public
    - private
    - protected 
    - get 
    - set 
    - interfaces w/ classes
      - implement 
    - abstracts 

* - [Generics](./GENERICS/)
  what are generics and how do you use them. 
  - Functions
  - Classes 

* - [Type Narrowing](./TYPENARROWING/)
  Determine ways that content can be "narrow" in scope so functions are be more meticulously followed. 
  - Type of Guard 
  - Truthiness Guards 
  - Equality Narrowing 
  - w/ In Operator
  - Instanceof 
  - Working with the Type Predicates 
  - Discriminated Unions
  - Exhaustiveness Checks w/ Never

  * - [3rd Party Libraries](./LIBRARIES/)
    Use cases to establishing types on external libraries. 

  * - [Modules](./MODULES/)
    How to use modules with Typescript. 

  * - [Web Pack](./WEBPCK/)

#### Additional technologies used
[Axios](https://www.npmjs.com/package/axios)
[Lodash](https://lodash.com/)
[Web Pack](https://webpack.js.org/)