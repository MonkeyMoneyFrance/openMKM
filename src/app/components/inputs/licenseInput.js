import React , {useState,useEffect} from 'react'
import styled from 'styled-components'
import Autocomplete from 'react-autocomplete'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  let items = [
    { id : "YUIYIBJ" , label: 'Geoffroy' },
    { id : "YUIYIBA" , label: 'Nico' },
    { id : "YUIYIBG" , label: 'Xavi' },
  ]
  return {
    items
  }
}


function LicenseInput(props){
  const [value, setValue] = useState(props.value ||'')
  const onChange = (e) => setValue(e.target.value)
  const onSelect = (value) => {

    props.setValue(props.id,value)
    setValue(value)
  }
  useEffect(() => setValue(props.defaultValue),[])
  const displayedValue = (props.items.find(i => i.id == (value || props.value))||{})[props.item || 'id']

  return (
    <div >
      <Autocomplete
        inputProps = {{disabled:props.disabled ||false}}
        getItemValue={(item) => item.id}
        items={props.items}
        renderItem={(item, isHighlighted) =>
          <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label} - {item.id}
          </div>
        }
        value={displayedValue}
        onChange={onChange}
        onSelect={onSelect}
      />
    </div>
  )
}


export default connect(mapStateToProps)(LicenseInput);
