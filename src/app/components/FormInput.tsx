import React from 'react'

type InputProps ={
    type: string
    placeholder?: string 
    className?: string 
}
export const FormInput = (props:InputProps) => {
  return (
    <div>        
        <input className={props.className} type={props.type} placeholder={props.placeholder} />
    </div>
  )
}
