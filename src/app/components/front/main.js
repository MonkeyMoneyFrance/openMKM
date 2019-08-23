import React, {Component} from 'react';
import {Grid, Segment , Header,Popup,Icon,Button,Visibility} from 'semantic-ui-react';
// import '../../static/styles/vitrine.css';
// import '../../static/styles/editWebsite.css';
import Style from 'style-it';
import EditItemBouton from '../edit/editItemBouton';
import { CSSTransition , TransitionGroup} from "react-transition-group";


import ListCustomColumn from './listCustomColumn';
import ListCustomItems from './listCustomItems';
import Accordion from './accordion';
import Calendar from './calendar';
import detailTrader from './detailTrader'
import Articles from './articles';
import DetailArticle from './detailArticle';
import Annuaire from './annuaire'
import Tags from './tags';
import ContactForm from './contactform'
import StatisticComponent from './statisticComponent';
import ListEvents from './ListEvents';
import Paragraph  from './paragraph'
import ButtonVitrine  from './button'
import Video  from './video'
import Img  from './image'
import TwitterFeed from './twitterfeed'
import Gallery from './gallery'
import Embed from './embed'

import LoginForm from './LoginForm'
import SignNewUser from './signNewUser'
import Iframe from './iframe'
import Map from './map'
import ChooseElementModal from '../edit/chooseElementModal'
import dotProp from 'dot-prop-immutable'
import {connect} from 'react-redux'


