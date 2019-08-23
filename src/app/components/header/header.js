import styled from 'styled-components'

const HamburgerMenu = styled.div`
  @media(min-width:768px){
    display:none
  }
  position: relative;
  width: 30px;

  margin:14px 1em;
  transition: .5s ease-in-out;

  cursor: pointer;
  span {
    position: absolute;
    height: 3px;
    width: 100%;
    vertical-align: middle;
    background: black;
    border-radius: 8px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    padding: 0px;
    &:nth-child(1) {
      top: 0px
    }
    &:nth-child(2){
      top: 10px
    }
    &:nth-child(3){
      top: 10px
    }
    &:nth-child(4) {
      top: 20px
    }
  }
  &.isopen span {
    &:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
      opacity: 0;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
      opacity: 0;
    }
  }
`
const BackgroundSlider = styled.div`
  position: absolute;
  height: calc(100vh - 50px);
  top:50px;
  width: 100vw;
  transform: translateX(100%);
  transition: transform 200ms;
  background-color: rgba(100,100,100,0.5);
  z-index: -1;
  &.isopen{
    transform: none;
    z-index: 8;
  }
`
const BOMenu = styled.div`
  position: fixed;
  height: calc(100vh - 50px);
  width: 210px;
  right:0;
  z-index:10;
  top:50px;
  background-color: white;

  transition: transform 300ms;
  &.isopen{
    transform: none;
  }
  @media(max-width:758px){
    transform: translateX(100%);
  }

  & ul {
    margin-top: 0px;
    padding: 0px;
    color: black;
    list-style-type: none;
    text-align: left;
  & li {
    padding: 30px 0 20px 20px;
    font-size: 1.5em;

  }

  & li:last-child {
    border-bottom: none;
  }
  }
`

const SlideMenu = styled.div`
  position: absolute;
  height: calc(100% - 50px);
  width: 210px;
  left:0;
  z-index:10;
  top:50px;
  background-color: white;
  transform: translateX(100%);
  transition: transform 300ms;
  &.isopen{
    transform: none;
  }

  & ul {
    margin-top: 0px;
    padding: 0px;
    color: black;
    list-style-type: none;
    text-align: left;
  & li {
    padding: 30px 0 20px 20px;
    font-size: 1.5em;

  }

  & li:last-child {
    border-bottom: none;
  }
  }
`


const AppRoot = styled.div`
  background-color:white;
  position:fixed;
  height:50px;
  width:100%;
  display : flex;
  max-width:100%;
  justify-content : space-between;
  & nav{
    @media(max-width:768px){
      display:none
    }
    display: flex;
    align-items: center;
    & a, & button {
      margin : 30px;
      color:#575757;
    	text-decoration:none;
    }
    & button {height:40px}
  }
  & .homeImg {
    max-width:100px;
    display:flex;
    align-items:center;
  }
  & img {
    height:90%;
    object-fit:contain;

  }

  .main {
    background-color:green;
  }

`

const AppUnderMenu = styled.div`
  background-color:white;
  padding-top:50px;
  width:100%;

  max-width:100%;
  & h2 {
    margin:0.5em;
  }
  & nav{
    display : flex;

    @media(max-width:768px){
      flex-direction: column;
      align-items:flex-start;
      width : 100%;
    }
    display: flex;
    align-items: center;
    & a, & button {
      color:#575757;
      margin:1em;
    	text-decoration:none;
    }
    & button {height:40px}
  }
  & .homeImg {
    max-width:100px;
    display:flex;
    align-items:center;
  }
  & img {
    height:90%;
    object-fit:contain;

  }

  .main {
    background-color:green;
  }

`

export {BOMenu,AppUnderMenu,AppRoot,SlideMenu,HamburgerMenu,BackgroundSlider}
