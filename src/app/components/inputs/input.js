import React , {useState} from 'react'


export default function input(props){

  const [error, setError] = useState(false)
  const updateInput = (e) => {
    setError(!props.match.test(e.target.value))
    props.setForm({[props.id]:e.target.value})
  }
  return(
    <input
      disabled={props.disabled}
      value={props.form[props.id] != null && typeof props.form[props.id] != 'undefined'? props.form[props.id] : props.defaultValue ||''}
      type={props.type || 'text'}
      className={props.className + (error ? ' error ' : '')}
      placeholder={props.label}
      onChange={updateInput}
    />
  )
}
