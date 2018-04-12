jQuery(document).ready(function($) {
	$('.main_btna, .main_btn, a[href^="#sheldure"').on('click', function() {
			$('.overlay').fadeIn(1000);
			$('.modal').animate({
				width: 'show',
				height: 'show',
				opacity: 'show'
			}, 1000);
			$('.modal').css({"transition": "transform 1s", "transform": "rotate(360deg)"});
	});
	$('.close').on('click', function() {
			$('.overlay').fadeOut(1000);
			$('.modal').animate({
				width: 'hide',
				height: 'hide',
				opacity: 'hide'
			}, 1000);
			$('.modal').css({"transition": "transform 1s", "transform": "rotate(0deg)"});
	});

	/*Mailer*/
	$('.form-inline').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "server.php",
			data: $(this).serialize(),
			success: function() {
				//Если успешно отправлено, то убираем модальное окно
				$('.modal').animate({
					width: 'hide',
					height: 'hide',
					opacity: 'hide'
				}, 1000);
				$('.modal').css({"transition": "transform 1s", "transform": "rotate(0deg)"});
				//выводим благодарность
				$('.thanks').slideDown(1000);
				//и очищаем формы
				$("form").trigger("reset");
			},
			error: function() {
				//Если ошибка отправки, то закрываем все окна
				$('.modal').animate({
					width: 'hide',
					height: 'hide',
					opacity: 'hide'
				}, 1000);
				$('.modal').css({"transition": "transform 1s", "transform": "rotate(0deg)"});
				$('.overlay').fadeOut(1000);
				//и выводи сообщение о неудаче
				alert('К сожалению, форма не была отправлена.');
			}
		});
	});
	//Закрываем окно благодарности
	$('.back').on('click', function() {
		$('.overlay').fadeOut(1000);
		$('.thanks').slideUp(1000);
	});



});

