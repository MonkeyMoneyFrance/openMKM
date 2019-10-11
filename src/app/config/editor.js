import text from './jsons/text.js'
import textHover from './jsons/textHover.js'
import frame from './jsons/frame.js'
import frameHover from './jsons/frameHover.js'
export default  [
  {
    id : 'column',
    style:[
      [{
        label:'Transition',
        id:'transition',
        html:'input',
        className:'',
      }],
      [{
        label:'Curseur',
        id:'cursor',
        html:'input',
        className:'',
      }],
      [{
        "label": "",
        "id": "lineStyle",
        "states": [
          "default:Normal",
          "hover:Au survol"
        ],
        "html": "switchHeader"
      }],
      [{
        label:'Marges Externes',
        id:'margin',
        html:'input',
        className:'',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Marges Internes',
        id:'padding',
        html:'input',
        className:'',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Arrière Plan',
        html:'input',
        id:'background',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Bordure',
        html:'input',
        id:'border',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Arrondi de Bordure',
        html:'input',
        id:'border-radius',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Ombre de Bordure',
        html:'input',
        id:'box-shadow',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Marges Externes',
        id:'marginHover',
        html:'input',
        className:'',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Marges Internes',
        id:'paddingHover',
        html:'input',
        className:'',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Arrière Plan',
        html:'input',
        id:'backgroundHover',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Bordure',
        html:'input',
        id:'borderHover',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Arrondi de Bordure',
        html:'input',
        id:'border-radiusHover',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Ombre de Bordure',
        html:'input',
        id:'box-shadowHover',
        switch : ['lineStyle:hover']
      }]
    ]
  },
  {
    id : 'line',
    style:[
      [{
        label:'Transition',
        id:'transition',
        html:'input',
        className:'',
      }],
      [{
        label:'Curseur',
        id:'cursor',
        html:'input',
        className:'',
      }],
      [{
        "label": "",
        "id": "lineStyle",
        "states": [
          "default:Normal",
          "hover:Au survol"
        ],
        "html": "switchHeader"
      }],
      [{
        label:'Marges Externes',
        id:'margin',
        html:'input',
        className:'',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Marges Internes',
        id:'padding',
        html:'input',
        className:'',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Arrière Plan',
        html:'input',
        id:'background',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Bordure',
        html:'input',
        id:'border',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Arrondi de Bordure',
        html:'input',
        id:'border-radius',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Ombre de Bordure',
        html:'input',
        id:'box-shadow',
        switch : ['lineStyle:default']
      }],
      [{
        label:'Marges Externes',
        id:'marginHover',
        html:'input',
        className:'',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Marges Internes',
        id:'paddingHover',
        html:'input',
        className:'',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Arrière Plan',
        html:'input',
        id:'backgroundHover',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Bordure',
        html:'input',
        id:'borderHover',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Arrondi de Bordure',
        html:'input',
        id:'border-radiusHover',
        switch : ['lineStyle:hover']
      }],
      [{
        label:'Ombre de Bordure',
        html:'input',
        id:'box-shadowHover',
        switch : ['lineStyle:hover']
      }]
    ]
  },
  {
    id:'paragraph',
    style:[
      // text
      [
        {
          "label": "Style de Texte",
          "id": "showText",
          "html": "switchHeader"
        }
      ],
      [
        {
          "id": "text",
          "states": [
            "default:Normal",
            "hover:Au survol"
          ],
          "switch" : ["showText:show"],
          "html": "switchHeader"
        }
      ],
      ...text,...textHover,
      // Marges
      [
        {
          "label": "Marges",
          "id": "showMargin",
          "html": "switchHeader"
        }
      ],
      [
        {

          "id": "frame",
          "states": [
            "default:Normal",
            "hover:Au survol"
          ],
          "switch" : ["showMargin:show"],
          "html": "switchHeader"
        }
      ],
      ...frame,...frameHover
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
          "label": "Style de Texte",
          "id": "showText",
          "html": "switchHeader"
        }
      ],
      [
        {
          "label": "Typographie du Texte",
          "id": "textStyle1",
          "states": [
            "default:Normal",
            "hover:Au survol"
          ],
          "switch" : ["showText:show"],
          "html": "switchHeader"
        }
      ],
      [
        {
          "label": "Typographie du Texte",
          "id": "font-family",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Taille du Texte",
          "id": "font-size",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Graisse du Texte",
          "id": "font-weight",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Style de Texte",
          "id": "font-style",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Décoration du Texte",
          "id": "text-decoration",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Hauteur de ligne",
          "id": "line-height",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Espacement des caractères",
          "id": "letter-spacing",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ],
          "html": "input"
        }
      ],
      [
        {
          "label": "Couleur du Texte",
          "id": "color",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Couleur de l'Arrière Plan",
          "id": "background-color",
          "html": "input",
          "switch": [
            "textStyle1:default",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Typographie du Texte",
          "id": "font-familyHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Taille du Texte",
          "id": "font-sizeHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Graisse du Texte",
          "id": "font-weightHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Style de Texte",
          "id": "font-styleHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Décoration du Texte",
          "id": "text-decorationHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Hauteur de ligne",
          "id": "line-heightHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Espacement des caractères",
          "id": "letter-spacingHover",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ],
          "html": "input"
        }
      ],
      [
        {
          "label": "Couleur du Texte",
          "id": "colorHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
      [
        {
          "label": "Couleur de l'Arrière Plan",
          "id": "background-colorHover",
          "html": "input",
          "switch": [
            "textStyle1:hover",
            "showText:show"
          ]
        }
      ],
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
