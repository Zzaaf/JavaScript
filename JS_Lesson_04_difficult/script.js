//Четвёртый урок по JS усложнённый

function createArray() {
	var sum = 0;
	// Спрашиваем сколько массивов нужно
	// Используем унарный плюс, чтобы преобразовать строку в число
	let arr = new Array(+prompt('Сколько массивов?', ''));
	//Перебираем ячейки массива и вставляем в каждую новый массив
	for( i = 0; i < arr.length; i++) {
		arr[i] = new Array();
		//В каждый новый массив генерируем случайные 5 целых чисел
		for( col = 0; col < 5; col++) {
			let num = getRandomInRange(1, 20);
			arr[i][col] = num;
			//Складываем значения всех ячеек массива
			sum += num;
			//Выводим на экран каждое число из многомерного массива
			if (num < 10) {
				document.write('0' + num + '  ');
			} else
			document.write(num + '  ');
		};
		document.write('<br>');
	};
	console.log(arr);
	console.log(sum);
	//Выводим сумму на экран
	document.write('<br>Сумма всех ячеек многомерного массива равна: ' + sum);
};
createArray();
//Генератор случайных целых чисел
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};