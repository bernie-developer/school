document.addEventListener('DOMContentLoaded', () => {
    updateMainUI();
});

function updateMainUI() {
    LangManager.updateSharedUI();
    const t = LangManager.getTexts();

    // Textos de la UI principal
    const setElemText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setElemText('header-title', t.headerTitle);
    setElemText('header-desc', t.headerDesc);
    setElemText('cat-english', t.catEnglish);

    setElemText('card-num-title', t.cardNumTitle);
    setElemText('card-num-desc', t.cardNumDesc);
    setElemText('card-quiz-title', t.cardQuizTitle);
    setElemText('card-quiz-desc', t.cardQuizDesc);
    setElemText('card-talent-title', t.cardTalentTitle);
    setElemText('card-talent-desc', t.cardTalentDesc);

    setElemText('badge-theory', t.badgeTheory);
    setElemText('badge-quiz', t.badgeQuiz);
    setElemText('badge-test', t.badgeTest);
}