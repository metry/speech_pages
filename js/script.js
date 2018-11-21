function control(name) {
	name = name.toLowerCase();
	if (name == 'включить свет') {
		$(".image3").hide();
	}
	if (name == 'выключить свет') {
		$(".image3").show();
	}
	if (name == 'открыть шторы') {
		$(".image2").hide();
	}
	if (name == 'закрыть шторы') {
		$(".image2").show();
	}
}

var recognizer = new webkitSpeechRecognition();
// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
recognizer.interimResults = true;
// Какой язык будем распознавать?
recognizer.lang = 'ru-Ru';
// Используем колбек для обработки результатов
recognizer.onresult = function (event) {
	var result = document.getElementById("results");
	
	var result = event.results[event.resultIndex];
	if (result.isFinal) {
	  console.log('Вы сказали: ' + result[0].transcript);
	  result.innerHTML = result[0].transcript;
	  control(result[0].transcript);
	} else {
	  console.log('Промежуточный результат: ', result[0].transcript);
	  result.innerHTML = result[0].transcript + '...';
	}
};

function start () {
	recognizer.start();
}

$( document ).ready(function() {	
    $("#start, #startMenu").on( "click", function() {
		$('html, body').animate({
        scrollTop: $("#image").offset().top
		}, 2000);
		return false;
	});

	$("#microphone").on( "click", function() {
		start();
	});
});