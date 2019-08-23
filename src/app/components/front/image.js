import React, {Component} from 'react';
import {Image as ImageSemantic} from 'semantic-ui-react';
import Style from 'style-it'
import Router from 'next/router'
class Image extends React.PureComponent {
  render() {
    let element = this.props.element;
    if (!element.src) return <ImageSemantic src={"http://via.placeholder.com/350x150"}/>


  return (
      <Style>
        {element.advancedStyle}
        <div className={'root'}>
          <ImageSemantic
            style={{objectFit:element.objectFit}}
              size={element.size}
              src={element.src}
              rounder = {element.rounded}
              onClick={()=>{
                if (this.props.isEditing == true) return
                if (!element.link) return
                else if (/^https?:\/\//.test(element.link)) window.open(element.link, '_blank');
                else if (/^\//.test(element.link)) Router.push(element.link)
                else {
                  let url_direct = element.link.replace(/^\//,'').replace(/\?/g,'&')
                  Router.push('/?page='+url_direct,'/'+element.link.replace(/^\//,''))
                }
              }}
          />
        </div>
      </Style>

    );
  }
}

export default (Image);
