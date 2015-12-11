// ... is a SyntaxError in Node 5, so this module must be transpiled
module.exports = function(...args) {
  console.log("hello");
}
