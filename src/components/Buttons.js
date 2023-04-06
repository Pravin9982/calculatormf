import React from 'react'
import './buttons.css'

function Buttons({ handleClick }) {
  return (
    <div>
        <button className='button' onClick={() => handleClick('7')}>7</button>
        <button className='button' onClick={() => handleClick('8')}>8</button>
        <button className='button' onClick={() => handleClick('9')}>9</button>
        <button className='button' onClick={() => handleClick('+')}>+</button>
        <br/>
        <button className='button' onClick={() => handleClick('4')}>4</button>
        <button className='button' onClick={() => handleClick('5')}>5</button>
        <button className='button' onClick={() => handleClick('6')}>6</button>
        <button className='button' onClick={() => handleClick('-')}>-</button>
        <br/>
        <button className='button' onClick={() => handleClick('1')}>1</button>
        <button className='button' onClick={() => handleClick('2')}>2</button>
        <button className='button' onClick={() => handleClick('3')}>3</button>
        <button className='button' onClick={() => handleClick('*')}>*</button>
        <br/>
        <button className='button' onClick={() => handleClick('0')}>0</button>
        <button className='button' onClick={() => handleClick('/')}>/</button>
        <button className='button' onClick={() => handleClick('C')}>C</button>
        <button className='button' onClick={() => handleClick('=')}>=</button>
    </div>
        )
}

export default Buttons


// import React from 'react'

// function Buttons({handleNumberClick, handleOperatorClick, handleEqualsClick, handleClearClick}) {
//   return (
//     <div>
//         <button onClick={()=> handleNumberClick(7)}>7</button>
//         <button onClick={()=> handleNumberClick(8)}>8</button>
//         <button onClick={()=> handleNumberClick(9)}>9</button>
//         <button onClick={() => handleOperatorClick('+')}>+</button>
//         <br/>
//         <button onClick={()=> handleNumberClick(4)}>4</button>
//         <button onClick={()=> handleNumberClick(5)}>5</button>
//         <button onClick={()=> handleNumberClick(6)}>6</button>
//         <button onClick={() => handleOperatorClick('-')}>-</button>
//         <br/>
//         <button onClick={()=> handleNumberClick(1)}>1</button>
//         <button onClick={()=> handleNumberClick(2)}>2</button>
//         <button onClick={()=> handleNumberClick(3)}>3</button>
//         <button onClick={() => handleOperatorClick('*')}>*</button>
//         <br/>
//         <button onClick={() => handleNumberClick(0)}>0</button>
//         <button onClick={() => handleOperatorClick('/')}>/</button>
//         <button onClick={handleClearClick}>C</button>
//         <button onClick={handleEqualsClick}>=</button>
//     </div>
//   )
// }

// export default Buttons