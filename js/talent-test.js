let userName = "";
let selectedQuestions = [];
const TOTAL_QUESTIONS = 5;

const questionPool = [
    {
        id: 1,
        type: 'match',
        image: '🚲',
        qKey: 'talent_q1_q',
        fKey: 'talent_q1_f',
        options: ['ride a bike', 'ride a horse', 'ride a car'],
        correct: 'ride a bike'
    },
    {
        id: 2,
        type: 'grammar',
        image: '👦😃',
        qKey: 'talent_q2_q',
        fKey: 'talent_q2_f',
        sentence: 'Does he like hopping?',
        options: ['Yes, he does.', 'No, he doesn\'t.', 'Yes, I do.'],
        correct: 'Yes, he does.'
    },
    {
        id: 3,
        type: 'fill',
        image: '👧☹️',
        qKey: 'talent_q3_q',
        fKey: 'talent_q3_f',
        sentence: 'Does she like jumping rope? No, she ________.',
        correct: 'doesn\'t'
    },
    {
        id: 4,
        type: 'table',
        image: '📊',
        qKey: 'talent_q4_q',
        fKey: 'talent_q4_f',
        html: `<div class="bg-pink-50 p-2 rounded border-2 border-pink-200 text-sm">
                    <b>Jenna:</b> Skateboard 😊 | Bike ☹️<br>
                    <b>Ollie:</b> Skateboard ☹️ | Bike 😊
                   </div>`,
        sentence: 'Jenna ______ skateboarding.',
        options: ['likes', 'doesn\'t like', 'like'],
        correct: 'likes'
    },
    {
        id: 5,
        type: 'grammar',
        image: '🫵😃',
        qKey: 'talent_q5_q',
        fKey: 'talent_q5_f',
        sentence: 'Do you like kicking a ball?',
        options: ['Yes, I do.', 'Yes, he does.', 'No, I don\'t.'],
        correct: 'Yes, I do.'
    },
    {
        id: 6,
        type: 'fill',
        image: '📝',
        qKey: 'talent_q6_q',
        fKey: 'talent_q6_f',
        sentence: '_____ he like rollerblading?',
        correct: 'does'
    },
    {
        id: 7,
        type: 'match',
        image: '🪢',
        qKey: 'talent_q7_q',
        fKey: 'talent_q7_f',
        options: ['jump rope', 'hop', 'kick'],
        correct: 'jump rope'
    },
    {
        id: 8,
        type: 'table',
        image: '📊',
        qKey: 'talent_q8_q',
        fKey: 'talent_q8_f',
        html: `<div class="bg-pink-50 p-2 rounded border-2 border-pink-200 text-sm">
                    <b>Jenna:</b> Skateboard 😊 | Bike ☹️<br>
                    <b>Ollie:</b> Skateboard ☹️ | Bike 😊
                   </div>`,
        sentence: 'Ollie ______ riding a bike.',
        options: ['likes', 'doesn\'t like', 'like'],
        correct: 'likes'
    },
    {
        id: 9,
        type: 'fill',
        image: '🤔',
        qKey: 'talent_q9_q',
        fKey: 'talent_q9_f',
        sentence: 'Do you like throwing? No, I ______.',
        correct: 'don\'t'
    },
    {
        id: 10,
        type: 'fill',
        image: '🫵📝',
        qKey: 'talent_q10_q',
        fKey: 'talent_q10_f',
        sentence: 'Do you like kicking a ball? Yes, ________.',
        correct: 'I do'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    const savedName = localStorage.getItem('talent_test_user_name');
    if (savedName) {
        document.getElementById('user-name').value = savedName;
    }
});

function updateUI() {
    LangManager.updateSharedUI();
    const t = LangManager.getTexts();

    document.getElementById('title-main').textContent = t.titleTalent;
    document.getElementById('user-name').placeholder = t.placeholderTalent;
    document.getElementById('btn-start').innerHTML = t.btnStartTalent;
    document.getElementById('btn-submit').innerHTML = t.btnSubmitTalent;
    document.getElementById('btn-retry').innerHTML = t.btnRetryTalent;
    
    const qTextEl = document.getElementById('q-text');
    if (qTextEl) qTextEl.textContent = t.qTextTalent;
}

