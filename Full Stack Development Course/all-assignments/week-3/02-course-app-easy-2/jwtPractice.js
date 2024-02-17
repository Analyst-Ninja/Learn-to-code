const jwt = require("jsonwebtoken");

const secret = "Rohit-123";

function generateJwt(user) {
  const payload = { username: user.username, password: user.password };
  return "Bearer " + jwt.sign(payload, secret, { expiresIn: "1h" });
}

user1 = {
  username: "analyst-ninja",
  password: "DS-Ninja",
};
user2 = {
  username: "analyst-nifgdsfvnja",
  password: "DS-Ninja",
};

const token1 = generateJwt(user1, secret);
const token2 = generateJwt(user2, secret);

console.log(jwt.verify(token1.split(" ")[1], secret));
console.log(jwt);
console.log(jwt.verify(token2.split(" ")[1], secret));
