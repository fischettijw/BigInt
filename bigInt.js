// https://www.youtube.com/watch?v=jrPybxoSogs

let a = BigInt("123456789012345678901234567890");
let b = BigInt("12345");
console.log(a);
a *= BigInt("123456789012345678901234567890");
console.log(a);
a = a * BigInt("2");
console.log(a);
b = 123456;
a = a + BigInt(b);
console.log(a);

let c = JSON.stringify(a.toString());
console.log(`----${a}----`);