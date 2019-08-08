import styled from 'styled-components'

const AppRoot = styled.div`
  background-color:red;
  height:50px;
  display : flex;
  justify-content : space-between;
  & nav{
    display: flex;
    align-items: center;
    & a, & button {
      margin : 10px;
    }
  }
  & img {
    height:90%;

  }

  .main {
    background-color:green;
  }

`



export {AppRoot}
