import React from 'react'
import './display.css'

function Display({value}) {
  return (
    <div>
        <input className='displaybox' type='text' readOnly value={value}/>
    </div>
  )
}

export default Display