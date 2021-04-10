'use strict';

let button = document.querySelector('#button');
let textarea = document.querySelector('#textarea');
let text = document.querySelector('#text');

let randomNum = getRandomInt(1, 100);

textarea.addEventListener('focus', function () {
	textarea.value = '';
});

button.addEventListener('click', function check() {
	if (Number(textarea.value) < randomNum) {
		text.innerHTML = 'введите число побольше';
	} else if (Number(textarea.value) > randomNum) {
		text.innerHTML = 'введите число поменьше';
	} else if (Number(textarea.value) == randomNum) {
		text.innerHTML = 'Бинго! Конечно это ' + randomNum;
		button.removeEventListener('click', check);
		button.innerHTML = 'Ещё раз';
		button.addEventListener('click', function repeat() {
			randomNum = getRandomInt(1, 100);
			button.innerHTML = 'Проверить';
			text.innerHTML = 'Я загадал число от 1 до 100! Отгадаешь?';
			button.removeEventListener('click', repeat);
			button.addEventListener('click', check);
		});
	}
});

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
