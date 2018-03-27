//Второй урок по JS
//Создаём переменные.
let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");
let time = 25;


//Заполняем объект.
let mainList = {
				budget: money,
				shopName: name,
				shopGoods: [],
				employers: {},
				open: false
}

//Задаём вопросы про типы товалов и выводим полученные данные в консоль.
//Вариант кода с использованием for
for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if (a === null || a === '') {
		alert('Нужно обязательно что-то ввести!');
		i--;
		} else	if ((typeof(a)) === 'string' && a.length > 20) {
				alert('Нужно ввести менее 20 символов!');
				i--;
			} else mainList.shopGoods[i] = a;
}

//Вариант кода с использованием while
// let i = 0;
// while (i < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if (a === null || a === '') {
// 		alert('Нужно обязательно что-то ввести!');
// 		} else	if ((typeof(a)) === 'string' && a.length > 20) {
// 				alert('Нужно ввести менее 20 символов!');
// 			} else if (a !== null && a !== '' && a.length < 21) {
// 					mainList.shopGoods[i] = a;
// 					i++;
// 			}
// }

//Вариант кода с использованием do while
// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if (a === null || a === '') {
// 		alert('Нужно обязательно что-то ввести!');
// 		} else	if ((typeof(a)) === 'string' && a.length > 20) {
// 				alert('Нужно ввести менее 20 символов!');
// 			} else if (a !== null && a !== '' && a.length < 21) {
// 					mainList.shopGoods[i] = a;
// 					i++;
// 			}
// }
// while (i < 5);

//Выводим результат на экран
document.write('Название Вашего магазина:<br>', mainList.shopName, '<br><br>');
document.write('Вы собираетесь продавать следующие товары:<br>');
for (i = 0; i < 5; i++) {
	document.write(mainList.shopGoods[i], '<br>');
}
document.write('<br>Ваш бюджет:<br>', mainList.budget, '<br><br>');

//Рассчитаем бюджет за 1 день b выведем на экран.
document.write('Ваш бюджет на 1 день составляет:<br>');
document.write(mainList.budget / 30, '<br>');

console.log(mainList);

if (time < 0) {
	console.log('Такого не может быть!');
} else if (time >= 8 && time <= 20) {
		console.log('Время работать!');
		} else if (time < 24) {
			 console.log('Нужно отдохнуть!');
				} else {
						console.log('В сутках только 24 часа!');
						}