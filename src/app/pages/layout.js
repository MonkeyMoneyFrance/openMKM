import styled from 'styled-components'

const Main = styled.div`
  width:100%;
  & table {
    width:100%;
  }
  & .header {
    display:flex;
    justify-content:space-between;
    @media(max-width:768px){
      flex-direction:column;
    }
    h2 {

    }
  }
`
const Button = styled.button`
  background-color:#203F93;
  font-size:15px;
  width:140px;
  height:30px;
  display:flex;
  justify-content:flex-end
`

const Container = styled.div`
  display:flex;
  justify-content:space-between
  & > div {background-color:#FFFFFF;border-radius : 10px;
    box-shadow: 0 2px 4px 0 rgba(153,153,153,0.50);

  }
`



export {Main,Container,Button}
