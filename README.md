## Goals

- Understand Typescript

### Auto Sync
Using [lite-server](https://www.npmjs.com/package/lite-server). 
  ~ See package.json "start" script. 

**Commands**
* `tsc --watch` or `tsc -w` to compile 

* `node dist/index.js` to run the newly compiled code 

* `open index.html` to open in browser

* `npm start` to start lite-server

**Notes on Typescript**

*tsconfig.json*

- [lib](https://www.typescriptlang.org/tsconfig#lib) 

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