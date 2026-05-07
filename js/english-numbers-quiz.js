const numbers = [
    {num: 1, word: 'ONE'},
    {num: 2, word: 'TWO'},
    {num: 3, word: 'THREE'},
    {num: 4, word: 'FOUR'},
    {num: 5, word: 'FIVE'},
    {num: 6, word: 'SIX'},
    {num: 7, word: 'SEVEN'},
    {num: 8, word: 'EIGHT'},
    {num: 9, word: 'NINE'},
    {num: 10, word: 'TEN'},
    {num: 11, word: 'ELEVEN'},
    {num: 12, word: 'TWELVE'},
    {num: 13, word: 'THIRTEEN'},
    {num: 14, word: 'FOURTEEN'},
    {num: 15, word: 'FIFTEEN'},
    {num: 16, word: 'SIXTEEN'},
    {num: 17, word: 'SEVENTEEN'},
    {num: 18, word: 'EIGHTEEN'},
    {num: 19, word: 'NINETEEN'},
    {num: 20, word: 'TWENTY'}
];

let shuffledNumbers = [];
let currentIndex = 0;
let score = 0;
let answered = false;

document.addEventListener('DOMContentLoaded', () => {
    // Enter key functionality
    document.getElementById('answer').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (!answered) {
                checkAnswer();
            } else if (!document.getElementById('nextBtn').classList.contains('hidden')) {
                nextQuestion();
            }
        }
    });

    // Start the game
    startNewGame();
});

function updateUI() {
    LangManager.updateSharedUI();
    const t = LangManager.getTexts();
    
    document.getElementById('title').textContent = t.titleQuiz;
    document.getElementById('btn-check').textContent = t.btnCheck;
    document.getElementById('nextBtn').textContent = t.btnNext;
    document.getElementById('title-end').textContent = t.titleEndQuiz;
    document.getElementById('btn-restart').textContent = t.btnRestartQuiz;
    document.getElementById('score').textContent = `${t.scoreTxt}: ${score}`;

    if(document.getElementById('progress').textContent.length > 0) {
        updateProgressText();
    }
}

function updateProgressText() {
    const t = LangManager.getTexts();
    document.getElementById('progress').textContent = t.qOfQuiz.replace('{n}', currentIndex + 1);
}

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Function exposed for onclick in HTML
window.startNewGame = function() {
    shuffledNumbers = shuffle(numbers);
    currentIndex = 0;
    score = 0;
    answered = false;
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('endScreen').classList.add('hidden');

    updateUI(); // Setup texts
    showQuestion();
};

function showQuestion() {
    if (currentIndex >= shuffledNumbers.length) {
        endGame();
        return;
    }

    const current = shuffledNumbers[currentIndex];
    document.getElementById('question').textContent = current.word;
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('nextBtn').classList.add('hidden');
    updateProgressText();
    answered = false;
}

// Function exposed for onclick in HTML
window.checkAnswer = function() {
    if (answered) return;

    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = shuffledNumbers[currentIndex].num;
    const feedbackEl = document.getElementById('feedback');
    const t = LangManager.getTexts();

    answered = true;

    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = t.correctQuiz;
        feedbackEl.className = 'feedback correcto';
        score++;
        document.getElementById('score').textContent = `${t.scoreTxt}: ${score}`;
    } else {
        feedbackEl.textContent = t.wrongQuiz.replace('{n}', correctAnswer);
        feedbackEl.className = 'feedback malo';
    }

    document.getElementById('nextBtn').classList.remove('hidden');
};

// Function exposed for onclick in HTML
window.nextQuestion = function() {
    currentIndex++;
    showQuestion();
};

function endGame() {
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('endScreen').classList.remove('hidden');
    document.getElementById('finalScore').textContent = `${score} / 20`;
}