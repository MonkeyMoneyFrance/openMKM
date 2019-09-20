export default  [
  {
    id : 'column',
    style:[
      [{
        label:'Marges Externes',
        id:'margin',
        html:'input',
        className:'',
      }],
      [{
        label:'Marges Internes',
        id:'padding',
        html:'input',
        className:'',
      }],
      [{
        label:'Taille Relative',
        html:'input',
        id:'flex'
      }],
      [{
        label:'Couleur du Texte Hover',
        html:'input',
        id:'hoverColor'
      }],
      [{
        label:'Arrière Plan',
        html:'input',
        id:'background'
      }],
      [{
        label:'Bordure',
        html:'input',
        id:'border'
      }],
      [{
        label:'Arrondi de Bordure',
        html:'input',
        id:'border-radius'
      }],
      [{
        label:'Ombre de Bordure',
        html:'input',
        id:'box-shadow'
      }]
    ]
  },
  {
    id : 'line',
    style:[
      [{
        label:'Marges Externes',
        id:'margin',
        html:'input',
        className:'',
      }],
      [{
        label:'Marges Internes',
        id:'padding',
        html:'input',
        className:'',
      }],
      [{
        label:'Couleur du Texte',
        html:'input',
        id:'color'
      }],
      [{
        label:'Couleur du Texte Hover',
        html:'input',
        id:'hoverColor'
      }],
      [{
        label:'Arrière Plan',
        html:'input',
        id:'background'
      }],
      [{
        label:'Bordure',
        html:'input',
        id:'border'
      }],
      [{
        label:'Arrondi de Bordure',
        html:'input',
        id:'border-radius'
      }],
      [{
        label:'Ombre de Bordure',
        html:'input',
        id:'box-shadow'
      }]
    ]
  },
  {
    id:'paragraph',
    style:[
      [{
        label:'Marges Externes',
        id:'margin',
        html:'input',
        className:'',
      }],
      [{
        label:'Marges Internes',
        id:'padding',
        html:'input',
        className:'',
      }],
      [{
        label:'Couleur du Texte',
        html:'input',
        id:'color'
      }],
      [{
        label:'Couleur du Texte Hover',
        html:'input',
        id:'hoverColor'
      }],
      [{
        label:'Arrière Plan',
        html:'input',
        id:'background'
      }],
      [{
        label:'Bordure',
        html:'input',
        id:'border'
      }],
      [{
        label:'Arrondi de Bordure',
        html:'input',
        id:'border-radius'
      }],
      [{
        label:'Ombre de Bordure',
        html:'input',
        id:'box-shadow'
      }]
    ],
    props:[
      [{
        label:'Contenu',
        id:'html',
        html:'input',
      }],
      [{
        label:'Type de Champ',
        html:'input',
        id:'attribute',
      }]
    ]
  },
  {
    id:'button',
    style:[
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
