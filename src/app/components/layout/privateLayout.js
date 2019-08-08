import React from 'react';
import PrivateHeader from "../header/privateHeader";
import {PrivateLayout as Layout} from './layout'
const PrivateLayout = ({ children, ...rest }) => {
    return (
      <Layout>
        <PrivateHeader />
        <div className='content'>
          {children}
        </div>
      </Layout>
    )
  }

export default PrivateLayout;
