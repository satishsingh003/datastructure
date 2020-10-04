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
 **[⬆ Back to Top](#table-of-contents)**\

# HTML
1. ### new Types of HTML 5 API
HTML Web Workers --> Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface
HTML Drag and Drop --> HTML drag-and-drop uses the DOM event model and drag events inherited from mouse events.
HTML Application Cache --> https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
HTML Local Storage
HTML SSE -> Server Sent Events
HTML Geolocation -->The getCurrentPosition() method is used to return the user's position.
**[⬆ Back to Top](#table-of-contents)**
|2| [WebSockets?](#WebSockets)|
2. ### WebSockets 
WebSocket – It facilitates setting up a bidirectional communication for web applications.
 **[⬆ Back to Top](#table-of-contents)**
|3| [FieldSet?](#fieldset)|
3. ### fieldset 
3.  What is the use of <fieldset> tag in HTML5?
The <fieldset> tag groups related form elements. It is like a box. In other words, it draws a box around related elements.

It must start with a <legend>tag because the <legend> tag defines the title of the fieldset.
 **[⬆ Back to Top](#table-of-contents)**
# CSS
1. ### variables in CSS
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



 2. |2|  [The description of each lifecycle method is as below?](#lifecycle)|
 2. ### lifecycle? 

1.ngOnChanges: When the value of a data bound property changes, then this method is called.
2.ngOnInit: This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.
3.ngDoCheck: This is for the detection and to act on changes that Angular can't or won't detect on its own.
4.ngAfterContentInit: This is called in response after Angular projects external content into the component's view.
5.ngAfterContentChecked: This is called in response after Angular checks the content projected into the component.
6.ngAfterViewInit: This is called in response after Angular initializes the component's views and child views.
7.ngAfterViewChecked: This is called in response after Angular checks the component's views and child views.
8.ngOnDestroy: This is the cleanup phase just before Angular destroys the directive/component.


 **[⬆ Back to Top](#table-of-contents)**
 3. |3|  [Async pipe?](#asyncpipe)|
 3. ### asyncpipe? 

The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.


 **[⬆ Back to Top](#table-of-contents)**

  4. |4|  [:host & :ng-deep & :host-context?](#hostcontext)|
 4. ### hostcontext? 
 The :host-context pseudo-class selector:
 we also want to have a component apply a style to some element outside of it. This does not happen often, but one possible common use case is for theme enabling classes.

 ```typescript
 @Component({
  selector: 'themeable-button',
  template: `
        <button class="btn btn-theme">Themeable Button</button>
  `,
  styles: [`
      :host-context(.red-theme) .btn-theme {
        background: red;
      }
      :host-context(.blue-theme) .btn-theme {
          background: blue;
      }
  `]
})
export class ThemeableButtonComponent {

}
 ```typescript

 ```html
<div class="blue-theme">
    <themeable-button></themeable-button>
</div>
 ```html


ng-deep pseduo selector: 
If we want our component styles to cascade to all child elements of a component, but not to any other element on the page,


:host pseudo selector
cascading parent component from parent

 **[⬆ Back to Top](#table-of-contents)**
