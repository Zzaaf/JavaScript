//Второй урок по JS - Решение задач

document.write('Какое будет выведено значение: let x = 5; alert( x++ ) ?<br>');
let x = 5;
document.write('Результат: ', x++, '<br>');
document.write('Всё дело в том, что х сначала выводится, а потом увеличивается на 1<br><hr>');

document.write('Чему равно такое выражение: [] + false - null + true ?<br>');
let a = [] + false - null + true;
document.write('Результат: ', a, '<br>');
document.write('NaN используется для обозначения ошибки при математических операциях.<br><hr>');

document.write('Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?<br>');
let y = 1;
let b = y = 2;
document.write('Результат: x=', b, '<br>');
document.write('Результат: y=', y, '<br>');
document.write('Обе переменные приравнялись и равны 2. Первое выражения присваивания y=1 перебивается.<br><hr>');

document.write('Чему равна сумма [] + 1 + 2?<br>');
let c = [] + 1 + 2;
document.write('Результат: ', c, '<br>');
document.write('Так как в выражении один из операндов [] является строкой, то все числа становятся строкой.<br><hr>');

document.write('Что выведет этот код: alert( "1"[0] )?<br>');
document.write('Результат: ', "1"[0], '<br>');
document.write('Так как [0] - это нулевой элемент какого-то массива, то там просто пусто. Остаётся только 1 для вывода.<br><hr>');

document.write('Чему равно 2 && 1 && null && 0 && undefined ?<br>');
document.write('Результат: ', 2 && 1 && null && 0 && undefined, '<br>');
document.write('В JavaScript null — это литерал и ключевое слово языка, которое представляет собой отсутствие какого-либо объекта.<br><hr>');

document.write('Есть ли разница между выражениями? !!( a && b ) и (a && b)?<br>');
document.write('Выводим на экран результат (a && b): ', (a && b), '<br>');
document.write('Выводим на экран результат !!(a && b): ', !!(a && b), '<br>');
document.write('Если использовать (a && b) в выражении if, то там оно получается как true, и условие выполняется. !!(a && b) в условиях выдаёт ошибку скрипта.<br><hr>');

document.write('Что выведет этот код: alert( null || 2 && 3 || 4 ); ?<br>');
document.write('Результат: ', null || 2 && 3 || 4, '<br>');
document.write('Вот тут надо связать с ассоциативностью. Как правильно пнять эту задачу?<br><hr>');

document.write('a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?<br>');
let d = [1, 2, 3];
let e = [1, 2, 3];
if (a == b) {
	document.write('Это правда!');
} else {
		document.write('Это неправда!');
		}
document.write('<br>Почему так получается?<br><hr>');

document.write('Что выведет этот код: alert( +"Infinity" ); ?<br>');
document.write('Результат: ', +"Infinity", '<br>');
document.write('+ не вывелся, а строка вывелась. Если поставить - вместо +, то он выводится. Как так?<br><hr>');

document.write('Верно ли сравнение: "ёжик" > "яблоко"?<br>');
if ("ёжик" > "яблоко") {
	document.write('Верно!');
} else {
		document.write('Неверно!');
		}
document.write('<br>Сравниваются коды символов по таблице Unicode слева направо. ё=1105, я=1103. Поэтому "ёжик" больше.<br><hr>');

document.write('Чему равно 0 || "" || 2 || undefined || true || falsе ?<br>');
document.write('Результат: ', 0 || "" || 2 || undefined || true || falsе, '<br>');
document.write('Почему так получается?<br><hr>');












