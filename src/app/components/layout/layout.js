import styled from 'styled-components'

const Layout = styled.div`
  background-color:green;
  height:100%;
  & > .content {
    background-color:blue;
    margin:auto;
    max-width:800px;
  }
`


export {Layout}
