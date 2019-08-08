import React , { useState, useEffect } from 'react';
import {connect} from 'react-redux';


function Remarks(props) {
    const [values, setValue] = useState({before:'',started:'',after:''})
    const onChange = (e) => setValue({...values,[e.target.id]:e.target.value})
    const onBlur = () => props.setData(props.id,values)
    useEffect(() => setValue({
      before : props.before,
      started : props.started,
      after : props.after,
    }),[])
    return (
        <div style={{flex:1}}>
          <div>
            <textarea
              id="before"
              placeholder="Avant"
              rowsmax="4"
              value={values.before}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          <div>
            <textarea
              id="started"
              placeholder="Pendant"
              rowsmax="4"
              value={values.started}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          <div>
            <textarea
              id="after"
              placeholder="Après"
              rowsmax="4"
              value={values.after}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        </div>


)
}


export default Remarks;
