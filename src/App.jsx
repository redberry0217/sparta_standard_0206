import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { addNumber } from "./redux/modules/calculator";
import { subtractNumber } from "./redux/modules/calculator";

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const resultNum = useSelector((state) => state.calculator.number);

  const addBtnHandler = () => {
    dispatch(addNumber(number));
    setNumber(0);
  };

  const strBtnHandler = () => {
    dispatch(subtractNumber(number));
    setNumber(0);
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        만큼을 <button onClick={addBtnHandler}>더할게요</button>{" "}
        <button onClick={strBtnHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{resultNum}</p>
      </div>
    </div>
  );
}

export default App;
