//Третий урок по JS усложнённый.
//Есть забавная переменная str = “урок-3-был слишком легким”.
let str = 'урок-3-был-слишком-легким';

//Заменяем первую букву в выражении на заглавную.
let strUp = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
console.log(str);
console.log(strUp);

//Заменим все дефисы на пробелы.
let strSpaces = strUp.replace(/-/gi, function () {
    return ' ';
});
console.log(strSpaces);

//Удалим слово "легким".
let strShort = strSpaces.replace(/легким/gi, function () {
    return '';
});
console.log(strShort);

//Заменим последние 2 буквы на "о".
// let length = strShort.length;
// let last = length - 1;
// let beforeLast = last - 1;
// console.log(length);
// console.log(last);
// console.log(beforeLast);


// console.log(strShort.charAt(last));
// console.log(strShort.charAt(beforeLast));


// let strReplace1 = strShort.replace(strShort.charAt(beforeLast), 'Q');
// let strReplace2 = strShort.replace(strShort.charAt(last), 'Q');

// console.log(strReplace1);
// console.log(strReplace2);
let strReplace = strShort.replace(/м /gi, function () {
    return 'оо';
});
console.log(strReplace);

document.write('Начальная фраза:<br>');
document.write(str, '<br><br>');
document.write('Конечная фраза:<br>');
document.write(strReplace, '<br><br>');

//Объявляем исходный массив.
var arr = [20, 33, 1, "Человек", 2, 3];
//Объявляем массив, в который будут заноситься только числа, возведённые в куб.
var ratio = [];
//Объявляем переменную для промежуточных вычислений. Если в массиве arr найдено число, то сюда занесётся его куб.
var checkNumber;
//Счётчик элементов массива с кубами.
var count = 0;

for (i = 0; i < arr.length; i++) {
	if (!isNaN(arr[i])) {
				checkNumber = arr[i] ** 3;
				ratio[count] = checkNumber;
				count++;
	}
}
console.log(arr);
console.log(ratio);
//Вычисляем сумму всех элементов массива с кубами.
var sum = 0;
for (i = 0; i < ratio.length; i++) {
	sum = sum + ratio[i];
}
console.log(sum);
//Извлекаем квадратный корень из суммы.
var sqrt = Math.sqrt(sum);
console.log(sqrt);

document.write('Исходный массив:<br>');
document.write(arr, '<br><br>');
document.write('Массив с кубами чисел:<br>');
document.write(ratio, '<br><br>');
document.write('Сумма всех кубов:<br>');
document.write(sum, '<br><br>');
document.write('Квадратный корень из суммы:<br>');
document.write(sqrt, '<br><br>');