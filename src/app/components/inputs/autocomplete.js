import React , {useState,useEffect} from 'react'
import {getMatching} from '../../utils/API'
import styled from 'styled-components'
import AutoSuggest from 'react-autosuggest'


const SuggestContainer = styled.div`
  .react-autosuggest__container {
  position: relative;
  }

  .react-autosuggest__input {
  height: 30px;
  }

  .react-autosuggest__input--focused {
  outline: none;
  }

  .react-autosuggest__input--open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
  display: none;
  }

  .react-autosuggest__suggestions-container--open {
  display: block;
  position: absolute;
  top: 30px;
  border: 1px solid #aaa;
  background-color: #fff;
  font-size: 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 2;
  }

  .react-autosuggest__suggestions-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  }

  .react-autosuggest__suggestion {
  cursor: pointer;
  padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
  background-color: #ddd;
  }
`

export default function AutoComplete(props){
  const [suggestions,setSuggestions] = useState([])
  const [value, setValue] = useState(props.displayed.reduce((arr,key)=> [...arr,props.form[key] || (props.defaultValue || {})[key]] ,[]).join('') ||'')
  const onChange = (e , {newValue}) => setValue(newValue)
  const getSuggestions = async(value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    if (inputLength < 3) return []
    let results = await getMatching(inputValue,props.collection)
    return results || []
  };
  const getSuggestionValue = suggestion => props.displayed.reduce((arr,key)=> [...arr,suggestion[key]||key] ,[]).join('');
  const clearSuggestion = () => setSuggestions([])
  const fetchRequestedSuggestions = async ({ value }) => setSuggestions(await getSuggestions(value))
  const onSuggestionSelected = (event, { suggestion}) => props.setForm(Object.keys(suggestion).reduce((json,key) => {
    let index = props.returned.findIndex(m => (new RegExp(key + ':(.+)', "gi")).test(m))
    return index > -1 ? {...json,[props.returned[index].split(':')[1]]:suggestion[props.returned[index].split(':')[0]]} : json
  },{}))

  const renderSuggestion = (suggestion) => (
    <div>
      {props.displayed.reduce((arr,key)=> [...arr,suggestion[key]||key] ,[]).join('')}
    </div>
  );
  return (
    <SuggestContainer>
      <AutoSuggest
        inputProps = {{
          placeholder: props.label,
          disabled:props.disabled ||false,
          value : value,
          onChange: onChange
        }}
        suggestions={suggestions}
        onSuggestionsFetchRequested={fetchRequestedSuggestions}
        onSuggestionsClearRequested={clearSuggestion}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={onSuggestionSelected}
        renderSuggestion={renderSuggestion}
      />
  </SuggestContainer>
  )
}
