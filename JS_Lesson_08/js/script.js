//Запускаем скрипт только после завершения построения браузером модели страницы
window.addEventListener('DOMContentLoaded', function() {
	let tab = document.getElementsByClassName('info-header-tab'),
				 tabContent = document.getElementsByClassName('info-tabcontent'),
				 info = document.getElementsByClassName('info-header')[0];
/*Скрываем контент (если а=0, то весь; если а=1, то всё, кроме 1-ой статьи
(используется при первом запуске))*/
	function hideTabContent(a) {
			for(i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
	};
//При первом запуске скрываем все вкладки, кроме первой
	hideTabContent(1);
//Скрываем все табы и показываем только тот, по которому кликнули
	function showtabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
		}
	}
/*Ждём клика по вкладкам. Слушаем родителя вкладки и перебираем массив
со вкладками в поиске той, по которой кликнули*/
	info.addEventListener('click', function(event) {
			let target = event.target;
			if(target.className == 'info-header-tab') {
					for(i = 0; i < tab.length; i++) {
						if(target == tab[i]) {
								showtabContent(i);
								break;						}
					}
			};
	});

	//Countdown
	//Зададим время в формате местной зоны, указав кроме даты ещё и время полуночи
	let deadline = '2018-04-06 00:00';
	//Получаем время,оставшееся до заданного, и разбираем его на составляющие
	function getRemainingTime(endTime) {
		let difTime = Date.parse(endTime) - Date.parse(new Date()),
						seconds = Math.floor((difTime/1000) % 60),
						minutes = Math.floor((difTime/1000/60) % 60),
						hours = Math.floor(difTime/1000/60/60);
						//Полученные значения возвращаем в объект
						return {
							'total': difTime,
							'seconds': seconds,
							'minutes': minutes,
							'hours': hours
						};
	};
	//С интервалом в 1 секунду записываем оставшееся время в сответствующие поля сайта
	function setClock(id, endTime) {
		let timer = document.getElementById(id),
						hours = timer.querySelector('.hours'),
						minutes = timer.querySelector('.minutes'),
						seconds = timer.querySelector('.seconds');
		function updateClock() {
			let t = getRemainingTime(endTime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			if(t.seconds > 9) {
				seconds.innerHTML = t.seconds;
			} else {
				seconds.innerHTML = '0' + t.seconds;
			};
			if( t.total <= 0 ) {
				clearInterval(timeInterval);
			}
		};
			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
		};

	setClock('timer', deadline);
});

