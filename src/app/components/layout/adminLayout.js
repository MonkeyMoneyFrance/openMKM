import React from 'react';
import AdminHeader from "../header/adminHeader";
import {AdminLayout as Layout} from './layout'

const AdminLayout = ({ children, ...rest }) => {
    return (
      <Layout>
        <AdminHeader />
        <div className='content'>
        {children}
        </div>
      </Layout>
    )
  }

export default AdminLayout;
