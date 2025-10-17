# Ge## ✨ Caratteristiche

- 🎨 **Design a schermo intero**: Ogni messaggio occupa l'intero viewport
- 🎬 **Progressione cinematografica**: Storytelling emozionale con crescendo fino alla rivelazione finale
- ✍️ **Font dolci e moderni**:
  - **Quicksand** — tondeggiante, pulito e accogliente (per testi informativi)
  - **Poppins** — moderno, geometrico ma amichevole (per messaggi chiave)
  - **Nunito** — soft e tenero, ideale per un tono intimo (per momenti emozionali)
- 🎨 **Colori accessibili**: Palette conforme agli standard WCAG 2.1 AA (contrasto minimo 4.5:1)Reveal App

Un'applicazione React + TypeScript + Vite ottimizzata per dispositivi mobili che mostra una serie di messaggi a schermo intero con sfondi colorati e navigazione accessibile.

## ✨ Caratteristiche

- 🎨 **Design a schermo intero**: Ogni messaggio occupa l'intero viewport
- � **Progressione cinematografica**: Storytelling emozionale con crescendo fino alla rivelazione finale
- �🎨 **Colori accessibili**: Palette conforme agli standard WCAG 2.1 AA (contrasto minimo 4.5:1)
- ✨ **Animazioni fluide**: Transizioni personalizzate con Framer Motion per ogni messaggio
  - Slide da sinistra per "Sarà lui?" 💙
  - Slide da destra per "O sarà lei?" 💖
  - Scale bounce per il messaggio finale
  - Fade smooth per gli altri messaggi
- 🎉 **Effetto confetti finale**: Celebrazione automatica con canvas-confetti sull'ultimo messaggio
- 🎨 **Pattern decorativi animati**: Emoji che fluttuano in background (cuori, stelle, palloncini)
- 📱 **Mobile-first**: Ottimizzato per dispositivi touch con target area di 56px+
- ♿ **Accessibilità completa WCAG 2.1 AA**: 
  - Supporto screen reader con attributi ARIA
  - Navigazione da tastiera (frecce destra e spazio)
  - Focus visibile per utenti keyboard-only
  - Supporto per `prefers-reduced-motion` (disabilita animazioni)
  - Contrasto colori sempre superiore a 4.5:1
- 🎯 **Touch-friendly**: Pulsanti grandi e facili da premere

## 🚀 Avvio rapido

### Installazione dipendenze
```bash
npm install
```

### Avvio server di sviluppo
```bash
npm run dev
```

### Build per produzione
```bash
npm run build
```

### Preview build di produzione
```bash
npm run preview
```

## 📁 Struttura del progetto

```
src/
├── components/
│   ├── MessageScreen.tsx       # Componente principale con animazioni Framer Motion
│   ├── MessageScreen.css       # Stili responsive e accessibili
│   ├── BackgroundPattern.tsx   # Pattern decorativi animati (emoji fluttuanti)
│   └── BackgroundPattern.css   # Stili per i pattern di sfondo
├── data/
│   └── messages.ts             # Array di messaggi con progressione storytelling
├── types/
│   └── message.ts              # Type definitions TypeScript
├── App.tsx                     # Componente root con gestione navigazione
├── App.css                     # Stili dell'app container
├── index.css                   # Reset CSS e stili globali ottimizzati per mobile
└── main.tsx                    # Entry point dell'applicazione
```

## � Progressione narrativa

L'applicazione presenta 9 messaggi con una progressione emozionale studiata:

1. **"C'è una piccola sorpresa in arrivo… 👶"** - Introduzione misteriosa
2. **"Sarà lui? 💙"** - Primo indizio (slide da sinistra)
3. **"O sarà lei? 💖"** - Secondo indizio (slide da destra)
4. **"Mmm… difficile dirlo! 🤔"** - Suspense
5. **"Ma una cosa è certa… 🌟"** - Transizione al climax
6. **"Lo scopriremo insieme! 🫶"** - Anticipo dell'evento
7. **"Sabato 25 ottobre • ore 20:00 📅"** - Informazioni pratiche
8. **"Vi aspettiamo per scoprirlo insieme! 🎉💙💖"** - Invito caloroso
9. **"E tu ci sarai? 😉"** - Call to action finale con confetti 🎊

