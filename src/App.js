import "./App.css";

import { QuizContext } from "./helpers/Context";
import { useState } from "react";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Final from "./components/Final";

function App() {
  const [asama, setAsama] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ asama, setAsama, score, setScore }}>
      <div className="App">
        {asama === 0 && <Main />}
        {asama === 1 && <Quiz />}
        {asama === 2 && <Final />}
      </div>
    </QuizContext.Provider>
  );
}

export default App;
