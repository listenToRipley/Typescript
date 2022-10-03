### Using React and Typescript
To see the launched README.md from React, [go here here](./REACT_README.md). 

#### JSX Elements
When you create a component with JSX, they are considered of type `JSX.Element`, (this is the best practice for components now) by default. You don't have to annotate, but best practice is to do so. 
[See Greeter.tsx for examples.](./src/Components/Greeter.tsx)

##### Props
You create an interface with props involved in the component. You can also destruct the props. 
[See Greeter.tsx for examples.](./src/Components/Greeter.tsx)

#### UseRef 
This is specific to react, this is a react hook. This creating a reference to the location of the element. They type of this would be related to the location/content once rendered on the HTML page. This means the type will be <HTMLInputElement>
The value must start as null until it is rendered. 

##### Modules
you can import and export modules much like anything else so you create a less crowded format. 

###### Functional Components - old version

`React.FC` or `React.FunctionalComponent` - when creating a functional component within JSX, type of annotation that should be used before creating an arrow function. 

This is older syntax and not used as widely anymore. 

#### Additional Packages
[uuid](https://www.npmjs.com/package/uuid4) - used for key generation 

#### Resources 
[Typescript/React Cheatsheeet](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheet)
