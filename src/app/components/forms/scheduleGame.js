import React , { useState, useEffect } from 'react';

function ScheduleGame(props) {

    const [value, setValue] = useState('')
    const onChange = (e) => {
      setValue(e.target.value)
    }
    const onBlur = () => {
      props.setData(props.id,{["startGame"]:value})
    }
    return (
      <div className='container'>
        <div className={"p2"}>Heure du coup d'envoi d'effectif de la recontre</div>
        <input
          value={value}
          type="time"
          min="00:00"
          max="23:59"
          required
          name="startGame"
          placeholder="Début"
          id="startGame"
          onChange={onChange}
          onBlur={onBlur}
        />

      </div>

)
}


export default ScheduleGame;
