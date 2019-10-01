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
  [
    {
      "label": "Typographie du Texte",
      "id": "textStyle1",
      "states": [
        "default:Masquer",
        "show:Afficher"
      ],
      "html": "switchHeader"
    }
  ],
  [
    {
      "label": "Typographie du Texte",
      "id": "font-family",
      "html": "input",
      "switch": [
        "textStyle1:show"
      ]
    }
  ],
  [
    {
      "label": "Taille du Texte",
      "id": "font-size",
      "html": "input",
      "switch": [
        "textStyle1:show"
      ]
    }
  ],
  [
    {
      "label": "Graisse du Texte",
      "id": "font-weight",
      "html": "input",
      "switch": [
        "textStyle1:show"
      ]
    }
  ],
  [
    {
      "label": "Style de Texte",
      "id": "font-style",
      "html": "input",
      "switch": [
        "textStyle1:show"
      ]
    }
  ],
  [
    {
      "label": "Décoration du Texte",
      "id": "text-decoration",
      "html": "input",
      "switch": [
        "textStyle1:show"
      ]
    }
  ],
  [
    {
      "label": "Hauteur de ligne",
      "id": "line-height",
      "html": "input",
      "switch": [
        "textStyle1:show"
      ]
    }
  ],
  [
    {
      "label": "Espacement des caractères",
      "id": "letter-spacing",
      "switch": [
        "textStyle1:show"
      ],
      "html": "input"
    }
  ],
  [
    {
      "label": "",
      "id": "colorHeader",
      "states": [
        "default:Default",
        "hover:Au survol"
      ],
      "html": "switchHeader"
    }
  ],
  [
    {
      "label": "Couleur du Texte",
      "id": "color",
      "html": "input",
      "switch": [
        "colorHeader:default"
      ]
    },
    {
      "label": "Couleur du Texte",
      "id": "colorHover",
      "html": "input",
      "switch": [
        "colorHeader:hover"
      ]
    }
  ],
  [
    {
      "label": "Couleur de l'Arrière Plan",
      "id": "background-color",
      "html": "input",
      "switch": [
        "colorHeader:default"
      ]
    },
    {
      "label": "Couleur de l'Arrière Plan",
      "id": "background-colorHover",
      "html": "input",
      "switch": [
        "colorHeader:hover"
      ]
    }
  ]
],
    props:[
      [
        {
          "label": "Texte du Bouton",
          "id": "buttonText",
          "html": "input"
        }
      ],
      [
        {
          "label": "Lien du Bouton",
          "id": "buttonHref",
          "html": "input"
        }
      ],
      [
        {
          "label": "Alignement du Texte",
          "id": "text-align",
          "html": "input"
        }
      ],
      [
        {
          "label": "Taille du Bouton",
          "id": "size",
          "html": "input"
        }
      ],
      [
        {
          "label": "Icone du Bouton",
          "id": "buttonIcon",
          "html": "input"
        }
      ],
      [
        {
          "label": "Alignement de l'icone",
          "id": "iconFloat",
          "html": "input"
        }
      ],
      [
        {
          "label": "Espacement de l'icone",
          "id": "iconMargin",
          "html": "input"
        }
      ]
    ]
  }
]
