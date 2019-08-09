import React , { useState, useEffect } from 'react';
import './list.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchTeam} from '../../redux/actions'

const rows = [
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir")
];
function createData(playedAt, teams, status) {
  return { playedAt, teams, status };
}

function mapStateToProps(state) {
  return {
    teams : state.teams
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchTeam}, dispatch)
}
function TeamsList(props) {
    const handleClick = (value) => {
      props.history.push(`teams/${value}`)
    }
    useEffect(()=>{
      props.requestFetchTeam()
    },[])

    return (
      <div className={'lists'}>
          <table className={'table'}>
            <thead>
              <tr>
                <td >Nom</td>
                <td >Ligue</td>
                <td >Categorie</td>
            </tr>
            </thead>
            <tbody>
              {(props.teams || rows).map((row,i)=> (
                <tr
                  onClick={event => handleClick(row.teamId)}
                  key={row._id || i}
                  >
                  <td>{row.teamName}</td>
                  <td>{row.division}</td>
                  <td >{row.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(TeamsList);
