import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { Message } from '../types/message';
import { BackgroundPattern } from './BackgroundPattern';
import { RSVPForm } from './RSVPForm';
import './MessageScreen.css';

interface MessageScreenProps {
  message: Message;
  currentIndex: number;
  totalMessages: number;
  onNext: () => void;
  isLast: boolean;
}

type PatternType = 'hearts' | 'stars' | 'balloons' | 'neutral';

export const MessageScreen = ({
  message,
  currentIndex,
  totalMessages,
  onNext,
  isLast
}: MessageScreenProps) => {
  
  // Effetto confetti sull'ultimo messaggio
  useEffect(() => {
    if (isLast) {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Confetti dal lato sinistro
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#3b82f6', '#ec4899', '#ffffff']
        });
        
        // Confetti dal lato destro
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#3b82f6', '#ec4899', '#ffffff']
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isLast]);

  // Animazioni per i diversi messaggi
  const getAnimationVariant = () => {
    // Messaggi "lui" (indice 1) - slide da sinistra con blue
    if (currentIndex === 1) {
      return {
        initial: { x: -100, opacity: 0, scale: 0.9 },
        animate: { x: 0, opacity: 1, scale: 1 },
        exit: { x: 100, opacity: 0, scale: 0.9 },
        transition: { duration: 0.5 }
      };
    }
    
    // Messaggi "lei" (indice 2) - slide da destra con pink
    if (currentIndex === 2) {
      return {
        initial: { x: 100, opacity: 0, scale: 0.9 },
        animate: { x: 0, opacity: 1, scale: 1 },
        exit: { x: -100, opacity: 0, scale: 0.9 },
        transition: { duration: 0.5 }
      };
    }
    
    // Ultimo messaggio - scale up con bounce
    if (isLast) {
      return {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 },
        transition: { type: "spring" as const, stiffness: 200, damping: 15 }
      };
    }
    
    // Default - fade con leggero scale
    return {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.5 }
    };
  };

  const animationVariant = getAnimationVariant();

  // Determina il tipo di pattern in base al messaggio
  const getPatternType = (): PatternType => {
    if (currentIndex === 0) return 'hearts'; // Primo messaggio
    if (currentIndex === 1) return 'hearts'; // "Sarà lui?"
    if (currentIndex === 2) return 'hearts'; // "O sarà lei?"
    if (currentIndex === 3) return 'stars'; // "Mmm... difficile dirlo!"
    if (currentIndex === 4) return 'stars'; // "Ma una cosa è certa"
    if (currentIndex === 5) return 'hearts'; // "Lo scopriremo insieme"
    if (currentIndex === 6) return 'stars'; // Data evento
    if (currentIndex === 7) return 'balloons'; // "Vi aspettiamo"
    if (currentIndex === 8) return 'balloons'; // "E tu ci sarai?"
    if (currentIndex === totalMessages - 1) return 'stars'; // Form step - stelle
    return 'neutral';
  };

  const patternType = getPatternType();

  return (
    <div
      className={`message-screen ${isLast ? 'has-form' : ''}`}
      style={{
        backgroundColor: message.backgroundColor,
        color: message.textColor
      }}
      role="main"
      aria-live="polite"
    >
      {patternType !== 'neutral' && <BackgroundPattern type={patternType} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="message-content"
          initial={animationVariant.initial}
          animate={animationVariant.animate}
          exit={animationVariant.exit}
          transition={animationVariant.transition}
        >
          <motion.p 
            className="message-text" 
            aria-label={`Messaggio ${currentIndex + 1} di ${totalMessages}: ${message.text}`}
            style={{
              fontFamily: message.fontFamily ? `"${message.fontFamily}", sans-serif` : undefined,
              fontWeight: message.fontWeight || 700
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {message.text}
          </motion.p>
          
          {/* Mostra la description se presente */}
          {message.description && (
            <motion.p 
              className="message-description" 
              style={{
                fontFamily: message.fontFamily ? `"${message.fontFamily}", sans-serif` : undefined
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {message.description}
            </motion.p>
          )}
          
          {/* Mostra il form sullo step 10 (ultimo) */}
          {isLast && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <RSVPForm 
                backgroundColor={message.backgroundColor}
                textColor={message.textColor}
              />
            </motion.div>
          )}
          
          <motion.div 
            className="message-footer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {!isLast && (
              <motion.button
                onClick={onNext}
                className="next-button"
                aria-label="Passa al messaggio successivo"
                style={{
                  backgroundColor: message.textColor,
                  color: message.backgroundColor
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                Avanti
                <span aria-hidden="true"> →</span>
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
