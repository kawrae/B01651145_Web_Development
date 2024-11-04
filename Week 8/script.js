function submitQuiz() {
    const correctAnswers = {
      q1: "HyperText Markup Language",
      q2: "To style the page",
      q3: "<script src='app.js'>",
      q4: "React",
      q5: "HyperText Transfer Protocol",
      q6: "Contains metadata and links to resources"
    };
  
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let allAnswered = true;
  
    Object.keys(correctAnswers).forEach((key) => {
      const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
      if (!userAnswer) {
        allAnswered = false;
      } else if (userAnswer.value === correctAnswers[key]) {
        score++;
      }
    });
  
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = ''; 
  
    if (!allAnswered) {
      alert("Please answer all the questions before submitting.");
      return;
    }
  
    const percentage = (score / totalQuestions) * 100;
    const passMark = 50;
  
    let gradeColor = `rgb(${255 - (percentage * 2.55)}, ${percentage * 2.55}, 0)`;
  
    feedback.innerHTML = `<p>You scored ${score} out of ${totalQuestions}.</p>`;
    feedback.innerHTML += `<p>Your percentage grade is <span style="color:${gradeColor};">${percentage.toFixed(2)}%</span>.</p>`;
    feedback.innerHTML += `<p>The pass mark is ${passMark}%.</p>`;
  
    let performanceMessage = '';
    if (percentage >= 100) {
      performanceMessage = "Excellent! You got everything correct!";
    } else if (percentage >= passMark) {
      performanceMessage = "Good job! You passed the quiz.";
    } else {
      performanceMessage = "Better luck next time!";
    }
  
    feedback.innerHTML += `<p>${performanceMessage}</p>`;
  }
  