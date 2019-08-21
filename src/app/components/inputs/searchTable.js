import React , {useState} from 'react'
import {decodeParams,encodeParams} from '../../functions'
import deleteIcon from '../../assets/delete.svg'
import styled from 'styled-components'
import SVG from 'react-inlinesvg';

const Icon = styled.div`
  position: absolute;
  display: ${props => props.display ? 'block' : 'none'};
  top: 0px;
  right: 3px;
  width: 16px;
  height: 16px;
  cursor:pointer;
  fill:${props => props.selected ? 'black' : 'gray'};
  transition: all 200ms ease-out
  &:hover {
    fill:black;
  }
`
const Input = styled.input`
  padding:5px;
  padding-right: 16px;
  box-sizing: border-box;
  height:40px;
  font-size: 14px;
`

const Button = styled.button`
  height: 100%;
  font-size: 14px;
  cursor:pointer;
`
const Form = styled.form`
  height:40px
`
export default function SearchTable(props){
  const [search,setValue] = useState('')
  const params = decodeParams(props.location.search)
  const changeSearch = (e) => {
    setValue(e.target.value)
  }
  const updateSearch = (e) => {
    e.preventDefault()
    if (!search) return
    let newParams = {...params,search}
    props.history.push(props.location.pathname+encodeParams(newParams))

  }
  const resetSearch = () => {
    let newParams = {...params,search}
    delete newParams.search
    props.history.push(props.location.pathname+encodeParams(newParams))
  }
  return(
    <Form onSubmit={updateSearch}>
      <span style={{position: 'relative'}}>
        <Input
          defaultValue={params.search}
          placeholder={props.placeholder}
          onChange={changeSearch}
        />
      <Icon display={params.search || search} onClick={resetSearch}><SVG src={deleteIcon} /></Icon>
      </span>
      <Button type='submit'>Confirmer</Button>
    </Form>
  )
}
