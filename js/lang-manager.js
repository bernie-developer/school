// Gestor centralizado de idiomas
// Maneja la lógica de detección, almacenamiento y recuperación de traducciones.

const LangManager = {
    // Obtiene el idioma actual (con fallback al idioma del navegador o español)
    getLang: function() {
        let savedLang = localStorage.getItem('school_hub_lang');
        if (!savedLang || !globalI18n[savedLang]) {
            // Detección automática basada en el navegador
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('en')) savedLang = 'en';
            else if (browserLang.startsWith('nl')) savedLang = 'nl';
            else savedLang = 'es'; // default
            
            // Guardar para la próxima vez
            localStorage.setItem('school_hub_lang', savedLang);
        }
        return savedLang;
    },
    
    // Cambia el idioma actual
    setLang: function(lang) {
        if(globalI18n[lang]) {
            localStorage.setItem('school_hub_lang', lang);
        }
        return this.getLang();
    },
    
    // Retorna el objeto con los textos del idioma actual
    getTexts: function() {
        return globalI18n[this.getLang()] || globalI18n['es'];
    },

    // Actualiza los elementos compartidos de la UI (Navbar y Footer)
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

        // Estilos de botones de idioma
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
        
        // Año del footer
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