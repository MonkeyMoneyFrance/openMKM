import styled from 'styled-components'

const AppRoot = styled.div`
  background-color:white;
  height:50px;
  display : flex;
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
  & img {
    height:90%;


  }

  .main {
    background-color:green;
  }

`




export {AppRoot}
