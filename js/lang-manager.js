const LangManager = {
    getLang: function() {
        let savedLang = localStorage.getItem('school_hub_lang');
        if (!savedLang || !globalI18n[savedLang]) {
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('en')) savedLang = 'en';
            else if (browserLang.startsWith('nl')) savedLang = 'nl';
            else savedLang = 'es'; // default
            
            localStorage.setItem('school_hub_lang', savedLang);
        }
        return savedLang;
    },
    
    setLang: function(lang) {
        if(globalI18n[lang]) {
            localStorage.setItem('school_hub_lang', lang);
        }
        return this.getLang();
    },
    
    getTexts: function() {
        return globalI18n[this.getLang()] || globalI18n['es'];
    },

    updateSharedUI: function() {
        const t = this.getTexts();
        const currentLang = this.getLang();

        const setElemText = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };

        setElemText('title-nav', t.titleNav);
        setElemText('footer-made-by', t.footerMadeBy);

        const btnEs = document.getElementById('btn-es');
        const btnEn = document.getElementById('btn-en');
        const btnNl = document.getElementById('btn-nl');

        if (btnEs) btnEs.textContent = 'ES';
        if (btnEn) btnEn.textContent = 'EN';
        if (btnNl) btnNl.textContent = 'NL';

        const btns = ['es', 'en', 'nl'];
        btns.forEach(b => {
            const btn = document.getElementById(`btn-${b}`);
            if (btn) {
                if(b === currentLang) {
                    btn.className = 'px-3 py-1 rounded-full text-sm font-bold transition-colors bg-indigo-100 text-indigo-700';
                } else {
                    btn.className = 'px-3 py-1 rounded-full text-sm font-bold transition-colors hover:bg-slate-100 text-slate-600';
                }
            }
        });
        
        const yearEl = document.getElementById('year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }
};

// Función global para cambiar de idioma
window.handleSetLanguage = function(lang) {
    LangManager.setLang(lang);
    if (typeof updateUI === 'function') {
        updateUI();
    } else if (typeof updateMainUI === 'function') {
        updateMainUI();
    }
};