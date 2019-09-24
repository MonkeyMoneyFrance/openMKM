import React , { useState, useEffect } from 'react';
import './list.scss'
import {withRouter} from 'react-router-dom'
import tables from '../../config/tables'
import {theadcell} from '../inputs/index.js'
import SearchTable from '../inputs/searchTable'
import dotProp from 'dot-prop-immutable'
const rows = [
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir")
];
function createData(playedAt, results, status) {
  return { playedAt, results, status };
}

function UsersList(props) {

    const table = (tables.find(h => h.id === props.id) || {}).header||[]
    return (
      <div className={'lists'}>
          <SearchTable location={props.location} history={props.history} />
          <table className={'table'}>
            <thead>
              <tr>
                {table.map((headcell,i)=> {
                  let Component = theadcell
                  return (
                      <Component key={i} {...headcell} location={props.location} history={props.history} />
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {(props.data || rows).map((row,i)=> (
                <tr
                  onClick={event => props.rowClicked(row._id)}
                  key={row._id || i}
                  >
                  {table.map((cell,i)=> {
                    return (
                      <td key={i}>{cell.path.map(p => dotProp.get(row,p) || p) }</td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
)
}


export default withRouter(UsersList);
