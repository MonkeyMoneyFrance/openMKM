import styled from 'styled-components'

const Main = styled.div`
  width:100%
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
  background-color:blue;
`

const Container = styled.div`
  display:flex;
  & > div {

  }
`



export {Main,Container,Button}
