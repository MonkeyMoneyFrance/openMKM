import React , { useState, useEffect } from 'react';

const website = {
  footers:{},
  menus:{},
  pages:{
    home:{
      name:"Page d'Accueil",
      menuId:"",
      footerId:"",
      style:{padding:50},
      blocks:{
        0:{
          style:{padding:50},
          lines:{
            0:{
              style:{padding:50},
              columns:{
                0:{
                  style:{padding:50},
                  elements:{
                    0:{
                      type:"paragraph",
                      props:{"html":"Bonjour"},
                      style:{padding:50},
                    },
                    1:{
                      type:"image",
                      props:{"url":"http://img.over-blog-kiwi.com/1/51/56/14/20160121/ob_bfbbf6_link-twilight-princess-by-hitokirisa.jpg"},
                      style:{padding:50},
                    }
                  },
                },
                1:{
                  style:{padding:50},
                  elements:{
                    0:{
                      type:"paragraph",
                      props:{},
                      style:{padding:50},
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
        <button style={{position:"absolute", top:500,left:isEditing ? 500 : 0}}
          onClick={()=>switchEdit(!isEditing)}
        >
          Clique
        </button>
      </div>
      {/*this is the main front*/}
      <div className="verticalContainer">
        {Object.keys(page.blocks).map(i=>{
          let block = page.blocks[i];
          console.log({block});
          return(
            <div key={i} name="block" className="verticalContainer"
              style={{...block.style, backgroundColor:"lightgreen"}}
            >
              {Object.keys(block.lines).map(j=>{
                let line = block.lines[j];
                console.log({line});
                return(
                  <div key={i+"."+j} className="horizontalContainer"
                    style={{...line.style, backgroundColor:"lightblue"}}
                  >
                    {Object.keys(line.columns).map(k=>{
                      let column = line.columns[k];
                      console.log({column});
                      return(
                        <div key={i+"."+j+"."+k} className="verticalContainer"
                          style={{...column.style, backgroundColor:"orange"}}
                        >
                          {Object.keys(column.elements).map(l=>{
                              let element = column.elements[l];
                              console.log({element});
                              return(
                                <div key={i+"."+j+"."+k+"."+l}
                                  style={{...element.style, backgroundColor:"red"}}
                                >
                                  <p>{element.type}</p>
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
