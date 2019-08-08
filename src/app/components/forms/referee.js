import React , { useState, useEffect } from 'react';
import LicenseInput from '../inputs/licenseInput'
import {connect} from 'react-redux'


function Referee(props) {

  const [refPresent, setPresent] = useState(false)
  const setValue = (id,value) => {
    const newJson = {refPresent,[id]:value}
    props.setData(props.id,newJson)
  }
  const onSwitch = (e) => {
    setPresent(!refPresent)
    props.setData(props.id,{refPresent})
  }
  useEffect(() => setPresent(props.refPresent||false),[])
  return (
    <div style={{flex:1}}>
      <div className={"container"}>
        <div>
          <input
            type="checkbox"
            id="refPresent"
            name="refPresent"
            checked={refPresent}
            onChange={onSwitch}
          />
          <label htmlFor="refPresent">Observation de la rencontre</label>
        </div>
      </div>
      <div className={"container"}>
        <div className='p2' >Fait par :</div>
        <div className={"container"} >
          <LicenseInput
            id = {"refId"}
            defautValue={props.refereeId}
            setValue={setValue}
          />
          <LicenseInput
            id = {"refLicence"}
            setValue={setValue}
          />
        </div>
      </div>
    </div>
  )
}


export default Referee;
