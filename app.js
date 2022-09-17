const x = +prompt("Insert a three-digits number");
console.log(x);
if (x >= 100 && x <= 999) {
  let a = Math.floor(x / 100);
  console.log(a);
  let b = Math.floor((x % 100) / 10);
  console.log(b);
  let c = (x % 100) % 10;
  console.log(c);
} else {
  console.log("Insert a three-digit number");
}
