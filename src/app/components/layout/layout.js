import styled from 'styled-components'

const PrivateLayout = styled.div`
  background-color:#D7DFF4;
  height:100%;
  & > .content {
    margin:auto;
    max-width:95%;
    margin-top: 5rem
  }
`

const AdminLayout = styled.div`
  background-color:#D7DFF4;
  height:100%;
  & > .content {
    margin:auto;
    max-width:95%;
    margin-top: 5rem
  }
`


export {AdminLayout,PrivateLayout}
