# Plataforma de Proyectos Escolares

[English](../readme.md) • [Nederlands](readme.nl.md) • **Español**

Este repositorio contiene materiales de aprendizaje interactivos diseñados para niños, estructurados en torno a asignaturas escolares. Actualmente se centra en el aprendizaje de inglés (números, gramática y vocabulario) adaptado inicialmente para estudiantes jóvenes (por ejemplo, en colegios chilenos), pero aplicable a cualquier entorno.

## Contenido

El proyecto funciona como un centro (hub) que contiene varios módulos interactivos:

- **index.html**: Un panel principal visualmente atractivo para navegar por los diferentes módulos. Soporta detección automática de idioma (inglés, español, holandés) con opción de cambio manual mediante botones en la interfaz.
- **english/english-numbers.html**: Página HTML con una colorida tabla del 1 al 20. Presenta elementos interactivos para niños pequeños.
- **english/english-numbers-quiz.html**: Un quiz aleatorio donde los alumnos escriben el número correspondiente a una palabra en inglés.
- **english/talent-test.html**: Un mini-test enfocado en gramática y vocabulario de acciones (ej. likes/doesn't like).

## Visión y Arquitectura

El objetivo es expandir esta plataforma para poder generar automáticamente tests o quizzes basados en contenido escolar (ej. libros de texto). La arquitectura está pensada para integrarse con herramientas de IA (como APIs de LLMs) en el futuro, con el fin de generar contenido pedagógico, pruebas y material multimedia de forma automatizada.

La estructura del proyecto está diseñada para ser fácilmente interpretada por herramientas de IA (como Gemini CLI/MCP) para asistencia en el código, generación de contenido y mantenimiento.

## Instalación

Descarga los archivos y abre `index.html` en tu navegador.

## Detalles técnicos

```
- Vanilla JavaScript y HTML/CSS (Tailwind para estilos)
- LocalStorage para guardar preferencias de idioma del usuario y estados simples
- No requiere herramientas de compilación complejas para el frontend
- Funciona sin conexión a internet
```

## Compatibilidad

Probado en navegadores modernos (Chrome, Firefox, Safari). Debería funcionar en cualquier navegador razonablemente actualizado.

## Licencia

No apto para uso comercial. Requiere atribución si se utiliza.

---
*Actualizado: Mayo 2026*