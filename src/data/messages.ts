import type { Message } from '../types/message';

// Colori accessibili con contrasto conforme a WCAG 2.1 AA (minimo 4.5:1 per testo normale)
// Font dolci e moderni per un'esperienza contemporanea e accogliente
export const messages: Message[] = [
  {
    id: 1,
    text: "C'è una piccola sorpresa in arrivo… 👶",
    backgroundColor: "#f5f5f0", // Beige chiaro neutro
    textColor: "#1a1a1a",
    fontFamily: 'Nunito',
    fontWeight: 700
  },
  {
    id: 2,
    text: "Sarà lui? 💙",
    backgroundColor: "#1e40af", // Blu intenso
    textColor: "#ffffff",
    fontFamily: 'Poppins',
    fontWeight: 800
  },
  {
    id: 3,
    text: "O sarà lei? 💖",
    backgroundColor: "#be185d", // Rosa intenso
    textColor: "#ffffff",
    fontFamily: 'Poppins',
    fontWeight: 800
  },
  {
    id: 4,
    text: "Mmm… difficile dirlo! 🤔",
    backgroundColor: "#78716c", // Grigio caldo
    textColor: "#ffffff",
    fontFamily: 'Quicksand',
    fontWeight: 600
  },
  {
    id: 5,
    text: "Ma una cosa è certa… 🌟",
    backgroundColor: "#4c1d95", // Viola profondo
    textColor: "#ffffff",
    fontFamily: 'Nunito',
    fontWeight: 700
  },
  {
    id: 6,
    text: "Lo scopriremo insieme! 🫶",
    backgroundColor: "#0f766e", // Verde acqua scuro
    textColor: "#ffffff",
    fontFamily: 'Poppins',
    fontWeight: 700
  },
  {
    id: 7,
    text: "Sabato 25 ottobre • ore 20:00 📅",
    backgroundColor: "#1e3a8a", // Blu navy
    textColor: "#ffffff",
    fontFamily: 'Quicksand',
    fontWeight: 600
  },
  {
    id: 8,
    text: "Vi aspettiamo per scoprirlo insieme! 🎉💙💖",
    backgroundColor: "#db2777", // Rosa vivace
    textColor: "#ffffff",
    fontFamily: 'Nunito',
    fontWeight: 800
  },
  {
    id: 9,
    text: "E tu ci sarai? 😉",
    backgroundColor: "#065f46", // Verde smeraldo scuro
    textColor: "#ffffff",
    fontFamily: 'Poppins',
    fontWeight: 700
  }
];
