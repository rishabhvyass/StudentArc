import React from 'react';
import Topbar from '../layout/Topbar';
import Sidebar from '../layout/sidebar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="admin-layout-container">
        <Sidebar />
        <main className="admin-main-content">
          {children}
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
