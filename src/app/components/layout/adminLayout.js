import React from 'react';
import AdminHeader from "../header/adminHeader";
import {AdminLayout as Layout} from './layout'
import UnderMenu from "../header/underMenu";
const AdminLayout = ({ children, ...rest }) => {

    return (
      <Layout>
        <AdminHeader {...rest.location}  key={'header'}/>
        <UnderMenu  {...rest.location} key={'undermenu'} />
        <div className='content'>
          {children}
        </div>
      </Layout>
    )
  }

export default AdminLayout;
