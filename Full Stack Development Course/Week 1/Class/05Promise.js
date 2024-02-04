function promiseBody(resolve) {
  setTimeout(resolve, 5000);
}

function medicineGet() {
  let ans = new Promise(promiseBody);

  return ans;
}

function printToScreen() {
  console.log("Hi There");
}

console.log(medicineGet().then(() => printToScreen()));
