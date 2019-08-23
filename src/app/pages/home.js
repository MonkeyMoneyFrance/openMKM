import React , { useState, useEffect } from 'react';
import Button from '../components/front/button'
import Paragraph from '../components/front/paragraph'

var Forker = {
    // map : Map,
    // news: Articles,
    // annuaire : Annuaire,
    // accordion:Accordion,  // done
    // listCustomColumn: ListCustomColumn, // done
    // listCustomItems: ListCustomItems, // done
    // detailTrader:detailTrader, // done
    // signNewUser : SignNewUser,
    // calendar : Calendar,
    // detailArticle: DetailArticle, // done
    // tags: Tags,
    // statistic: StatisticComponent,
    // embed:Embed,
    // login : LoginForm,
    // iframe : Iframe,
    // gallery : Gallery,
    // contact:ContactForm, // done
    // listEvents: ListEvents, // done with Errors
    paragraph : Paragraph,
    button : Button,
    // image: Img, // done
    // video: Video, // done
    // twitter : TwitterFeed // done
};

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
          "minHeight": "400px",
          "padding": "0"},
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

function Home() {
  const page = website.pages.home;
  const [isEditing, switchEdit] = useState(false);

  return(
    <div style={{flex:1,display:"flex",flexDirection:"row"}}
    >
      {/*this is the editing part*/}
      <div style={{width:isEditing ? 500 : 0, borderRight:"1rem solid"}}>
        <Button style={{position:"absolute", top:500,left:isEditing ? 500 : 0}}
          onClick={()=>{
            switchEdit(!isEditing)
          }}
          text="Clique"
        />
      </div>
      {/*this is the main front*/}
      <div className="verticalContainer">
        {Object.keys(page.blocks).map(i=>{
          let block = page.blocks[i];
          return(
            <div key={i} name="block" className="verticalContainer"
              style={{...block.style}}
            >
              {Object.keys(block.lines).map(j=>{
                let line = block.lines[j];
                return(
                  <div key={i+"."+j} className="horizontalContainer"
                    style={{...line.style}}
                  >
                    {Object.keys(line.columns).map(k=>{
                      let column = line.columns[k];
                      return(
                        <div key={i+"."+j+"."+k} className="verticalContainer"
                          style={{...column.style}}
                        >
                          {Object.keys(column.elements).map(l=>{
                              let element = column.elements[l];
                              const Component = Forker[element.type];
                              return(
                                <div key={i+"."+j+"."+k+"."+l}
                                  style={{...element.style,display:"flex"}}
                                >
                                  <Component
                                    {...element.props}
                                  />
                                </div>
                              )
                            }
                          )}
                        </div>
                      )}
                    )}
                  </div>
                )}
              )}
            </div>
          )}
        )}
      </div>
    </div>
  );
}


export default Home;
