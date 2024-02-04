console.log(2 > 2);
console.log(2 >= 2);
console.log(2 < 2);
console.log(2 <= 2);
console.log(2 == 2);
console.log(2 != 2);

console.log("2" > 1);
console.log("02" > 1);

// --> got converted first then got compaired

console.log(null > 0);
// false
console.log(null == 0);
// false
console.log(null >= 0);
// true

// Reason  -- >

// Equality == and Comparision < , > , >=, <= ==> They work differently
// In equality --> It directly compares
// In comparision < , > --> it converts first then compares

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

// with any of the operators--> undefined gives false

console.log(0 == undefined);
console.log(0 > undefined);
console.log(0 < undefined);
console.log(0 >= undefined);
console.log(0 <= undefined);
console.log(0 != undefined);

// ===    ----> It won't allow to compare different dataTypes

console.log(1 === "1");
