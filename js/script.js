function control(name) {
	/*if (name == 'включить свет') {
		
	}
	if (name == 'выключить свет') {
		
	}*/
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
var result = event.results[event.resultIndex];
if (result.isFinal) {
  console.log('Вы сказали: ' + result[0].transcript);
  control(result[0].transcript);
} else {
  console.log('Промежуточный результат: ', result[0].transcript);
}
};

var synth = window.speechSynthesis;
var utterance = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');

function stop () {
	synth.pause();
}

function start () {
	recognizer.start();
}

$( document ).ready(function() {	
    $("#start").on( "click", function() {
		$('html, body').animate({
        scrollTop: $("#image").offset().top
		}, 2000);
	});

	$("#microphone").on( "click", function() {
		start();
	});
});