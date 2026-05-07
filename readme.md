# School Project Hub

[Español](readme/readme.es.md) • [Nederlands](readme/readme.nl.md) • **English**

This repository contains interactive learning materials designed for kids, structured around school subjects. Currently, it focuses on English learning (numbers, grammar, and vocabulary) tailored initially for young learners (e.g., in Chilean schools), but adaptable to any setting.

## What's included

The project acts as a hub containing various interactive modules:

- **index.html**: A visually appealing main dashboard to navigate the different modules. Supports automatic language detection (English, Spanish, Dutch) with manual override via UI buttons.
- **english/english-numbers.html**: HTML page with a colorful 1-20 table. Features interactive elements for young kids.
- **english/english-numbers-quiz.html**: A randomized quiz where learners type the number corresponding to an English word.
- **english/talent-test.html**: A mini-test focusing on grammar and action vocabulary (e.g., likes/doesn't like).

## Vision & Architecture

The goal is to expand this hub into a platform that can automatically generate tests or quizzes based on school content (e.g., textbooks). The architecture aims to integrate with AI tools (like LLMs via APIs) in the future to programmatically generate pedagogical content, quizzes, and multimedia material. 

The project structure is designed to be parsed easily by AI tools (like Gemini CLI/MCP) for code assistance, content generation, and maintenance. It adheres strictly to Separation of Concerns (SoC) principles with logic, styling, and content fully decoupled from HTML structures.

## Setup

1. **Install Dependencies**: `npm install` (to install Tailwind CSS).
2. **Build CSS**: Run `npm run build:css` to generate the production-ready `css/tailwind.css` file.
3. Open `index.html` in a browser. 

*During development, you can use `npm run dev:css` to watch for CSS changes.*

## Technical details

```
- Vanilla JavaScript & HTML/CSS
- Tailwind CSS (Built via PostCSS/CLI for production readiness and CSP compliance)
- LocalStorage for saving user language preferences and simple states
- Centralized i18n object for localized content (`data/i18n.js`)
- Shared JavaScript logic (`js/lang-manager.js`)
```

## Browser compatibility

Tested on modern browsers (Chrome, Firefox, Safari). Should work on anything reasonably modern.

## License

Not for commercial use. Attribution required.

---
*Last updated: May 2026*