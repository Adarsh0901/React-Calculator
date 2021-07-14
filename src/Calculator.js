import React, { useState } from 'react';
import './Calculator.css';

const Calculator =()=>{
    const [result, setResult] = useState("");

    const clickHandler = (e) =>{
        setResult(result.concat(e.target.value))
    }

    const clearHandler =()=>{
        setResult('');
    }

    const backspaceHandler=()=>{
        setResult(result.slice(0,-1));
    }

    const resultHandler =()=>{
        setResult(eval(result).toString());
    }
    return(
        <>
            <div className="mainpage">
                <div className="Screen">
                    <input type="text" value={result} />
                </div>
                <div className="keypad">
                    <button onClick={clearHandler} id="clear">Clear</button>
                    <button onClick={backspaceHandler}>C</button>
                    <button onClick={clickHandler} className="Yellow" value="/">&divide;</button>
                    <button onClick={clickHandler} value="7">7</button>
                    <button onClick={clickHandler} value="8">8</button>
                    <button onClick={clickHandler} value="9">9</button>
                    <button onClick={clickHandler} className="Yellow" value="*">x</button>
                    <button onClick={clickHandler} value="4">4</button>
                    <button onClick={clickHandler} value="5">5</button>
                    <button onClick={clickHandler} value="6">6</button>
                    <button onClick={clickHandler} className="Yellow" value="+">+</button>
                    <button onClick={clickHandler} value="1">1</button>
                    <button onClick={clickHandler} value="2">2</button>
                    <button onClick={clickHandler} value="3">3</button>
                    <button onClick={clickHandler} className="Yellow" value="-">-</button>
                    <button onClick={clickHandler} id="zero" value="0">0</button>
                    <button onClick={clickHandler} value=".">.</button>
                    <button onClick={resultHandler} className="Yellow" id="result">=</button>
                </div>
            </div>
        </>
    )
}

export default Calculator;