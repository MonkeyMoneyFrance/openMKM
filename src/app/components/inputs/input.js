import React , {useState} from 'react'


export default function input(props){
  const [error, setError] = useState(false)
  const [value,setValue] = useState(props.form[props.id] != null && typeof props.form[props.id] != 'undefined'? props.form[props.id] : props.defaultValue ||'')
  const updateInput = (e) => {
    props.match ? setError(!props.match.test(e.target.value)) : void 0
    props.setForm({[props.id]:e.target.value})
  }
  const onBlur = () => props.onBlur ? props.onBlur() : void 0
  return(
    <div>
      <label>{props.label}</label>
      <input
        disabled={props.disabled}
        value={props.form[props.id] != null && typeof props.form[props.id] != 'undefined'? props.form[props.id] : props.defaultValue ||''}
        type={props.type || 'text'}
        className={props.className + (error ? ' error ' : '')}
        onChange={updateInput}
        onBlur={onBlur}
      />
    </div>
  )
}
