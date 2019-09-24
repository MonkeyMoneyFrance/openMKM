import React , {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function input(props){
  const [error, setError] = useState(false)
  const updateInput = (e) => {
    setError(!props.match.test(e))
    props.setForm({[props.id]:e})
  }
  return(
    <DatePicker
      selected={props.form[props.id] != null && typeof props.form[props.id] != 'undefined'? props.form[props.id] : props.defaultValue ||''}
      onChange={updateInput}
      disabled={props.disabled}
      dateFormat={props.dateFormat}
      placeholderText={props.label}
      className={props.className + (error ? ' error ' : '')}
    />
  )
}
