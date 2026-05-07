
class SchoolNavbar extends HTMLElement {
    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '';
        
        this.innerHTML = `
            <nav class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10 w-full">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16 items-center">
                        <div class="flex items-center">
                            <span class="text-3xl mr-2">🎒</span>
                            <a href="${basePath}index.html" class="font-black text-2xl text-indigo-600 tracking-tight hover:text-indigo-800 transition-colors" id="title-nav"></a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="https://github.com/bernie-developer/school" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-600 transition-colors" title="View Source on GitHub">
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <div class="h-6 w-px bg-slate-200"></div>
                            <div class="flex space-x-2">
                                <button onclick="handleSetLanguage('es')" id="btn-es" class="px-3 py-1 rounded-full text-sm font-bold transition-colors"></button>
                                <button onclick="handleSetLanguage('en')" id="btn-en" class="px-3 py-1 rounded-full text-sm font-bold transition-colors"></button>
                                <button onclick="handleSetLanguage('nl')" id="btn-nl" class="px-3 py-1 rounded-full text-sm font-bold transition-colors"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

class SchoolFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-slate-900 text-slate-400 py-8 text-center mt-auto w-full">
                <p class="mb-2">&copy; <span id="year"></span> School Projects Hub.</p>
                <p class="text-sm">
                    <span id="footer-made-by"></span> 
                    <a href="https://github.com/bernie-developer" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 font-bold transition-colors">bernie-developer</a>
                </p>
            </footer>
        `;
    }
}

customElements.define('school-navbar', SchoolNavbar);
customElements.define('school-footer', SchoolFooter);