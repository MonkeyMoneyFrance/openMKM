import React from "react";
import { shallow, mount } from "enzyme";
import {Cotisation,mapStateToProps} from './cotisation'
import delay from 'redux-saga'
import configureStore from 'redux-mock-store'

const mockStore = configureStore();
const mockLoginfn = jest.fn();
// const getCotisations =
describe('Cotisation',()=>{
  let store;
  let wrapper;
  beforeEach(() => {  //creates the store with any initial state or middleware needed
    store = mockStore({cotisations:[{id:1,name:'Cotisation1'}]})
    wrapper = shallow(<Cotisation getCotisations={mockLoginfn} store={store}/>)
 })
  it('renders',()=>{
    const cotisation = mount(<Cotisation getCotisations={jest.fn()} />);
    expect(cotisation.exists()).to.equal(true);
    expect(cotisation.find('h2')).to.have.lengthOf(1);
    console.log(cotisation.find('span'))
    expect(cotisation.find('span')).to.have.lengthOf(0);
  })
  it('mapStateToProps',()=>{
    const cotisation = mount(<Cotisation getCotisations={jest.fn()} store={store} />);
    // const sampleCotisation = [{id:1,name:'Cotisation1'}]
    // const state = {cotisations:sampleCotisation};
    // const props = {};
    // const componentState = mapStateToProps(state,props)
    // expect(componentState).toEqual(state);
    console.log(wrapper.props().cotisations)
    expect(cotisation.find('span')).to.have.lengthOf(1);
  })
})
