function callbackFn(currentDay) {
  console.log(`Hello from CallbackFn & current day ${currentDay}`);
}

function currentDay() {
  //   console.log(new Date().getUTCDate());
  //   console.log(new Date().getUTCDay());
  return new Date().getUTCDate();
}

function higherOrderAsync(callbackFn) {
  setTimeout(callbackFn, currentDay() * 1000, currentDay());
}

higherOrderAsync(callbackFn);
