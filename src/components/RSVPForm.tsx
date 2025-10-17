import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './RSVPForm.css';

interface RSVPFormProps {
  backgroundColor: string;
  textColor: string;
}

export const RSVPForm = ({ backgroundColor, textColor }: RSVPFormProps) => {
  const [state, handleSubmit] = useForm("xldpzndq");
  const [isAttending, setIsAttending] = useState<boolean | null>(null);
  const [nome, setNome] = useState('');
  const [numeroPersone, setNumeroPersone] = useState('');

  const handlePresenzaChange = (value: string) => {
    setIsAttending(value === 'Si');
  };

  // Verifica se il form è valido
  const isFormValid = () => {
    // Presenza deve essere selezionata
    if (isAttending === null) return false;
    
    // Nome deve essere compilato
    if (!nome.trim()) return false;
    
    // Se sta partecipando, numero persone è obbligatorio
    if (isAttending === true && !numeroPersone) return false;
    
    return true;
  };

  if (state.succeeded) {
    return (
      <motion.div 
        className="success-message"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <p className="success-text">
          🎉 Grazie per la conferma! 🎉
        </p>
        <p className="success-subtext">
          Non vediamo l'ora di festeggiare insieme a te!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="rsvp-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Campo Radio: Si o No */}
      <div className="form-group">
        <fieldset className="radio-group">
          <legend className="form-label">Confermi la tua presenza? *</legend>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                name="presenza"
                value="Si"
                required
                className="radio-input"
                onChange={(e) => handlePresenzaChange(e.target.value)}
              />
              <span className="radio-text">✓ Sì, ci sarò!</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="presenza"
                value="No"
                required
                className="radio-input"
                onChange={(e) => handlePresenzaChange(e.target.value)}
              />
              <span className="radio-text">✗ No, non posso</span>
            </label>
          </div>
        </fieldset>
        <ValidationError 
          prefix="Presenza" 
          field="presenza"
          errors={state.errors}
        />
      </div>

      {/* Campo Nome e Cognome */}
      <div className="form-group">
        <label htmlFor="nome" className="form-label">
          Nome e Cognome *
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          required
          className="form-input"
          placeholder="Mario Rossi"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{
            borderColor: textColor,
            color: textColor
          }}
        />
        <ValidationError 
          prefix="Nome" 
          field="nome"
          errors={state.errors}
        />
      </div>

      {/* Campo Numero Persone - obbligatorio solo se si seleziona "Sì" */}
      <div className="form-group">
        <label htmlFor="numero_persone" className="form-label">
          In quanti siete? {isAttending && '*'}
        </label>
        <input
          id="numero_persone"
          type="number"
          name="numero_persone"
          min="1"
          max="10"
          required={isAttending === true}
          disabled={isAttending === false}
          className="form-input"
          placeholder="1"
          value={numeroPersone}
          onChange={(e) => setNumeroPersone(e.target.value)}
          style={{
            borderColor: textColor,
            color: textColor,
            opacity: isAttending === false ? 0.5 : 1
          }}
        />
        <ValidationError 
          prefix="Numero persone" 
          field="numero_persone"
          errors={state.errors}
        />
      </div>

      {/* Pulsante Submit */}
      <motion.button 
        type="submit" 
        disabled={state.submitting || !isFormValid()}
        className="submit-button"
        style={{
          backgroundColor: textColor,
          color: backgroundColor
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {state.submitting ? 'Invio in corso...' : 'Conferma presenza'}
      </motion.button>
    </motion.form>
  );
};
