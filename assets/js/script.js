document.addEventListener('DOMContentLoaded', function () {
  // Define variables
  var usernameInput = document.getElementById('username-input');
  var categories;
  var currentCategoryIndex = 0;
  var currentQuestionIndex = 0;
  var totalQuestions = 0;

  // Function to handle the "Enter username" button click event
  function enterUsername() {
    var username = usernameInput.value;

    // Hide the "Enter username" button
    document.getElementById('enter-username').style.display = 'none';

    // Hide the username input
    document.getElementById('username-input').style.display = 'none';

    // Show the "Start quiz" button
    document.getElementById('start-quiz').style.display = 'block';
  }

  // Function to start the quiz
  function startQuiz() {
    // Hide the "Start quiz" button
    document.getElementById('start-quiz').style.display = 'none';

    // Show the question container
    document.getElementById('question-container').style.display = 'block';

    // Load the categories from the JSON file
    loadCategories();
  }
  // Get the start text element
  var startText = document.getElementById('start-text');

  // Add event listener to the "Enter username" button
  var enterUsernameButton = document.getElementById('enter-username');
  enterUsernameButton.addEventListener('click', enterUsername);

  // Add this code before attaching the event listener
  var startQuizButton = document.getElementById('start-quiz');

  // Add event listener to the "Start quiz" button
  startQuizButton.addEventListener('click', function () {
    console.log('Start quiz button clicked');

    // Hide the start quiz button
    startQuizButton.style.display = 'none';

    // Show the question container
    questionContainer.style.display = 'block';

    // Get the username input value
    var username = usernameInput.value;
    console.log('Username:', username);

    // Hide the start text
    startText.style.display = 'none';

    // Load the categories from the JSON file
    loadCategories();
  });




  // Function to load the categories from the JSON file
  function loadCategories() {
    console.log('Load categories function called');

    fetch('assets/data.json')
      .then(response => response.json())
      .then(data => {
        console.log('Data loaded:', data);

        categories = data.categories;
        totalQuestions = getTotalQuestionsCount();
        // Hide the start text
        startText.style.display = 'none';

        // Show the question container
        questionContainer.style.display = 'block';
        // Load the first question
        loadQuestion();
      })
      .catch(error => {
        console.error('Error loading questions from data.json:', error);
      });
  }

  function loadQuestion() {
    var category = categories[currentCategoryIndex];
    if (!category) {
      endQuiz(); // No more categories, end the quiz
      return;
    }
    var question = category.questions[currentQuestionIndex];

    // Set the question and options in the HTML elements
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';

    // Create and append the option buttons
    for (var i = 0; i < question.options.length; i++) {
      var optionButton = document.createElement('button');
      optionButton.innerText = question.options[i];
      optionButton.classList.add('option-btn');
      optionButton.addEventListener('click', selectOption);
      optionsElement.appendChild(optionButton);
    }

    // Get the result element
    var resultElement = document.createElement('div');

    // Show the result element
    resultElement.style.display = 'none';

    // Call the endQuiz() function if the quiz is over
    if (currentQuestionIndex >= totalQuestions) {
      endQuiz(resultElement);
      return;
    }

    // Return the result element
    return resultElement;
  }


  // Get the question container elements
  var questionContainer = document.getElementById('question-container');
  var questionElement = document.getElementById('question');
  var optionsElement = document.getElementById('options');

  // Get the submit button and result elements
  var submitButton = document.getElementById('submit-btn');
  var resultElement = document.getElementById('result');

  // Show the submit button
  document.getElementById('submit-btn').style.display = 'block';

  // Show the question container
  document.getElementById('question-container').style.display = 'block';

  // Add event listener to the submit button
  submitButton.addEventListener('click', submitAnswer);

  // Function to handle option selection
  function selectOption(event) {
    var selectedOption = event.target;
    var category = categories[currentCategoryIndex];
    var question = category.questions[currentQuestionIndex];

    // Remove the "selected" class from all option buttons
    var optionButtons = optionsElement.querySelectorAll('.option-btn');
    optionButtons.forEach(function (button) {
      button.classList.remove('selected');
    });

    // Add the "selected" class to the clicked option button
    selectedOption.classList.add('selected');

  }

  function submitAnswer() {
    // Check if an option is selected
    var selectedOption = optionsElement.querySelector('.selected');
    if (!selectedOption) {
      return; // Exit the function if no option is selected
    }

    // Increment the question index
    currentQuestionIndex++;
    // Check if all questions in the current category are answered
    var category = categories[currentCategoryIndex];
    if (currentQuestionIndex >= category.questions.length) {
      // Check if there are more categories
      if (currentCategoryIndex + 1 < categories.length) {
        // Move to the next category
        currentCategoryIndex++;
        currentQuestionIndex = 0;
      } else {
        // End the quiz and display the result
        endQuiz();
        return;
      }
    }


    // Load the next question
    loadQuestion();

    // Clear the selected option and enable option buttons
    var optionButtons = optionsElement.querySelectorAll('.option-btn');
    for (var i = 0; i < optionButtons.length; i++) {
      optionButtons[i].disabled = false;
      optionButtons[i].classList.remove('selected');
    }
  }

  // Function to end the quiz and display the result
  function endQuiz() {
    // Get the end screen element
    var endScreen = document.getElementById('end-screen');

    // Hide the question container
    questionContainer.style.display = 'none';

    // Show the end screen
    endScreen.style.display = 'block';

    // Calculate the score
    var score = (getCorrectAnswersCount() / totalQuestions) * 100;

    // Display the result
    var resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `
      <h1>Your results</h1>
      <p>Username: <strong>${usernameInput.value}</strong></p>
      <p>Score: <strong>${score.toFixed(2)}%</strong></p>
    `;
  }




  function getCorrectAnswersCount() {
    var correctCount = 0;
    if (categories) {
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        for (var j = 0; j < category.questions.length; j++) {
          var question = category.questions[j];
          if (question.answer === question.selectedOption) {
            correctCount++;
          }
        }
      }
    }
    return correctCount;
  }

  // Function to calculate the total number of questions in all categories
  function getTotalQuestionsCount() {
    var totalQuestionsCount = 0;
    for (var i = 0; i < categories.length; i++) {
      totalQuestionsCount += categories[i].questions.length;
    }
    return totalQuestionsCount;
  }

  // Function to update the results element with the username and score
  function updateResults() {
    var resultsElement = document.getElementById('results');
    var score = (getCorrectAnswersCount() / totalQuestions) * 100;

    resultsElement.innerHTML = `
    <h1>Your results</h1>
    <p>Username: <strong>${usernameInput.value}</strong></p>
    <p>Score: <strong>${score.toFixed(2)}%</strong></p>
  `;
  }


  // Submit the username and score to the Firebase Realtime Database
  function submitScore() {
    // Get the username and score from the user input
    var username = usernameInput.value;
    var score = score; // <-- Comment out this line

    // Create a new entry in the Firebase Realtime Database
    var database = firebase.database();
    var scoresRef = database.ref('quiz-scores');
    scoresRef.push({
      username: username,
      score: score
    });

    // Update the results element with the username and score
    updateResults(score);

    // Clear the username and score inputs
    usernameInput.value = '';
    scoreInput.value = '';
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyAEQRrArNsKOYMjeAVpYAWmaoK1e5HRYM0",
  authDomain: "freshquiz-67c82.firebaseapp.com",
  databaseURL: "https://freshquiz-67c82-default-rtdb.firebaseio.com",
  projectId: "freshquiz-67c82",
  storageBucket: "freshquiz-67c82.appspot.com",
  messagingSenderId: "599950135432",
  appId: "1:599950135432:web:cc30a733a8a661304b4f3d",
  measurementId: "G-1444RBFMYN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);