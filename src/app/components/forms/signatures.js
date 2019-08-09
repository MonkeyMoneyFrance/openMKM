import React , { useState, useEffect } from 'react';

function Signatures(props) {
    const [selected, setSelected] = useState([])

    return (
        <div className='container' >
          <div style={{flex:1}}>
            <input
              className={"fullWidth"}
              id="teamASignature"
              placeholder="Equipe A"
            />
          </div>
          <div style={{flex:1}}>
            <input
              className={"fullWidth"}
              id="refSignature"
              placeholder="Observateur"
            />
          </div>
          <div style={{flex:1}}>
            <input
              className={"fullWidth"}
              id="teamBSignature"
              placeholder="Equipe B"
            />
        </div>
      </div>


)


}


export default Signatures;
