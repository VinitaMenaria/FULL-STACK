import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
 <button onClick={props.incrementCount}>Click Me</button>
 </div>
  )
}

export default Button
