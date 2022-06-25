const quiz = [
	{
		question: "しせりの台詞「俺を怒らせたら何するかわかるよな」に続く台詞を答えよ",
		answers: [
			"付き合おう",
			"食べちゃうぞお前",
			"金だよな？",
			"ペペロンチーノ"
		],
		correct:"金だよな？"
	},{
		question: "マトラが一番好きなポケモンは？",
		answers: [
			"エーフィ",
			"マニューラ",
			"耳カス",
			"パチモン"
		],
		correct:"エーフィ"
	},{
		question: "のろさんが好きなバジルホーキンスの初登場時（シャボンディ諸島）の懸賞金は？",
		answers: [
			"７２００万ベリー",
			"８２００万ベリー",
			"６８００万ベリー",
			"２億４９００万ベリー"
		],
		correct:"２億４９００万ベリー"
	},{
		question: "かいくんは？",
		answers: [
			"ホモ",
			"レズ",
			"性同一性障害",
			"一般人"
		],
		correct:"ホモ"
	}
];
const quizLength = quiz.length;
let quizIndex = 0
let score =0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

const setupQuiz = ()=> {
	document.getElementById('js-question').textContent = quiz[quizIndex].question;
	let buttonIndex = 0;
	let buttonLength = $button.length;
	while(buttonIndex < buttonLength){
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
}
setupQuiz();
 
 const clinkHandler = (e) => {
	if(quiz[quizIndex].correct ===e.target.textContent){
	window.alert(`正解。まあ当然っすよね？`);
	score++;
	} else {
	window.alert(`ぶっぶー。何ミスってんの頭わりーｗｗｗ`);	
	}

	quizIndex++;

	if(quizIndex < quizLength){
		setupQuiz();

	} else {
		window.alert(`おわりーお前の正解数は`　+ score + `/` + quizLength + `だよ`);

	}
 };

 let handlerIndex = 0;
 while (handlerIndex < buttonLength) {
 	$button[handlerIndex].addEventListener("click",(e) => {
	clinkHandler(e);
	});
	handlerIndex++;
 };
