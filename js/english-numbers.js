document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});

function updateUI() {
    LangManager.updateSharedUI();
    const t = LangManager.getTexts();
    
    const title = document.getElementById('title');
    if (title) title.textContent = t.titleNumbers;
}