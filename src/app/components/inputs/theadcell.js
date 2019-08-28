import React from 'react'
import {decodeParams,encodeParams} from '../../functions'
import sortDown from '../../assets/sort-down.svg'
import sortUp from '../../assets/sort-up.svg'
import styled from 'styled-components'
import SVG from 'react-inlinesvg';

const Icon = styled.div`
  cursor: pointer;
  width:12px;
  fill:${props => props.selected ? 'black' : 'gray'};
  transition: all 200ms ease-out
  &:hover {
    fill:black;
  }
`
const Td = styled.td`
  cursor:pointer;
  &:hover {
    color:black;
  }
  transition: all 200ms ease-out
  color:${props => props.selected ? 'black' : 'gray'};
`
const Label = styled.div`
  display: inline-flex;
`

function theadcell(props){
  const params = decodeParams(props.location.search)

  const selected = params.orderBy == props.id
  const order = params.order == 1
  const updateSearchUp = () => {
    let newParams = {...params,orderBy:props.id,order:1}
    props.history.push(props.location.pathname+encodeParams(newParams))
  }
  const updateSearchDown = () => {
    let newParams = {...params,orderBy:props.id,order:-1}
    props.history.push(props.location.pathname+encodeParams(newParams))
  }
  const toggleUpdate = () => {

    let newParams = {...params,orderBy:props.id,order:order ? -1 : 1}
    props.history.push(props.location.pathname+encodeParams(newParams))

  }
  return(
    <Td selected={selected}>
      <Label >
      <Icon selected={selected && order} onClick={updateSearchUp}><SVG src={sortUp} /></Icon>
      <Icon selected={selected && !order} onClick={updateSearchDown}><SVG src={sortDown} /></Icon>
      <span onClick={toggleUpdate}>{props.label}</span>
      </Label>
    </Td>
  )
}

export default theadcell;
