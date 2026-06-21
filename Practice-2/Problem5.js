function delayGreeting(name, delayMs) {
  // When delayGreeting is called, it creates a scope with the parameters 'name' and 'delayMs'.
  //
  // The arrow function passed to setTimeout creates a CLOSURE.
  // A closure is a function that "remembers" the variables from its parent scope.
  //
  // Even though delayGreeting will finish executing immediately, the callback
  // function does NOT forget the 'name' variable. Instead, it captures and holds
  // a reference to it in memory.
  //
  // When setTimeout later executes the callback (after delayMs milliseconds),
  // the callback can still access 'name' because of the closure. The 'name'
  // variable stays alive in memory as long as the callback needs it.
  //
  // Without closures, the callback would not have access to 'name' after
  // delayGreeting returned. This is the power of closures in JavaScript!

  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, delayMs);
}

delayGreeting("Gagandeep", 1000);