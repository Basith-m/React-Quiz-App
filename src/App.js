import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Win from './pages/Win';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState()
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0)

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername)
  }

  const handleCheckAnswer = (correctAnswer, wrongAnswer) => {
    setCorrectAnswerCount(correctAnswer)
    setWrongAnswerCount(wrongAnswer)
  }


  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home onUsernameChange={handleUsernameChange} />} 
        />
        <Route
          path='/quiz'
          element={<Quiz checkAnswer={handleCheckAnswer} />}
        />
        <Route
          path='/win'
          element={<Win username={username}
            correctAnswerCount={correctAnswerCount}
            wrongAnswerCount={wrongAnswerCount} />}
        />
      </Routes>
    </>
  );
}

export default App;