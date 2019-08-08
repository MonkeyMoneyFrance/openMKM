import styled from 'styled-components'

const AppRoot = styled.div`
  position:fixed;
  background-color:red;
  height:50px;
  width:100%;
  display : flex;
  max-width:100%;
  justify-content : space-between;
  & nav{
    display: flex;
    align-items: center;
    & a, & button {
      margin : 10px;
    }
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
