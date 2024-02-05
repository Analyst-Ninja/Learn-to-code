function logBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  result.json().then(logBody);
}
let sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/handleSum?counter=128", sendObj).then(callbackFn);
