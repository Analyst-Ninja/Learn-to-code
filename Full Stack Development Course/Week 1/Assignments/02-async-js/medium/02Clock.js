// function clock() {
//   hour = new Date().getHours();
//   min = new Date().getMinutes();
//   sec = new Date().getSeconds();
//   console.clear();
//   console.log(`${hour}:${min}:${sec}`);
// }

// setInterval(clock, 1000);

function clock() {
  let time = new Date().toLocaleString("default", {
    hourCycle: "h24",
    timeStyle: "medium",
  });
  console.clear();
  console.log(time);
}

setInterval(clock, 1000);

// ------------------------------------
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
// ------------------------------------

// function clock() {
//   time = new Date().toLocaleTimeString();
//   console.clear();
//   console.log(time);
// }

// setInterval(clock, 1000);
