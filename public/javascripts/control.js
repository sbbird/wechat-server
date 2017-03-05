//$(document).ready(function() {

var correct = -1;
var questionNumber = 1;

function start() {
  readyToAnswer();
  $.getJSON('/quiz-info?number=' + questionNumber, renderQuizInfo);
}

function readyToAnswer(isRestart) {
  var text = isRestart === true ? '重新开始抢答' : '开始抢答';
  $('#controller').text(text);
  $('#controller').off('click');
  $('#controller').click(startAnswer);
}


function startAnswer() {
  // reset wechat answer counter
  $.getJSON("/answer/reset", function (data) {
    console.log(JSON.stringify(data));
  });
  $('#controller').text('显示答案');
  $('#controller').off('click');
  $('#controller').click(showAnswers);
}

function next() {
  questionNumber++;
  readyToAnswer();
  $.getJSON('/quiz-info?number=' + questionNumber, renderQuizInfo);
}

function showAnswers() {
  showAnswerFor(correct);
}

function showAnswerFor(id) {
  var selectionId = '#selection-result-' + id;
  $(selectionId).show();
  if (id == correct) {
    showNextQuestion();
  } else {
    readyToAnswer(true);
  }
}

function showNextQuestion() {
  $('#controller').text('下一题');
  $('#controller').off('click');
  $('#controller').click(next);
}

function renderQuizInfo(data) {
  var quizHTML = [];
  var selectionData = data.selection;
  quizHTML.push('<div class="row"><div class="col-lg-12"><div class="intro-text"><span class="name">'
    + '问题' + questionNumber + ': ' + data.title
    + '</span></div></div></div>');
  quizHTML.push('<hr class="star-light"/><ol>');

  correct = data.answer;
  for (var key in selectionData) {
    var text = selectionData[key];
    var result = key == correct ? '√' : '✗';
    quizHTML.push('<div class="row"><div class="col-lg-5">' +
      '<p id="selection-result-' + key + '" class="result">' + result + '</p>' +
      '</div><div class="col-lg-7"><li class="selection">' +
      '<a onclick="showAnswerFor(' + key + ')">' +
      text +
      '</a></li></div></div>');
  }

  quizHTML.push('</ol><hr class="star-light"/>');
  $('#quiz-info').html(quizHTML.join(''));
  console.log(quizHTML.join(''));
}

//$('#controller').click(start);
//});


$(document).ready(function () {
  var currentQuestion = 0;
  var nextMover = function () {
    $.getJSON("/shouldGoNext", function (data) {
      var shouldGoTo = data.currentPage;

      if (currentQuestion > shouldGoTo) {
        do {
          currentQuestion--;
          $('#quiz-area-' + currentQuestion).slideDown();
        } while (currentQuestion > shouldGoTo);
      } else if (currentQuestion < shouldGoTo) {
        do {
          $('#quiz-area-' + currentQuestion).slideUp();
          currentQuestion++
        } while (currentQuestion < shouldGoTo);
      }
      setTimeout(nextMover, 1000);
    });
  };
  //nextMover();
});



