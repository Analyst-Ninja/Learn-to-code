let counter = 1;

function timer() {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(timer, 1000);
}

timer();
