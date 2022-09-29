## Webpack 
The purpose of webpack helps organize/compress/coordinate between various elements within your application. 
This is a way to create a balance between HTTP requests and writing massive files list. 

Without webpack, your .ts files will need to `import` will need to include the .js at the end so the file can be located. 

### Serve
Using the Webpack Dev Serve replaces lite-serve and allows for the config information to be saved in cache, taking up less place. 

### Best Practices 

Reinstall TS so the version is locked within your package.json file. 

[Quick start options](https://webpack.js.org/guides/typescript/#basic-setup)

The bundle document should be added to the scripts in of the html instead of the index file. 

#### tsconfig.json 

"module": "ES2015" - needs to have modules set to this in order to have local access. 
"sourceMap": true - allows the webpack to be mapped back to the original state. 

#### webpage.config 
entry - where to start bundling, based on where the config file is located. 
devtool - with sourceMap in tsconfig, allows original information to be mapped. 
modules = 
  rules - what to do when encountering specific file types. Can have multiples
    test - contains a regular expression for accepted conditions. ? makes optional
    use - what compiler to use 
    exclude - remove from possible compiler issues
resolve - 
  extensions - the ending of the type of document that this will look for. 
output - output name and location
  filename - file generation name and where the information will be compressed. 
  path - location where document will output 

#### Technologies Used 
[Lodash](https://lodash.com/)
[Webpack](https://webpack.js.org/)
[Webpack CLI](https://www.npmjs.com/package/webpack-cli)
[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
[Typescript](https://www.npmjs.com/package/typescript)
[Typescript Loader](https://www.npmjs.com/package/ts-loader)