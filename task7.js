let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'beach', 10];
let isEven = (num) => num % 2 === 0;
let even = a.filter(isEven);
console.log(even.length + ' Чет.');
let isOdd = (num) => num % 2;
let odd = a.filter(isOdd);
console.log(odd.length + ' Нечет.');
let String = a.filter((el) => typeof el === "string");
console.log(String.length + ' Строк');
let Null = a.filter((el) => typeof el === "null");
console.log(Null.length + ' Null');
let BigInt = a.filter((el) => typeof el === "bigInt");
console.log(BigInt.length + ' BigInt');
let Boolean = a.filter((el) => typeof el === "boolean");
console.log(Boolean.length + ' Boolean');
let Undefined = a.filter((el) => typeof el === "undefined");
console.log(Undefined.length + ' Undefined');
let Symbol = a.filter((el) => typeof el === "symbol");
console.log(Symbol.length + ' Symbol');
let Object = a.filter((el) => typeof el === "object");
console.log(Object.length + ' Object');