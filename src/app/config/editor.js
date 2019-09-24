export default  [
  {
    id:'paragraph',

    styles:[

      [{
        label:'Contenu',
        id:'html',
        html:'input',
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
    ],
    props:[
      [{
        label:"Paragraphe",
        html:'h2',
        id:"title"
      }],
      [{
        label:'Contenu',
        id:'html',
        html:'input',
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
  },
  {
    id:'button',
    styles:[
      [{
        label:'Marge Externe',
        id:'padding',
        html:'input',
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
    ],
    props:[
      [{
        label:'Couleur du Bouton',
        id:'buttonText',
        html:'input',
      }],
      [{
        label:'Lien de Redirection',
        html:'input',
        id:'link',
        match:/^.+$/
      }]
    ]
  },

]