var forker = {
    map : Map,
    news: Articles,
    annuaire : Annuaire,
    accordion:Accordion,  // done
    listCustomColumn: ListCustomColumn, // done
    listCustomItems: ListCustomItems, // done
    detailTrader:detailTrader, // done
    signNewUser : SignNewUser,
    calendar : Calendar,
    // slider: Slider, // to be removed
    detailArticle: DetailArticle, // done
    tags: Tags,
    statistic: StatisticComponent,
    embed:Embed,
    login : LoginForm,
    iframe : Iframe,
    gallery : Gallery,
    // partenaire: Partenaire, // to be removed
    // simpleItemColumn: SimpeItemColumn,
    // doubleFrame:DoubleFrame, // to be removed
    contact:ContactForm, // done
    listEvents: ListEvents, // done with Errors
    paragraph : Paragraph, // done
    button : ButtonVitrine, // done
    image: Img, // done
    video: Video, // done
    twitter : TwitterFeed // done
};

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    renderchooseElementModal(){
      if (!this.state.chooseElementModalOpen || !this.state.path) return null

      return (
        <ChooseElementModal
          path = {'website'}
          addElement={(element) => {
            let newBlock = dotProp.set(this.props.element,this.state.path,element)
            this.props.storeWebsite(newBlock)
            this.setState({chooseElementModalOpen:false,path:null})
          }}
          close={()=>this.setState({chooseElementModalOpen:false,path:null})}
        />
      )
    }

    renderManageInputs(index,path,isLast,onceRemaining){
      const element = this.props.element
      return(
        <div>
          <Popup hideOnScroll content='Supprimer cet élement' on='hover' trigger={

                    <Button onClick={()=> {
                      const state = dotProp.delete(element, path + (onceRemaining == true ? '' : '.' + index))
                      this.props.storeWebsite(state)
                    }} className={"editButton"} icon negative inverted circular style={{position:'absolute',zIndex:99,top:-15,left:160}} ><Icon name={'delete'} /></Button>
                }
          />
        {!isLast ?
          <Popup hideOnScroll content='Descendre ce champ' on='hover' trigger={
            <Button onClick={()=> {
                const newIndex = Number(index+1)
                const tempItem_Next = dotProp.get(element, path + '.' + newIndex)
                const tempItem_Act = dotProp.get(element, path + '.' + index)
                const state_Temp = dotProp.set(element, path + '.' + newIndex,tempItem_Act)
                const state = dotProp.set(state_Temp, path + '.' + index,tempItem_Next)
                this.props.storeWebsite(state)
              }} className={"editButton"} icon primary inverted circular style={{position:'absolute',zIndex:99,top:-15,left:200}} ><Icon name={'arrow down'} /></Button>
            }
          />
        : void 0 }

        </div>
      )
    }


    render() {
        if (!this.props.element) return null;
        // return null;
        let edit_website = this.props.edit_website
        let element = this.props.element;

        let properties = element.block_properties || {} // les propriétés de ce bloc
        let items = element.elementMap || [] // les eléments de ce bloc
        let line_properties = element.line_properties || [] // les propriétés des eléments de ce bloc

        let pattern = (properties.background||'').match(/^(url\(").+("\))/)
        let className = ''
        if (pattern && pattern[0] && pattern[0] != 'undefined') {
          properties.backgroundRepeat = 'no-repeat'
          properties.backgroundSize = 'cover'
          if (!this.state.src){
            const hdLoaderImg = new Image();
            className = 'img-loading'
            let src = pattern[0].replace(pattern[1],'').replace(pattern[2],'')
            hdLoaderImg.src = src
            hdLoaderImg.onload = () => {
              this.setState({ src });
              className = 'img-loaded'
            };
          } else {
            className = 'img-loaded'
          }



          let placeholder = element.placeholderImg
          // properties.background = pattern[1] + ( placeholder) + '") no-repeat '
          properties.background = pattern[1] + (this.state.src || placeholder) + pattern[2]

        }

        return (

            <Segment
                className = {className}
                vertical
                style={{...properties,transition:'filter 2s',paddingTop:this.props.heightMenu+'px',overflow:"hidden"}}>

                <Visibility
                  once={false}
                  // offset={[-1*properties['offsetDown'] || 0,-1*properties['offsetUp'] || 0]}
                  onOnScreen={()=>{
                    this.setState({topPassed:true})
                  }}

                  />
                <Style>{properties.advancedStyle || " ."}
                  <div>
                    <CSSTransition in={this.state.topPassed} timeout={properties.timeout || 500} classNames="segmentBlock">

                      <Grid
                        className={"segmentBlock" + (edit_website == true ? ' segmentEditBefore' : '')}
                        stackable
                        container

                          >
                          {line_properties.length > 0 ? (line_properties).map((e,i) => {

                            let column_properties = element.column_properties[i] || []

                            return (
                              <Grid.Row columns={'equal'} key={i}
                                style={line_properties[i] ||  {}}
                                className={'rowBlock ' + i + (edit_website == true ? ' editBefore' : '')}>
                                {edit_website ?
                                  <div className='rowButton' >
                                  <EditItemBouton
                                   shouldUpdate={()=> void 0}
                                   currentData={line_properties[i] || {}}
                                   id= {this.props.itemNumber + ".line_properties." + i }
                                   vShift={-40}
                                   hShift={-40}
                                   draft={'draftWebsite'}
                                   icon={'list'}
                                   label = {'Gérer les styles de la ligne entière'}
                                   blockId = {i}
                                   path={'website/line_properties/'}  />
                               </div>
                                : void 0}
                                {column_properties.map((column,index) => {
                                  if (!column_properties[index]) return null
                                  let elementMap = items[i] ? items[i][index] || [] : []
                                  return (
                                    <Grid.Column key = {i+'_'+index}
                                      width={column_properties[index].width}
                                      style={{display:'flex',flexDirection:'column',...column_properties[index]||{}}}
                                      className={'columnBlock ' + index + (edit_website == true ? ' editItemBefore' : '')}>
                                      {edit_website ?
                                        <div className='columnButton' >
                                          {this.renderchooseElementModal()}
                                          <Popup  content={"Ajouter un Element"} trigger={
                                                <Button onClick={()=>{
                                                  this.setState({
                                                    chooseElementModalOpen:true,
                                                    path:"elementMap." + i + '.' + index + '.' + Object.keys(elementMap).length  // le chemin où pousser le nouvel item
                                                  })}}
                                                  className={"editButton"} icon positive inverted circular style={{position:'absolute',zIndex:99,top:0,left:-30}} ><Icon name={"add"} /></Button>
                                            }
                                          />

                                           <EditItemBouton
                                            shouldUpdate={()=> void 0}
                                            currentData={column_properties[index] || {}}
                                            id= {this.props.itemNumber + ".column_properties." + i + '.' + index }
                                            hShift={-30}
                                            vShift={40}
                                            draft={'draftWebsite'}
                                            icon={'columns'}
                                            label = {'Editer le style de cette colonne'}
                                            blockId = {i}
                                            path={'website/column_properties/'}  />
                                            <EditItemBouton
                                             shouldUpdate={()=> void 0}
                                             currentData={column_properties[index] || {}}
                                             id= {this.props.itemNumber + ".column_properties." + i + '.' + index }
                                             hShift={-30}
                                             vShift={0}
                                             draft={'draftWebsite'}
                                             icon={'columns'}
                                             label = {'Editer le style avancé eeee de cette colonne'}
                                             blockId = {i}
                                             path={'website/advanced_properties/paragraph/'}  />
                                        </div>
                                        : void 0}
                                        <Style>{column_properties[index].advancedStyle || " ."}
                                        <div style={{position:'relative'}}
                                          className={'internalColumn ' + index + (edit_website == true ? ' editItemBefore' : '')}>
                                      {Object.keys(elementMap).map((object,position) => {
                                        let element = elementMap[object]
                                        if (!element.type || !forker[element.type]) return
                                        let under_item = element
                                        var GoTo = forker[element.type];

                                        return (

                                          <div key={position} style={{display:'flex',position:'relative',...under_item}}
                                            className={'parentBlock ' + position + (edit_website == true ? ' editElementBefore' : '')}>
                                            {edit_website ?
                                              <div className='editButtonDiv' >
                                                <EditItemBouton
                                                 shouldUpdate={()=> void 0}
                                                 currentData={under_item || {}}
                                                 id= {this.props.itemNumber + ".elementMap." + i + '.' + index + '.' + position}
                                                 hShift={40 }
                                                 vShift={-15}
                                                 draft={'draftWebsite'}
                                                 label = {'Editer cet élément'}
                                                 type={{secondary:true}}
                                                 icon={'cogs'}
                                                 path={'website/elementMap/'+element.type}  />
                                               <EditItemBouton
                                                shouldUpdate={()=> void 0}
                                                currentData={under_item || {}}
                                                id= {this.props.itemNumber + ".elementMap." + i + '.' + index + '.' + position}
                                                hShift={0 }
                                                vShift={-15}
                                                icon={'theme'}
                                                draft={'draftWebsite'}
                                                label = {'Editer le style de cet élement'}
                                                path={'website/element_properties/'}  />
                                                <EditItemBouton
                                                  modal
                                                 shouldUpdate={()=> void 0}
                                                 currentData={under_item || {}}
                                                 id= {this.props.itemNumber + ".elementMap." + i + '.' + index + '.' + position}
                                                 hShift={80 }
                                                 vShift={-15}
                                                 draft={'draftWebsite'}
                                                 icon={'paint brush'}
                                                 label = {'Editer le style avancé'}
                                                 path={'website/advanced_properties/paragraph'}  />
                                                {this.renderManageInputs(position,"elementMap." + i + '.' + index ,position == Object.keys(elementMap).length - 1,Object.keys(elementMap).length == 1)}
                                              </div>
                                            : void 0}
                                              <GoTo
                                                element={under_item}
                                                isEditing = {edit_website || this.props.edit_menu || this.props.edit_footer}
                                                draftWebsitePath= {this.props.itemNumber + ".elementMap." + i + '.' + index + '.' + position} // chemin du json dans redux
                                              />




                                        </div>

                                        )
                                      })}
                                    </div>
                                    </Style>
                                    </Grid.Column>
                                  )
                                })
                              }
                              </Grid.Row>

                            )

                          })  : this.props.contributor == true && this.props.edit_website ?
                          <Grid.Row columns={'equal'}>
                            <Grid.Column >
                              <Header textAlign='center'>Commencez par ajouter des lignes via le bouton 'Gérer les lignes et colonnes de ce bloc' sur votre gauche</Header>
                            </Grid.Column>
                          </Grid.Row>
                         : void 0}
                      </Grid>

                </CSSTransition>
              </div>
                </Style>
            </Segment>


        )

    }
}

export default Main;
