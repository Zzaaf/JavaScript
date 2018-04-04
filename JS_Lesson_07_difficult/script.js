let btn = document.getElementsByTagName('button')[0],
		smile = document.getElementsByTagName('img')[0];
var direction = 1;
var end = 0;


// Рисует функция draw
// Продолжительность анимации duration
function animate(draw, duration) {
  var start = performance.now();


 requestAnimationFrame(function animate(time) {
  // определить, сколько прошло времени с начала анимации
  var timePassed = time - start;

  console.log(timePassed, direction, end)
    // возможно небольшое превышение времени, в этом случае зафиксировать конец
  if(timePassed > duration / 2 && direction == 1) {
  	timePassed = duration / 2;
  	end = duration / 2;
  	direction = -1;
  }

  // нарисовать состояние анимации в момент timePassed
  draw(timePassed);
  
  if(timePassed > duration) {
  	end = 0;
  	direction = 1;
  	smile.style.left = 0;
  	btn.style.left = 0;
  	smile.style.top = 0;
  }
  // если время анимации не закончилось - запланировать ещё кадр
  if (timePassed < duration) {
    requestAnimationFrame(animate);
  }

 });
}

btn.addEventListener('click', function() {
	animate(function(timePassed) {
		if(direction == 1) {
			smile.style.left = timePassed / 5 + 'px';
			btn.style.left = timePassed / 5 + 'px';
			smile.style.top = timePassed / 5 + 'px';
		} else if(direction == -1) {
			smile.style.left = (end - (timePassed - end)) / 5 + 'px';
			btn.style.left = (end - (timePassed - end)) / 5 + 'px';
			smile.style.top = (end - (timePassed - end)) / 5 + 'px';		
		}
	}, 4000);
});
