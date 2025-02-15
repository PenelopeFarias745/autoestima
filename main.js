var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})
question_one.addEventListener('click', function(event){
    storeAnswer(6, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(7, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(8, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(9, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(10, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5+
    answers.question6+
    answers.question7+
    answers.question8+
    answers.question9+ 
    answers.question10;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 15){
        var score_info = "Uma pontuação inferior a 15 pode indicar uma baixa autoestima";
    } else if(totalScore() > 15){
        var score_info = "Uma pontuação inferior a 15 pode indicar uma baixa autoestima"
    }

    return score_info;

    document.getElementById("obrigada").style.visibility = true;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
})
submit10.addEventListener('click', function(){
    nextQuestion(11);
})

submit10.addEventListener('click', function(){
    document.getElementById("scoreNumber").innerHTML = totalScore();
    document.getElementById("selfsteemInfo").innerHTML = getInfoBasedOnScore();
    firebaseFunction();
    console.log(totalScore());
})

const firebaseConfig = {
    apiKey: "AIzaSyB75kkGvajaRR4s88xxJ-4qJkkqvMVdRgY",
    authDomain: "autoestima2-77d6f.firebaseapp.com",
    databaseURL: "https://autoestima2-77d6f-default-rtdb.firebaseio.com",
    projectId: "autoestima2-77d6f",
    storageBucket: "autoestima2-77d6f.appspot.com",
    messagingSenderId: "1090382203650",
    appId: "1:1090382203650:web:b5877fab6371f764d2d01b"
    }

firebase.initializeApp(firebaseConfig);

function firebaseFunction()
{
  scoreNumber = document.getElementById("scoreNumber").value;

  firebase.database().ref("/").child(scoreNumber).update
  ({ 
    purpose : "resultado"
  });
}

