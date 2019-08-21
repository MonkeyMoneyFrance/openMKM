import React from 'react';
import PrivateHeader from "../header/privateHeader";
import {PrivateLayout as Layout} from './layout'
import UnderMenu from "../header/underMenu";
const PrivateLayout = ({ children, ...rest }) => {

    return (
      <Layout>
        <PrivateHeader {...rest.location}  key={'header'}/>
        <UnderMenu  {...rest.location} key={'undermenu'} />
        <div className='content'>
          {children}
        </div>
      </Layout>
    )
  }

export default PrivateLayout;
