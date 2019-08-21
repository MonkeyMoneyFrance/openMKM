export default  [
  {
    id:'gameMatch',
    form:[
      [{
      label:'Derniers Matchs',
      html:'h2',
      className:'',
      }],
      [{
      label:'Derniers Matchs',
      html:'input',
      id:'game',
      className:'',
      match:/^.+$/
      },
      {
      label:'Equipes',
      html:'input',
      id:'score',
      className:'',
      match:/^\d+$/
      }]
    ]
  }
]
