import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(e) {
    const key = e.key;
    if (!isNaN(key) || key === '.') {
      handleNumberClick(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      handleOperatorClick(key);
    } else if (key === 'Enter') {
      handleEqualsClick();
    } else if (key === 'Backspace') {
      handleClearClick();
    }
  }

  function calculate() {
    const values = displayValue.split(operator).map(parseFloat);
    const [firstValue, secondValue] = values;

    if (operator === '+') {
      setDisplayValue((firstValue + secondValue).toString());
    } else if (operator === '-') {
      setDisplayValue((firstValue - secondValue).toString());
    } else if (operator === '*') {
      setDisplayValue((firstValue * secondValue).toString());
    } else if (operator === '/') {
      setDisplayValue((firstValue / secondValue).toString());
    }

    setPreviousValue(null);
    setOperator(null);
  }

  function handleNumberClick(number) {
    if (displayValue === '0') {
      setDisplayValue(number.toString());
    } else if (operator !== null) {
      setDisplayValue(displayValue + number.toString());
    } else {
      setDisplayValue(parseFloat(displayValue + number.toString()).toString());
    }
  }

  function handleOperatorClick(newOperator) {
    const inputVal = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputVal);
    } else if (operator) {
      calculate();
    }

    setOperator(newOperator);
    setDisplayValue(inputVal + newOperator);
  }

  function handleEqualsClick() {
    calculate();
  }

  function handleClearClick() {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
  }

  function handleClick(buttonVal) {
    if (buttonVal === 'C') {
      handleClearClick();
    } else if (buttonVal === '=') {
      handleEqualsClick();
    } else if (buttonVal === '+' || buttonVal === '-' || buttonVal === '*' || buttonVal === '/') {
      handleOperatorClick(buttonVal);
    } else {
      handleNumberClick(buttonVal);
    }
  }

  return (
    <div>
      <a>Hello From Calculator App</a>
      <div className='calculatorbox'>
        <Display value={displayValue} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;

// import React, { useState } from 'react';
// import Display from './components/Display';
// import Buttons from './components/Buttons';
// import './calculator.css';

// function Calculator() {

//   const [displayValue, setDisplayValue] = useState('0');
//   const [previousValue, setPreviousValue] = useState(null);
//   const [operator, setOperator] = useState(null);

//   function calculate() {
//     const values = displayValue.split(operator).map(parseFloat);
//     const [firstValue, secondValue] = values;
  
//     if (operator === '+') {
//       setDisplayValue((firstValue + secondValue).toString());
//     } else if (operator === '-') {
//       setDisplayValue((firstValue - secondValue).toString());
//     } else if (operator === '*') {
//       setDisplayValue((firstValue * secondValue).toString());
//     } else if (operator === '/') {
//       setDisplayValue((firstValue / secondValue).toString());
//     }
  
//     setPreviousValue(null);
//     setOperator(null);
//   }

//   function handleNumberClick(number) {
//     if (displayValue === '0') {
//       setDisplayValue(number.toString());
//     } else if (operator !== null) {
//       setDisplayValue(displayValue + number.toString());
//     } else {
//       setDisplayValue(parseFloat(displayValue + number.toString()).toString());
//     }
//   }

//   function handleOperatorClick(newOperator) {
//     const inputVal = parseFloat(displayValue);
  
//     if (previousValue === null) {
//       setPreviousValue(inputVal);
//     } else if (operator) {
//       calculate();
//     }
  
//     setOperator(newOperator);
//     setDisplayValue(inputVal + newOperator);
//   }

//   function handleEqualsClick() {
//     calculate();
//   }

//   function handleClearClick() {
//     setDisplayValue('0');
//     setPreviousValue(null);
//     setOperator(null);
//   }

//   function handleClick(buttonVal) {
//     if (buttonVal === 'C') {
//       handleClearClick();
//     } else if (buttonVal === '=') {
//       handleEqualsClick();
//     } else if (buttonVal === '+' || buttonVal === '-' || buttonVal === '*' || buttonVal === '/') {
//       handleOperatorClick(buttonVal);
//     } else {
//       handleNumberClick(parseInt(buttonVal));
//     }
//   }

//   return (
//     <div>
//         <a>Hello From Calculator App</a>
//       <div className='calculatorbox'>
//         <Display value={displayValue} />
//         <Buttons handleClick={handleClick} />
//       </div>
      
//     </div>
//   );
// }

// export default Calculator;


