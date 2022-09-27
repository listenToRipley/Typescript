# Typescript - Understanding Generics 

Generics are away to to constrain a type by requesting the same time the is input as a param returns that same type. 
You can identify a generic by the use of `< >`

T is commonly used at a placeholder for the Type. 
If there is more than one, they will alphabetically be increased. So T, U, V  etc..

You can provide a default type as well by using an = after your T. 

### So what can Generics be used with? 
* Functions 
* Variables 
* Classes 

#### Generics and JSX
With generics, you need to include a comma in the first <Type,> like so. Or else it will be seen as an incomplete JSX text. 