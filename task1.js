let x = +prompt('Введите число', '')
  if (x === 0) {
    alert('Вы отказались от ввода')
} else if (typeof x % 2 === 0) {
    alert('Число четное')
} else if (x % 2) {
    alert('число нечетное')
} else if (isNaN(x % 2)) {
  alert('Упс, кажется, вы ошиблись')
}
