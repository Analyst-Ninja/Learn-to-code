const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = Number(form.querySelector("#height").value);
  // console.log(height);
  // instead of Number we can use parseInt
  const weight = parseInt(form.querySelector("#weight").value);
  // console.log(weight);
  const results = form.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}<span>`;
    if (BMI < 18.6) {
      const healthStatus =
        "<i>Under Weight -- Eat some protein -- you can eat junk food</i>";
      const parent = document.createElement("div_health");
      parent.innerHTML = `${healthStatus}`;
      document.querySelector(".container").appendChild(parent);
    } else if (BMI >= 18.6 && BMI < 24.9) {
      const healthStatus =
        "<i>Normal Range -- Just Chill in Life -- you can eat junk food</i>";
      const parent = document.createElement("div_health");
      parent.innerHTML = `${healthStatus}`;
      document.querySelector(".container").appendChild(parent);
    } else {
      const healthStatus =
        "<i>Over Weight -- Start Running, Delete Junk food from your life</i>";
      const parent = document.createElement("div_health");
      parent.innerHTML = `${healthStatus}`;
      document.querySelector(".container").appendChild(parent);
    }
  }
});
