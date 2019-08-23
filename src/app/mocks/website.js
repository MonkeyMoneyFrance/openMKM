const website = {
  footers:{},
  menus:{},
  pages:{
    home:{
      name:"Page d'Accueil",
      menuId:"",
      footerId:"",
      style:{paddingHorizontal:50},
      blocks:{
        0:{
          style:{"background": "#ffffff",
            "margin": "0",
            "maxHeight": "400px",
            "padding": "0"
          },
          lines:{
            0:{
              style:{
                "margin": "2em 0 0 0",
                "minHeight": 100,
                "padding": "0"
              },
              columns:{
                0:{
                  style:{"background": "#F9DDE2",
                    "justifyContent": "flex-start",
                    "padding": "0 1rem"
                  },
                  elements:{
                    0:{
                      type:"paragraph",
                      props:{html:"<h3>&Eacute;CONOMIE</h3>"},
                      style:{
                        "justifyContent":"center",
                        "padding": "2em 0em"
                      },
                    },
                    1:{
                      type:"paragraph",
                      props:{html:"<p>La monnaie locale circule en tant que monnaie pour acheter des biens et services, cr&eacute;e directement de la richesse sur le territoire et soutient la cr&eacute;ation d&rsquo;emplois locaux, en circulant de 3 &agrave; 10 fois plus vite et cr&eacute;ant d&rsquo;autant plus d&rsquo;interactions et d&rsquo;emplois.</p>"},
                      style:{
                        "justifyContent": "center",
                        "padding": "1em 2em 4em 2em"
                      },
                    }
                  },
                },
                1:{
                  style:{
                    "justifyContent": "flex-start",
                    "padding": "0 1rem"
                  },
                  elements:{
                    0:{
                      type:"paragraph",
                      props:{html:"<h3>SOCIAL</h3>"},
                      style:{"justifyContent": "center",
                      "padding": "2em 0em"},
                    },
                    1:{
                      type:"image",
                      props:{},
                      style:{"justifyContent": "center",
                        "padding": "1em 2em 4em 2em"},
                    }
                  }
                }
              }
            },
            1:{
              style:{
                "margin": "2em 0 0 0",
                "minHeight": 100,
                "padding": "0"
                  },
              columns:{
                0:{
                  style:{"background": "#F9DDE2",
                    "justifyContent": "flex-start",
                    "padding": "0 1rem"},
                  elements:{
                    0:{
                      type:"paragraph",
                      props:{html:"<h3>&Eacute;CONOMIE</h3>"},
                      style:{"justifyContent":"center",
                      "padding": "2em 0em"},
                    },
                    1:{
                      type:"paragraph",
                      props:{html:"<p>La monnaie locale circule en tant que monnaie pour acheter des biens et services, cr&eacute;e directement de la richesse sur le territoire et soutient la cr&eacute;ation d&rsquo;emplois locaux, en circulant de 3 &agrave; 10 fois plus vite et cr&eacute;ant d&rsquo;autant plus d&rsquo;interactions et d&rsquo;emplois.</p>"},
                      style:{"justifyContent": "center",
                        "padding": "1em 2em 4em 2em"},
                    }
                  },
                },
                1:{
                  style:{"justifyContent": "flex-start",
                    "padding": "0 1rem"},
                  elements:{
                    0:{
                      type:"paragraph",
                      props:{html:"<h3>SOCIAL</h3>"},
                      style:{"justifyContent": "center",
                      "padding": "2em 0em"},
                    },
                    1:{
                      type:"paragraph",
                      props:{html:"<p>Les euros d&eacute;pos&eacute;s en fond de garantie pourront permettre&nbsp;le financement d&rsquo;autres projets locaux et am&eacute;liorent le bien vivre ensemble, tissent un nouveau lien social, rendent le sens du collectif au travers de nos &eacute;changes.</p>"},
                      style:{"justifyContent": "center",
                        "padding": "1em 2em 4em 2em"},
                    },
                    2:{
                      type:"button",
                      props:{text:"go login",color:"green",link:"/login"},
                      style:{"justifyContent":"center"}
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
export default website
