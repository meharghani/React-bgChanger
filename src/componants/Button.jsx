import React from 'react'

const Button = ({children,bgColor, ...props}) => {

  return (
    <button className="btn text-white text-lg" style={{backgroundColor:bgColor}} {...props} >{children}</button>
  )
}

export default Button
