1. whitespace
•	Never mix spaces and tabs
•	Default is tabs with an indent of 4 chars
•	If your editor supports it, always work with the "show invisibles" setting turned on. The benefits of this practice are:
o	Enforced consistency
o	Eliminating end of line whitespace
o	Eliminating blank line whitespace
o	Commits and diffs that are easier to read
2. Beautiful Syntax
    // if/else/for/while/try always have spaces, braces and span multiple lines
    // this encourages readability

    // 2.A.1.1
    // Examples of really cramped syntax

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.2
    // Good Examples

    if (condition) {
      // statements
    }

    while (condition) {
      // statements
    }

    //Or if one statement

    if (condition) { /* statement */ }

    while (condition) { /* statement */ }

    // Use whitespace to promote readability
    for (var i = 0; i < 100; i++) {
      // statements
    }

    for (var prop in object) {
      // statements
    }

    if (true) {
      // statements
    } else {
      // statements
    }
    
    // 2.B.1.1
    // Variables
    // Using only one `var` per scope (function) promotes readability
    // and keeps your declaration list free of clutter (also saves a few keystrokes)

    //Best Practice
    var foo = "bar",
        num = 1
    ;

    var // Comment on these
        foo = "",
        bar = "",
        quux
    ;

    //This is still ok
    var foo = "bar";
    var num = 1;

    // Literal notations:
    var array = [],
        object = {}
    ;

    //This is still ok
    var array = [];
    var object = {};
    
 
    // 2.B.2.1
    // Named Function Declaration
    function foo(arg1, argN) {

    }

    // Usage
    foo(arg1, argN);
    
    // 2.B.2.2
    // Named Function Declaration
    function square(number) {
      return number * number;
    }

    // Usage
    square(10);

    // Really contrived continuation passing style
    function square(number, callback) {
      callback( number * number );
    }

    square(10, function(square) {
      // callback statements
    });
    
    // 2.B.2.3
    // Function Expression
    var square = function(number) {
      // Return something valuable and relevant
      return number * number;
    };

    // Function Expression with Identifier
    // This preferred form has the added value of being
    // able to call itself and have an identity in stack traces:
    var factorial = function factorial(number) {
      if (number < 2) {
        return 1;
      }

      return number * factorial(number-1);
    };
    
    // 2.B.2.4
    // Constructor Declaration
    function FooBar(options) {

      this.options = options;
    }

    // Usage
    var fooBar = new FooBar({a: "alpha"});

    fooBar.options;
    // {a: "alpha"}

    

Whether you prefer single or double shouldn't matter, there is no difference in how JavaScript parses them. At Concur, we reinforce the use of single quotes as it makes the quotes more readable.
Whitespace can ruin diffs and make changesets impossible to read. Consider incorporating a pre-commit hook that removes end-of-line whitespace and blanks spaces on empty lines automatically.
3. Type Checking
       typeof (variable === "string")
       typeof (variable === "number")
       typeof (variable === "boolean")
       typeof (variable === "object")
       Array.isArray(arrayLikeObject)
       (wherever possible)
       or, use
       Object.isArray(arrayLikeObject) by Prototype (http://prototypejs.org/doc/latest/language/Object/isArray/index.html)        
       IE8 didn't like Array.isArray
       elem.nodeType === 1
       variable === null
       variable == null
       typeof (variable === "undefined")
       variable === undefined
       object.prop === undefined
       object.hasOwnProperty(prop)
       "prop" in object
4. Conditional Evaluation
 
    // 4.1.1
    // When evaluating that an array has length,
    if ( array.length > 0 ) ...
    
 
    // 4.1.2
    // When only evaluating that a string is not empty,
    // instead of this:
    if ( string !== "" ) ...

    // ...evaluate truthiness, like this:
    if ( string ) ...
    
    // 4.1.3
    // When only evaluating that a string _is_ empty,
    // instead of this:
    if ( string === "" ) ...

    // ...evaluate falsy-ness, like this:
    if ( !string ) ...
    
    // 4.1.4
    // When only evaluating that a reference is true,
    // instead of this:
    if ( foo === true ) ...

    // ...evaluate like you mean it, take advantage of built in capabilities:
    if ( foo ) ...
    
    // 4.1.5
    // When evaluating that a reference is false,
    // instead of this:
    if ( foo === false ) ...

    // ...use negation to coerce a true evaluation
    if ( !foo ) ...

    // ...Be careful, this will also match: 0, "", null, undefined, NaN
    // If you _MUST_ test for a boolean false, then use
    if ( foo === false ) ...
    
    // 4.1.6
    // When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
    // instead of this:
    if ( foo === null || foo === undefined ) ...

    // ...take advantage of == type coercion, like this:
    if ( foo == null ) ...

    // Remember, using == will match a `null` to BOTH `null` and `undefined`
    // but not `false`, "" or 0
    null == undefined
    
5. Practical Style
    // 5.1.1
    // A Practical Module

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // This is some boolean property
          bool: true,
          // Some string value
          string: "a string",
          // An array property
          array: [ 1, 2, 3, 4 ],
          // An object property
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // get the current value of `data`
            return data;
          },
          setData: function( value ) {
            // set the value of `data` and return it
            return ( data = value );
          }
        };
      })();

      // Other things might happen here

      // expose our module to the global object
      global.Module = Module;

    })( this );

    
 
    // 5.2.1
    // A Practical Constructor

    (function( global ) {

      function Ctor( foo ) {

        this.foo = foo;

        return this;
      }

      Ctor.prototype.getFoo = function() {
        return this.foo;
      };

      Ctor.prototype.setFoo = function( val ) {
        return ( this.foo = val );
      };


      // To call constructor's without `new`, you might do this:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // expose our constructor to the global object
      global.ctor = ctor;

    })( this );

    

