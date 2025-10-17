import { useState, useEffect } from 'react'
import { MessageScreen } from './components/MessageScreen'
import { messages } from './data/messages'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // Supporto navigazione con tastiera (freccia destra/spazio)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        if (currentIndex < messages.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const currentMessage = messages[currentIndex]

  return (
    <div className="app">
      <MessageScreen
        message={currentMessage}
        currentIndex={currentIndex}
        totalMessages={messages.length}
        onNext={handleNext}
        isLast={currentIndex === messages.length - 1}
      />
    </div>
  )
}

export default App
