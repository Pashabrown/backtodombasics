function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Providence") {
		correct++;
}
	if (question2 == "Hartford") {
		correct++;
}	
	if (question3 == "Albany") {
		correct++;
	}
	
	var pictures = ["/Users/albertbrown/quizlet/img/I wish he would follow me around everywhere I went and would do this after every good comeback I come up with. - Imgur.gif", "/Users/albertbrown/quizlet/img/Our daughter is NOT OK with going back to school.... - Imgur.jpg", "/Users/albertbrown/quizlet/img/undefined - Imgur.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}