import React from 'react'

export default function submit(props){
  const onClick = (e) => {
    e.preventDefault()
    props.onSubmit(props.form)
  }
  return(
    <button
      type={'submit'}
      className={props.className}
      onClick={onClick}
    >{props.label}
    </button>
  )
}
