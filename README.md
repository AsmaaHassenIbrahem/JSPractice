# Java Script Tips & Tricks :

Questions :
#
 - 1- What is the return type of function with keyword async?

       Async functions always return a promise.
       If the return value of an async function is not explicitly a promise,
       it will be implicitly wrapped in a promise

#

- 2- What are the false values in JS?

      False ,0 , ‘’ , Null , Undefined , NaN
#

- 3- What is the primitive and nonprimitive data type in JS?

   | Primarive          | Reference          |
   |     :---:          |   :---:            |     
  | immutable          | mutable            |
   |pass by value       | pass by reference  |
  
                     
      - Primitive : all primitives are immutable and working pass by value
    
      ( Undefined , Boolean , Number , String , BigInt, Symbol )
    
      - Reference : mutable and working pass by reference
   
       ( Object , Function , Array )
 #
- 4-  What is hoisting in JS?
  
      The declarations of functions, variables or classes imports of the top of their scope before executing the code
  
      Ex : var , declaration functions
#

- 5- What are the differences between var, let, const and which of these hoisted? 

 data type | function scope | global scope  | block scope | Re declared | reassigned| hoisted | 
---       | ---            | ---           | ---         |---          |       --- |---      |
 var       | yes            | yes           | no          | yes         |       yes | yes     | 
   let       | yes            | no            | yes         | no          | yes       | no      | 
  const     | yes            | no            | yes         |no           | no        | no      | 

#
- 6- What are the function types in JS and which of these hoisted?

  - Declaration // hoisted
    
  - Expression
    
  - Arrow
    
```
  console.log(addDeclaration(1,1)) // output is 2
  console.log(addExpression(1,1)) //throw an Error 
  console.log(addArrow(1,1))   //throw an Error  
  
  //declaration 
 function addDeclaration(a, b) {
      return a + b;
 }
  
 // Expression 
const addExpression = function(a, b) {
  return a + b;
 }

 // Arrow 
const addArrow = (a, b) => a + b;
 ```

#

- 7- JS is sync or async and how it works with async task behind the scenes?

      Js is sync

      if the task will take more time and to not block main thread we need to create Async task to separete it to another thread 

      With async task the browser separate async task to block is called web api and it send the process to task queue with priority then event loop using to get this data from task queue to send it to call stack and then 
      return again to the main thread 
#

- 8- What is the role of event loop in JS?
  
      Event loop use for transfer  data or process in memory from Task queue to call stack 
      And this use in asynchronous tasks like setTimeOut to don't block the main thread 

#
- 9- What is the different between == and === in JS?
  
   == : coarse the data type to compare value with value
  
  === : compare values with the same data type 

  Ex: 
  ```
  let n1 = 2; 
  let n2 =“2” ;
  console.log(n1 == n2) // output is true 
  console.log(n1 === n2) // output is false
  ```
#
- 10- What is the NAN in JS and what is the type of it?
  
      Number
  
      NaN = Not a Number 
#

11- What are the scopes and scope chain in JS?

   - Global Scope :
     
         Variables and functions declared outside of any function or block have global scope.
         Global variables are accessible from anywhere in your code, including inside functions.
         Functions declared in the global scope are also accessible from anywhere like Window 

   - Local Scope: ( like function scope ,  chain scope , closure scope )

         Variables declared inside a function or block have local scope.
         Local variables are only accessible within the function or block where they are declared.
         Functions declared inside another function have a local scope as well.

    Scope chain:
     The scope chain is the mechanism that allows inner scopes to access variables from outer scopes.
     When a variable is accessed

    EX: 
     ```
     /// Scope chain

      function a() {
        function b() {
         function c() {
            }
         }
       }
    ```
 #

- 12- Explain the closures in JS?
  
    Closure is scope saved in memory if you have variable in object and it reused in another function or nested function  to return values 

  Ex1  :
  ```
   function test (){
     let x = 5 ; 
     let y = 10 
     return Function(){
         Console.log(x);
      }
   }
  ```
   In this case we have closure scope of x = 5 
   Y is not closure scope and not saved in memory because it no need to use it or return inside function

  Ex2: 
  ```
  function add(a) {
    return function (b) {
      return a + b;
    };
  }
  console.log(add(10)(20))   //output will be 30 
  ```
  a is a closure scope and saved in memory 
 
#

- 13 - 
A-
```
ar obj1 = {name:"Aly"};
var obj2 = obj1;
obj2.name="Omar"
console.log(obj1.name) // output Omar  // array works pass by reference
```
The value will be Aly if we clone obj2 through
```
Var obj2 = Object.assign([] , obj1);
```
Or use spread operator  through 
```
Var obj2 = [… obj1]
```
#
-B -

```
console.log(1+1+"1"); // 21 // two numbers and string will append the priority to string 
console.log("1"+1+1) // 111 // start with string and concatinate with priority 
console.log(1+"1"+1) // 111 // number + string so will concatenate 
console.log("1"-1) // 0 // - is operator with number so will convert string to number 
console.log("1"-"ss") // NaN // - is operator with number so will convert string to number but the second can't convert it to number 
console.log("1"+"ss") // 1ss // normal concatenate 
console.log(10-null) // 10 // null will equal 0 
```
#
C- 
```
console.log(x); // output undefined
var x = 10;
console.log(y); // throw an Error 
let y=20;
console.log(y)
console.log(x);
```` 
 - Var is hoisting but let not hoisting and the program will throw an error so the copiler will stop and not print value of x and y 10, 20 
#

D- 
```
var obj = {
 name: "Aly",
 f1: function() {
 console.log(this.name);
 },
 f2: () => {
 console.log(this.name);
 }
};

obj.f1(); // Outputs "Aly"
obj.f2(); // Outputs undefined (Arrow functions don't have their own 'this')
```
Arrow functions don't have their own bindings to this, and it should not be used as methods and we can fix it by using closure 



