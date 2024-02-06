function callbackFn1(a) {
  return a + 2;
}

function higherOrderFn(num, callbackFn) {
  console.log("In HOF");
  return callbackFn(num) * 5;
}

console.log(higherOrderFn(7, callbackFn1));
