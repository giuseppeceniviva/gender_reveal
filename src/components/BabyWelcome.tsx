import { motion } from 'framer-motion';
import babyImage from '../assets/baby_png.png';
import { BackgroundPattern } from './BackgroundPattern';
import './BabyWelcome.css';

export default function BabyWelcome() {
  return (
    <div className="baby-welcome">
      <BackgroundPattern type="hearts" />
      
      <motion.div 
        className="baby-welcome-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          bounce: 0.4
        }}
      >
        <motion.img 
          src={babyImage} 
          alt="Baby Giorgia" 
          className="baby-image"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.3,
            duration: 0.6,
            type: "spring"
          }}
        />
        
        <motion.h1 
          className="baby-message"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.6,
            duration: 0.6
          }}
        >
          Ciao Giorgia,<br />
          mamma e papà ti aspettano!
        </motion.h1>
      </motion.div>
    </div>
  );
}
