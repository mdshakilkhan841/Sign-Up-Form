import React from 'react'

const Button = (props) => {
  return (
    <div>
         <button type="button" className="bg-neutral-200 hover:bg-[#34AC26] focus:outline-none font-bold rounded-lg text-lg w-full px-5 py-2 text-center" onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default Button