# 🛒 Calcolatore di Spesa Interattivo (Architettura ES Modules)

> Applicazione front-end dinamica per la creazione e gestione di una lista della spesa. Il progetto implementa una logica di "stato" isolata e un design system moderno, focalizzandosi su performance e User Experience (UX).

*(Nota: Inserisci qui uno screenshot dell'app)*

## 🚀 Live Demo

* **Guarda il sito live:** https://calcolatore-spesa.vercel.app/

## 🎯 Punti Chiave Tecnici & UX

* **Architettura Modulare (ES Modules):** Logica applicativa suddivisa in file isolati (`state.js`, `ui.js`, `main.js`, `utils.js`) per uno sviluppo pulito e manutenibile.
* **Gestione dello Stato (State Management):** Lo stato del carrello (`cart`) è gestito in modo centralizzato in `state.js` con funzioni CRUD e persistenza via `localStorage`.
* **Debounce per la Ricerca:** Utilizzo della funzione `debounce` per ottimizzare le performance, evitando di eseguire il filtro ad ogni tasto premuto.
* **Onboarding Personalizzato:** Modal iniziale che raccoglie `Nome Utente` e `Nome Lista` e salva i dati utente per sessioni future.
* **Feedback Visivo (Micro-Interazioni):** Animazioni CSS e classi dinamiche (`.item-added`) per un feedback immediato all'utente.

## 🏗️ Architettura del Codice

L'applicazione è interamente costruita con Vanilla JavaScript (ES6+), strutturata in moduli per garantire chiarezza e scalabilità:

* [cite_start]**`main.js`**: Entry point, inizializzazione, gestione di tutti gli eventi principali (ricerca, carrello, submit form)[cite: 18].
* [cite_start]**`state.js`**: Gestione dello stato del carrello, logica CRUD, calcolo totali (`getTotals`) e persistenza dati (`localStorage`)[cite: 19].
* [cite_start]**`ui.js`**: Interamente dedicato al rendering del DOM, gestisce la visualizzazione della lista, del carrello e degli aggiornamenti totali[cite: 21, 22].
* [cite_start]**`api.js`**: Contiene l'archivio statico dei prodotti predefiniti (finta API)[cite: 25].
* [cite_start]**`utils.js`**: Funzioni di utilità riutilizzabili (`formatPrice`, `debounce`)[cite: 26].

## 🔧 Avvio Locale

Questo progetto usa ES Modules, quindi è richiesto un server locale per evitare errori CORS.

1.  Clona il repository.
2.  Avvia un server (richiede Python 3):
    ```bash
    python3 -m http.server 8080
    ```
3.  Apri `http://localhost:8080/` nel tuo browser.

## 🧠 Lezioni Apprese

La lezione più importante è stata la corretta separazione delle responsabilità tra i moduli (`state.js` vs `ui.js`). [cite_start]Garantire che la logica di business (stato) sia separata dal rendering (UI) ha reso l'applicazione estremamente facile da debuggare e scalabile, dimostrando l'uso di principi di architettura software pulita in un contesto Vanilla JS[cite: 42, 43].
