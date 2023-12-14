import React, { createContext, useCallback, useState } from 'react'
import Menu from './components/Menu';
import QuizCard from './components/QuizCard';
import FinishCard from './components/FinishCard';
let globalCount = 0;

export const MainContext = createContext();

function QuizApp() {

  const [currentState, setCurrentState] = useState("menu");
  return (<div>
    <MainContext.Provider value={{ currentState, setCurrentState }}>
      {currentState === "menu" && <Menu />}
      {currentState === "quiz" && <QuizCard/>}
      {currentState === "finish" && <FinishCard/>}
    </MainContext.Provider>
  </div>
  )
}

export default QuizApp