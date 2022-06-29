import React, { useState } from 'react';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [object, setObject] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = object;

  const clickHandle = (event) => {
    setObject((state) => calculate(state, event.target.value));
  };

  return (

    <div className="calc-body">
      <div className="calc-screen">
        <input type="text" id="calc-operation" value={(total || '') + (operation || '') + (next || '')} disabled />
      </div>
      <div className="calc-button-row">
        <input type="button" value="AC" onClick={clickHandle} />
        <input type="button" value="+/-" onClick={clickHandle} />
        <input type="button" value="%" onClick={clickHandle} />
        <input type="button" value="÷" onClick={clickHandle} className="opt" />
        <input type="button" value="7" onClick={clickHandle} />
        <input type="button" value="8" onClick={clickHandle} />
        <input type="button" value="9" onClick={clickHandle} />
        <input type="button" value="x" onClick={clickHandle} className="opt" />
        <input type="button" value="4" onClick={clickHandle} />
        <input type="button" value="5" onClick={clickHandle} />
        <input type="button" value="6" onClick={clickHandle} />
        <input type="button" value="-" onClick={clickHandle} className="opt" />
        <input type="button" value="1" onClick={clickHandle} />
        <input type="button" value="2" onClick={clickHandle} />
        <input type="button" value="3" onClick={clickHandle} />
        <input type="button" value="+" onClick={clickHandle} className="opt" />
        <input type="button" value="0" onClick={clickHandle} className="zeroBtn" />
        <input type="button" value="." onClick={clickHandle} />
        <input type="button" value="=" onClick={clickHandle} className="opt equal" />
      </div>
    </div>
  );
};

export default Calculator;
