let x = 1;
 if ((typeof x === "number")) {
    console.log('X - число')
 } else if ((typeof x === "string")) {
    console.log('X - строка')
 } else if ((typeof x === "boolean")) {
    console.log('X - логический тип')
 } else {
    console.log('Тип X не определен')
 }