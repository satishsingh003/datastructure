# Datastructure
Details of Data-Structure in Javascript

# Javascript
Javasript Important Questions to be remembered
### Table of Contents
|1| [Closures?](#Closures)|
1. ### Closures?
 A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

  ```javascript
  function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
  ```
 **[⬆ Back to Top](#table-of-contents)**

|2| [Hoisting?](#hoisting)|
2. ### hoisting?
 a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.
 ```javascript
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");

 ```

/*
The result of the code above is: "My cat's name is Tiger"
*/

```javascript
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}

```
/*
The result of the code above is: "My cat's name is Chloe"
*/

JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. For example:

```javascript
JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. For example:

console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // Declaration
num = 6; // Initialization

```
Declarations using let and const are also not hoisted. 
```javascript
// Example with let:
a = 1; // initialization.
let a; // Throws SyntaxError: Identifier 'a' has already been declared

// Example with const:
a = 1; // initialization.
const a; // Throws SyntaxError: Missing initializer in const declaration
```
 **[⬆ Back to Top](#table-of-contents)**
# HTML
1. ### new Types of HTML 5 API
HTML Web Workers --> Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface
HTML Drag and Drop --> HTML drag-and-drop uses the DOM event model and drag events inherited from mouse events.
HTML Application Cache --> https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
HTML Local Storage
HTML SSE -> Server Sent Events
HTML Geolocation -->The getCurrentPosition() method is used to return the user's position.
**[⬆ Back to Top](#entities)**
# CSS
1. ### Entities in CSS
entities defined by CSS authors that contain specific values to be reused throughout a document.
```css
:root {
  --main-bg-color: brown;
}
```
```css
element {
  background-color: var(--main-bg-color);
}
```

**[⬆ Back to Top](#table-of-contents)**

# Angular
1. |1| [Angular ngZone?](#AngularZone)|
1. ### AngularZone? 
NgZone enables us to explicitly run certain code outside Angular's Zone, preventing Angular to run any change detection. So basically, handlers will still be executed, but since they won't run inside Angular's Zone, Angular won't get notified that a task is done and therefore no change detection will be performed

 **[⬆ Back to Top](#table-of-contents)**