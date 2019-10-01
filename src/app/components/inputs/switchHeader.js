import React , {useState,useEffect} from 'react'
import styled from 'styled-components'

const Button = styled.div`
  background-color : ${props => props.selected ? 'gray' : 'transparent'};
`
const ButtonSwitch = ({onSwitchHeader,id,value,label,idSelected = 'default'}) => {
  const buttonClicked = () => onSwitchHeader({[id]:value})
  return (
    <Button selected={idSelected == value}  onClick={buttonClicked}>{label}</Button>
  )
}

export default function switchHeader(props){

  const {states,label,id,propsForm,setFormProps} = props
  const [idSelected , setSelected] = useState('default')
  useEffect(()=>{
    if (propsForm[id]) return
    setFormProps({[id]:propsForm[id] || "default"})
  })
  const onSwitchHeader = (switchHeader) => setFormProps(switchHeader)

  return(
    <>
    <label>{label}</label>
    {(states||[]).map((e,i) => <ButtonSwitch
        onSwitchHeader={onSwitchHeader}
        idSelected = {propsForm[id]}
        key={i}
        id={id}
        value={e.split(':')[0]}
        label={e.split(':')[1]}
      />)}
    </>

  )
}
