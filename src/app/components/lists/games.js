import React , { useState, useEffect } from 'react';
import './list.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchGame} from '../../redux/actions'

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
    games : state.games
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchGame}, dispatch)
}
function GamesList(props) {
    const [selected, setSelected] = useState([])


    const handleClick = (value) => {
      props.history.push(`/game/${value}`)
    }
    useEffect(()=>{
      !props.games ? props.requestFetchGame() : void 0
    },[])

    return (
      <div className={'paper'}>
          <table className={'table'}>
            <thead>
              <tr>
                <td>Date</td>
                <td >Equipe A</td>
                <td >Résultat</td>
                <td >Equipe B</td>
                <td >Statut</td>
            </tr>
            </thead>
            <tbody>
              {(rows).map((row,i)=> (
                <tr
                  hover
                  onClick={event => handleClick(i)}
                  // aria-checked={selected.indexOf(row.name) !== -1}
                  key={i}
                  // selected={selected.indexOf(row.name) !== -1}
                  >
                  <td>{row.playedAt}</td>
                  <td>{(row.teams[0]||{}).teamId}</td>
                  <td >{(row.teams[0]||{}).result} - {(row.teams[1]||{}).result}</td>
                  <td >{(row.teams[1]||{}).teamId}</td>
                <td >{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(GamesList);
