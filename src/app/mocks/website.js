const website = {
  footers:{},
  menus:{},
  pages:{
    home:{
      name:"Page d'Accueil",
      menuId:"",
      footerId:"",
      style:{paddingHorizontal:50},
      blocks:[{
        style:{
          "background": "#ffffff",
          "margin": "0",
          "padding": "0"
        },
        lines:[
          {
          type : 'line',
          style:{},
          columns:[{type:"column",elements:[]}]},
          {
          type : 'line',
          style:{
            "margin": "2em 0 0 0",
            "padding": "0"
          },
          columns:[
            {type:"column",style:{},elements:[]},
            {
            type:"column",
            style:{
              "background": "#F9DDE2",
              "justify-content": "flex-start",
              "padding": "0 1rem"
            },
            elements:[{
              type:"paragraph",
              props:{html:"<h3>&Eacute;CONOMIE</h3>"},
              style:{
                "justify-content":"center",
                "padding": "2em 0em"
              },
            },{
              type:"paragraph",
              props:{html:"<p>La monnaie locale circule en tant que monnaie pour acheter des biens et services, cr&eacute;e directement de la richesse sur le territoire et soutient la cr&eacute;ation d&rsquo;emplois locaux, en circulant de 3 &agrave; 10 fois plus vite et cr&eacute;ant d&rsquo;autant plus d&rsquo;interactions et d&rsquo;emplois.</p>"},
              style:{
                "justifyContent": "center",
                "padding": "1em 2em 4em 2em"
              },
            }]
          },
            {
            type:"column",
            style:{
              "background": "#F9DDE2",
              "justify-content": "flex-start",
              "padding": "4em"
            },
            elements:[{
              type:"paragraph",
              props:{html:"<h3>SOCIAL</h3>"},
              style:{
                "justifyContent": "center",
                "padding": "2em 0em"
              },
            },{
              type:"image",
              props:{},
              style:{
                "justifyContent": "center",
                "padding": "1em 2em 4em 2em"
              },
            }]
          }]
        },
          {
          type : 'line',
          style:{
            "margin": "2em 0 0 0",

            "padding": "0"
          },
          columns:[{
            type:"column",
            style:{
              "background": "#F9DDE2",
              "justify-content": "flex-start",
              "padding": "0 1rem"
            },
            elements:[{
              type:"paragraph",
              props:{html:"<h3>&Eacute;CONOMIE</h3>"},
              style:{
                "justifyContent":"center",
                "padding": "2em 0em"
              },
            },{
              type:"paragraph",
              props:{html:"<p>La monnaie locale circule en tant que monnaie pour acheter des biens et services, cr&eacute;e directement de la richesse sur le territoire et soutient la cr&eacute;ation d&rsquo;emplois locaux, en circulant de 3 &agrave; 10 fois plus vite et cr&eacute;ant d&rsquo;autant plus d&rsquo;interactions et d&rsquo;emplois.</p>"},
              style:{
                "justifyContent": "center",
                "padding": "1em 2em 4em 2em"
              },
            }]
          },{
            type:"column",
            style:{
              "justifyContent": "flex-start",
              "padding": "0 1rem"
            },
            elements:[{
              type:"paragraph",
              props:{html:"<h3>SOCIAL</h3>"},
              style:{
                "justifyContent": "center",
                "padding": "2em 0em"
              },
            },{
              type:"paragraph",
              props:{html:"<p>Les euros d&eacute;pos&eacute;s en fond de garantie pourront permettre&nbsp;le financement d&rsquo;autres projets locaux et am&eacute;liorent le bien vivre ensemble, tissent un nouveau lien social, rendent le sens du collectif au travers de nos &eacute;changes.</p>"},
              style:{
                "justifyContent": "center",
                "padding": "1em 2em 4em 2em"
              },
            },{
              type:"button",
              props:{buttonText:"go login",colorButton:"green",link:"/login"},
              style:{
                "justifyContent":"center"
              }
            }]
          }]
        }]
      }]
    }
  }
};
export default website
