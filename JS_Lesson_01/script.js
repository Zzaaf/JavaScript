//Первый урок по JS
//Создаём переменные.
var budget;
var shopName;

//Присваиваем этим переменным значения, введённые пользователем.
budget = prompt("Ваш бюджет?");
console.log(budget);
shopName = prompt("Название вашего магазина?");
console.log(shopName);

//Создаём объект и массив.
var mainList = {};
var shopGoods = ['', '', '']

//Заполняем объект.
mainList = {
	budget,
	shopName,
	shopGoods,
	employers: {
		employer_1: 'Pete',
		employer_2: 'Nick',
		employer_3: 'Sara',
	},
	open: true,
}

//Задаём вопросы про типы товалов и выводим полученные данные в консоль.
shopGoods[0] = prompt("Какой тип товаров будем продавать?");
console.log(shopGoods[0]);
shopGoods[1] = prompt("Какой тип товаров будем продавать?");
console.log(shopGoods[1]);
shopGoods[2] = prompt("Какой тип товаров будем продавать?");
console.log(shopGoods[2]);

//Выводим результат на экран
document.write('Вы собираетесь продавать следующие товары:<br>');
document.write(shopGoods[0], '<br>');
document.write(shopGoods[1], '<br>');
document.write(shopGoods[2], '<br><br>');
document.write('Ваш бюджет:<br>');
document.write(budget, '<br><br>');
//Рассчитаем бюджет за 1 день b выведем на экран.
var dayBudget = budget/30;
document.write('Ваш бюджет на 1 день составляет:<br>');
document.write(dayBudget, '<br>');

