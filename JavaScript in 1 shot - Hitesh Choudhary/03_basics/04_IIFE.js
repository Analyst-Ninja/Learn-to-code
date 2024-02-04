// Immediatly Invoked Function Expression

(function chai() {
  // named IIFF
  console.log("DB Connected");
})();

((name) => {
  // unnamed IIFE
  console.log(`DB CONNECTED TWO - ${name}`);
})("MongoDB");

// If we have to write 2 IIFEs in a single file --- we have to write IIFEs
// ended with semicolon
