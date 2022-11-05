import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'
import words from "./wordList.json"


function getWord(){
  return words[Math.floor(Math.random() * words.length)]
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6 
  
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))



  const addGuessedLetter = useCallback((letter:string) => {
   
    if (guessedLetters.includes(letter)) return

    if(isLoser || isWinner) return

    setGuessedLetters(currLetters => [...currLetters, letter])

  }, [guessedLetters, isLoser, isWinner])
  

  useEffect(()=> {

    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])
 
 
  useEffect(()=> {

    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())

    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [isLoser, isWinner])



  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}>
      <div style={{fontSize: "2rem", textAlign: "center"}}>
        {isWinner && "Winner! Press Enter to play again"}
        {isLoser && "You Lost! Press Enter and try again"}
      </div>

        <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>
        <div style={{alignSelf: "stretch"}}>
        <Keyboard  
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} 
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        Loser={isLoser}
        Winner={isWinner}/>
        </div>

    </div>
  )
}

export default App
