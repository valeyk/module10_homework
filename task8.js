let map = new Map();
map.set('key', 'value');
map.set(25, 'red');
map.set(true, 123);
for (let elem of map) {
  console.log('Ключ - ' + elem[0] + ',', 'Значение - ' + elem[1]);
}