// Function exposed for onclick in HTML
window.startQuiz = function() {
    const t = LangManager.getTexts();
    userName = document.getElementById('user-name').value.trim();
    if (!userName) {
        alert(t.alertNameTalent);
        return;
    }

    localStorage.setItem('talent_test_user_name', userName);

    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('greeting').innerText = t.greetTalent.replace('{name}', userName);
    document.getElementById('current-count').parentElement.innerHTML = `<span id="q-text">${t.qTextTalent}</span> 1-${TOTAL_QUESTIONS} / ${TOTAL_QUESTIONS}`;

    selectedQuestions = [...questionPool].sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);
    renderQuestions();
};

function renderQuestions() {
    const container = document.getElementById('questions-container');
    const t = LangManager.getTexts();
    container.innerHTML = "";

    selectedQuestions.forEach((q, index) => {
        const questionText = t[q.qKey];
        
        let questionHtml = `
                <div class="card p-6 border-l-8 border-sky-400 shadow-sm">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="text-4xl bg-sky-50 p-3 rounded-full">${q.image}</span>
                        <p class="font-bold text-gray-700">${index + 1}. ${questionText}</p>
                    </div>
                    ${q.html ? `<div class="mb-4">${q.html}</div>` : ''}
                    <p class="mb-4 text-xl">${q.sentence || ''}</p>
            `;

        if (q.type === 'fill') {
            questionHtml += `<input type="text" id="ans-${index}" placeholder="${t.placeholderQTalent}" class="border-2 border-gray-300 rounded p-2 w-full focus:border-sky-400 outline-none">`;
        } else {
            questionHtml += `<div class="grid grid-cols-1 gap-2">`;
            q.options.forEach(opt => {
                questionHtml += `
                        <label class="flex items-center space-x-3 p-3 border-2 border-gray-100 rounded-xl hover:bg-sky-50 cursor-pointer transition">
                            <input type="radio" name="ans-${index}" value="${opt}" class="h-5 w-5 text-sky-500">
                            <span>${opt}</span>
                        </label>
                    `;
            });
            questionHtml += `</div>`;
        }

        questionHtml += `</div>`;
        container.innerHTML += questionHtml;
    });
}

// Function exposed for onclick in HTML
window.submitQuiz = function() {
    let score = 0;
    let resultsHtml = "";
    const t = LangManager.getTexts();

    selectedQuestions.forEach((q, index) => {
        let userValRaw = "";
        if (q.type === 'fill') {
            userValRaw = document.getElementById(`ans-${index}`).value.trim();
        } else {
            const selected = document.querySelector(`input[name="ans-${index}"]:checked`);
            userValRaw = selected ? selected.value : "";
        }

        const cleanInput = (str) => str.toLowerCase().replace(/[.,!?]$/, "").trim();

        const isCorrect = cleanInput(userValRaw) === cleanInput(q.correct);
        if (isCorrect) score++;
        
        const questionText = t[q.qKey];
        const feedbackText = t[q.fKey];

        resultsHtml += `
                <div class="mb-4 pb-4 border-b border-gray-200">
                    <p class="font-bold text-gray-800">${index + 1}. ${questionText}</p>
                    <p class="mt-1">
                        ${isCorrect ? '✅' : '❌'}
                        <span class="${isCorrect ? 'text-green-600 font-bold' : 'wrong-answer'}">${userValRaw || t.emptyTalent}</span>
                    </p>
                    ${!isCorrect ? `<p class="text-sm text-gray-600 mt-1">${t.correctWasTalent} <span class="font-bold text-green-600">${q.correct}</span></p>` : ''}
                    <p class="text-xs italic text-blue-500 mt-1">${feedbackText}</p>
                </div>
            `;
    });

    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const resultTitle = document.getElementById('result-title');
    if (score === TOTAL_QUESTIONS) {
        resultTitle.innerHTML = t.resultPerfectTalent.replace('{name}', userName);
        resultTitle.classList.remove('text-amber-600');
        resultTitle.classList.add('text-green-600');
    } else {
        resultTitle.innerHTML = t.resultGoodTalent.replace('{name}', userName);
        resultTitle.classList.remove('text-green-600');
        resultTitle.classList.add('text-amber-600');
    }

    document.getElementById('result-score').innerText = `${score} / ${TOTAL_QUESTIONS}`;
    document.getElementById('result-details').innerHTML = resultsHtml;
};

// Function exposed for onclick in HTML
window.reloadPage = function() {
    location.reload();
};