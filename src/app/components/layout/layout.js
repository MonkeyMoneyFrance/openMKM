import styled from 'styled-components'

const PrivateLayout = styled.div`
  background-color:#D7DFF4;
  min-height:100%;
  & > .content {
    margin:auto;
    max-width:95%;
    padding-top: 5rem
  }
`

const AdminLayout = styled.div`
  background-color:#D7DFF4;
  min-height:100%;
  & > .content {
    padding:1em;
    margin:auto;
    max-width:95%;

    @media(min-width:758px){
      margin-right:210px
    }
  }
`

const PublicLayout = styled.div`
  height:100%;
  /* min-height:100%; */
  /* overflow:hidden; */
  & > .content {
    margin:auto;
    height:100%
  }
`

export {AdminLayout,PrivateLayout,PublicLayout}
