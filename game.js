// JavaScript Game Logic
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const submitGuess = document.getElementById('submitGuess');
const attemptsDisplay = document.getElementById('attempts');
const restartGame = document.getElementById('restartGame');

submitGuess.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
  } else if (userGuess < randomNumber) {
    feedback.textContent = 'Too low! Try again.';
  } else if (userGuess > randomNumber) {
    feedback.textContent = 'Too high! Try again.';
  } else {
    feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    submitGuess.disabled = true;
    restartGame.style.display = 'inline-block';
  }

  attemptsDisplay.textContent = attempts;
  guessInput.value = '';
});

restartGame.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = '';
  attemptsDisplay.textContent = 0;
  submitGuess.disabled = false;
  restartGame.style.display = 'none';
});
