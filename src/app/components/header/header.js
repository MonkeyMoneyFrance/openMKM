import styled from 'styled-components'

const AppRoot = styled.div`
  background-color:white;
  position:fixed;
  height:50px;
  width:100%;
  display : flex;
  max-width:100%;
  justify-content : space-between;
  & nav{
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




export {AppRoot}