6. naming
The following code is an example of egregious naming:
    // 6.A.1.1
    // Example of code with poor names

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    
Without a doubt, you've written code like this - hopefully that ends today.
Here's the same piece of logic, but with kinder, more thoughtful naming (and a readable structure):
    // 6.A.2.1
    // Example of code with improved names

    function query( selector ) {
      return document.querySelectorAll( selector );
    }

    var idx = 0,
      elements = [],
      matches = query("#foo"),
      length = matches.length;

    for ( ; idx < length; idx++ ) {
      elements.push( matches[ idx ] );
    }

    
A few additional naming pointers:
    // 6.A.3.1
    // Naming strings

    `dog` is a string


    // 6.A.3.2
    // Naming arrays

    `dogs` is an array of `dog` strings


    // 6.A.3.3
    // Naming functions, objects, instances, etc

    camelCase; function and var declarations


    // 6.A.3.4
    // Naming constructors, prototypes, etc.

    PascalCase; constructor function


    // 6.A.3.5
    // Naming regular expressions

    rDesc = //;


    // 6.A.3.6
    // From the Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    

7. Misc
This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.
ALWAYS evaluate for the best, most accurate result - the above is a guideline, not a dogma.
    // 7.A.1
    // Type coercion and evaluation notes

    // Prefer `===` over `==` (unless the case requires loose type evaluation)

    // === does not coerce type, which means that:

    "1" === 1;
    // false

    // == does coerce type, which means that:

    "1" == 1;
    // true


    // 7.A.2
    // Booleans, Truthies & Falsies

    // Booleans:
    true, false

    // Truthy:
    "foo", 1

    // Falsy:
    "", 0, null, undefined, NaN, void 0

    
Beyond the generally well known use cases of `call` and `apply`, always prefer `.bind( this )` or a functional equivalent, for creating `BoundFunction` definitions for later invocation. Only resort to aliasing when no preferable option is available.
    // 7.B.1
    function Device( opts ) {

      this.value = null;

      // open an async stream,
      // this will be called continuously
      stream.read( opts.path, function( data ) {

        // Update this instance's current value
        // with the most recent value from the
        // data stream
        this.value = data;

      }.bind(this) );

      // Throttle the frequency of events emitted from
      // this Device instance
      setInterval(function() {

        // Emit a throttled event
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Just pretend we've inherited EventEmitter ;)

    
When unavailable, functional equivalents to `.bind` exist in many modern JavaScript libraries.
    // 7.B.2

    // eg. lodash/underscore, _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // eg. jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // eg. dojo.hitch
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, dojo.hitch( this, function( data ) {

        this.value = data;

      }) );

      setInterval( dojo.hitch( this, function() {

        this.emit("event");

      }), opts.freq || 100 );
    }

    
As a last resort, create an alias to `this` using `self` as an Identifier. This is extremely bug prone and should be avoided whenever possible.
 
    // 7.B.3

    function Device( opts ) {
      var self = this;

      this.value = null;

      stream.read( opts.path, function( data ) {

        self.value = data;

      });

      setInterval(function() {

        self.emit("event");

      }, opts.freq || 100 );
    }

    


Youssef Taghlabi
SW Design Engineer Sr. | Concur | Youssef.Taghlabi@concur.com | 703-837-6100 x 203859


