## Using 3rd party libraries
Defining types with outside libraries. 

Using [Axios](https://www.npmjs.com/package/axios) and the [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
Use [Lodash](https://lodash.com/) in order to provide additional functionality. Lodash does not have a type declaration file. 

For libraries that do not have types declaration include, you can [download them yourself](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html), using `npm install --save-dev @types/npmPkgName`. 
This may, or may not be the case for ALL libraries, but most popular libraries, this will work. 