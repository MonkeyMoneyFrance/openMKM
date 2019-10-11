import React , {useState,useEffect} from 'react'
import styled from 'styled-components'
import sortUp from '../../assets/sort-up.svg'
import SVG from 'react-inlinesvg';
const Main = styled.div`
  cursor:${p => p.bool ? 'pointer' : 'default'};
  &:hover {
    background-color:${p => p.bool ? "#F7F7F7" : "transparent"};
  }
  margin:1em 0em;
  transition : all 200ms ease-in;
  padding : ${p => p.bool ? "0.5em 1em 0.5em 0" : "0"};
  box-shadow: ${p => p.bool ? "0px 5px 5px 0px rgba(204,204,204,0.56)" : 'none'};
  align-items:center;
  justify-content:space-between;
  width:100%

`
const Icon = styled.div`
  cursor: pointer;
  width:12px;
  transform:${props => props.selected ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: all 200ms ease-out;
`
const Button = styled.div`
  &:hover {
    background-color : #cccccc;
    border : 1px solid #333333;
  };
  border-radius : 5px;
  padding: 0.5em;
  border : 1px solid #F2F2F2;
  cursor : pointer;
  transition : all 200ms ease-in;
  background-color : ${props => props.selected ? '#F7F7F7' : 'transparent'};
`
const ButtonSwitch = ({onSwitchHeader,id,value,label,idSelected = 'default'}) => {
  const buttonClicked = () => onSwitchHeader({[id]:value})
  return (
    <Button selected={idSelected == value}  onClick={buttonClicked}>{label}</Button>
  )
}
const IconSwitch = ({onSwitchHeader,id,value,label,idSelected = 'default'}) => {
  const buttonClicked = () => onSwitchHeader({[id]:idSelected == 'default' ? 'show' :  'default'})
  return (
    <Icon selected={idSelected !== 'default'}  onClick={buttonClicked}>
      <SVG src={sortUp} />
    </Icon>
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
  const clickOnRow = () => states ? void 0 : onSwitchHeader({[id]:propsForm[id] == 'default' ? 'show' :  'default'})
  return(
    <Main
      className={'container'}
      bool = {!states}
      onClick={clickOnRow}
      >
    <label>{label}</label>
    {states ? <div className='container' >{(states||[]).map((e,i) =>  <ButtonSwitch
        onSwitchHeader={onSwitchHeader}
        idSelected = {propsForm[id]}
        key={i}
        id={id}
        value={e.split(':')[0]}
        label={e.split(':')[1]}
      />)}</div>
    :
    <IconSwitch
      onSwitchHeader={onSwitchHeader}
      idSelected = {propsForm[id]}
      id={id}
      />
    }
  </Main>
  )
}