## �🎨 Personalizzazione messaggi

Per modificare i messaggi, edita il file `src/data/messages.ts`:

```typescript
export const messages: Message[] = [
  {
    id: 1,
    text: "Il tuo messaggio",
    backgroundColor: "#1e3a8a", // Colore di sfondo
    textColor: "#ffffff",        // Colore del testo
    fontFamily: 'Poppins',       // Font: 'Quicksand' | 'Poppins' | 'Nunito'
    fontWeight: 700              // Peso: 400, 500, 600, 700, 800
  },
  // Aggiungi altri messaggi...
];
```

### Font disponibili
- **Quicksand** (400-700): Tondeggiante, pulito e accogliente - perfetto per testi informativi
- **Poppins** (400-800): Moderno, geometrico ma amichevole - ideale per messaggi chiave e pulsanti
- **Nunito** (400-800): Soft e tenero - ottimo per toni intimi ed emozionali
- Se non specificato, usa il font di sistema

### Pesi consigliati
- 400: Regular (testo corpo)
- 600: SemiBold (enfasi media)
- 700: Bold (titoli standard)
- 800: ExtraBold (massimo impatto visivo)

### ⚠️ Nota importante sull'accessibilità
Assicurati che i colori scelti rispettino un contrasto minimo di **4.5:1** per testo normale secondo WCAG 2.1 AA. 
Puoi verificare il contrasto usando tool come:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

## ✨ Personalizzazione animazioni

Le animazioni sono configurate in `MessageScreen.tsx`:

### Tipi di transizione
- **Slide da sinistra**: Messaggio indice 1 ("Sarà lui?")
- **Slide da destra**: Messaggio indice 2 ("O sarà lei?")
- **Bounce scale**: Ultimo messaggio (con confetti)
- **Fade default**: Tutti gli altri messaggi

### Pattern decorativi
Modifica `getPatternType()` per cambiare quando appaiono:
- `hearts` 💕 - Cuoricini fluttuanti
- `stars` ⭐ - Stelle scintillanti
- `balloons` 🎈 - Palloncini festosi
- `neutral` - Nessun pattern

### Confetti
L'effetto confetti si attiva automaticamente sull'ultimo messaggio per 3 secondi.
Colori: blu (#3b82f6), rosa (#ec4899), bianco (#ffffff)

## ♿ Accessibilità WCAG 2.1

L'applicazione è conforme agli standard WCAG 2.1 Level AA:

- **1.4.3 Contrast (Minimum)**: Tutti i colori hanno un contrasto minimo di 4.5:1
- **2.1.1 Keyboard**: Navigazione completa con tastiera (Freccia destra, Spazio)
- **2.4.7 Focus Visible**: Indicatore di focus chiaramente visibile
- **2.5.5 Target Size**: Pulsanti con area touch minima di 56x56px
- **4.1.3 Status Messages**: Uso appropriato di `aria-live` e `role="status"`
- **Prefers Reduced Motion**: Disabilita animazioni per utenti sensibili al movimento

## 🔧 Tecnologie utilizzate

- **React 18** - Libreria UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-veloce con Rolldown
- **Framer Motion** - Animazioni fluide e performanti
- **Canvas Confetti** - Effetto confetti celebrativo
- **CSS3** - Styling moderno con media queries e CSS custom properties

## 📱 Ottimizzazioni mobile

- Viewport dinamico (`dvh`) per gestire barre di navigazione browser mobili
- Disabilitazione zoom su double-tap
- Gestione safe-area per dispositivi con notch
- Prevenzione bounce scroll su iOS
- Touch action manipulation per migliore responsività

## 🌐 Browser supportati

- Chrome/Edge (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari iOS 14+
- Chrome Android (ultime 2 versioni)

## 📄 Licenza

Questo progetto è stato creato con Vite + React + TypeScript.

---

Creato con ❤️ per momenti speciali
