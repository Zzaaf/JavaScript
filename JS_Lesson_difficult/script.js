//Второй урок по JS усложнённый

//Создаём массив с днями недели в русской последовательности.
var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//Получаем текущий день недели по западному варианту, когда неделя начинается с воскресенья.
var date = new Date();
var day = date.getDay();
//Преобразуем западный стандарт в русский.
var rusDay = --day;
if (rusDay == -1) {
	rusDay = rusDay + 7;
}
//Выводим в цикле будни и делаем курсивом текущий день недели.
for (let i = 0; i <= 4; i++) {
	if (i == rusDay) {
		document.write('<p><i>', week[i], '</i></p>');
	} else	document.write('<p>', week[i], '</p>');
}
//Выводим в цикле выходные и делаем курсивом текущий день недели.
for (let i = 5; i <= 6; i++) {
	if (i == rusDay) {
		document.write('<p><i><b>', week[i], '</b></i></p>');
	} else	document.write('<p><b>', week[i], '</b></p>');
}
console.log('Номер текущего дня недели:', rusDay);

//Создаём массив с произвольными числами, которые записываем в виде строки.
arr = ['34556', '5766789', '73453454', '32432', '7879', '45466', '90923'];
console.log('Выводим числа, начинающиеся на 3 и 7:');
for (let i = 0; i < 7; i++) {
	if (arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7) {
		console.log(arr[i]);
	}
}



