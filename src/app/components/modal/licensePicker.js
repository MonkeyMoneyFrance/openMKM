import React , {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


let Main = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  z-index:2;
  .background {
    background: rgba(0, 0, 0, 0.8);
   position: fixed;
   z-index:1;
   display: block;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
 }
`

let Input = styled.input`
  text-align:right;
  color : ${props => props.excess ? 'red' : 'black'}
  font-size:20px;
  padding : 6px;
  flex:1;
`
let Button = styled.button`
  background-color : yellow;
  margin-left:5px;
  height:100%;
  width: 150px;
  font-size:18px;
`

let Content  = styled.div`
  position:relative;
  background-color : white;
  max-width:600px;
  border : 1px solid black;
  text-align:left;
  border-radius : 2px;
  z-index:3;
  padding : 1em;
`

function LicenseInput(props){
  const [number,setNumber] = useState('')
  const onChange = (e) => setNumber(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault() // do not refresh
    isNaN(number) || number <= 0 ? void 0 : props.onSubmit(parseFloat(number)) // only submit numbers
  }

  return(
  <Main>
    <div
      className={`background`}
      onClick={props.close}
    />
    <Content>
      <p className='p1'>Invest in Loan</p>
      <div className='subtitle'>{title}</div>
      <div className='detailInvest'>
        <p>Available For Investment : £{(available||0).toLocaleString('en-EN')}</p>
        <p>Amount Remaining in Wallet : £{(remaining||0).toLocaleString('en-EN')}</p>
        <p></p>
      </div>
      <form className='detailInvest' onSubmit={onSubmit} >
          <p className='label'><label>Invested Amount (£)</label></p>
          <div className='formField'>
            <Input
              excess={number > Math.min(available,remaining)} // change color of input if exceed available amount
              placeholder={'Enter an amount'}
              autoFocus
              type="number"
              onChange={onChange}
              value={number}/>
            <Button type='submit'>INVEST</Button>
          </div>
      </form>
    </Content>

  </Main>
  )
}
LicenseInput.propTypes = {
  term_remaining :PropTypes.number,
  title : PropTypes.string,
  remaining : PropTypes.number,
  available :PropTypes.number,
  onSubmit : PropTypes.func,
  close : PropTypes.func
};
export default LicenseInput
