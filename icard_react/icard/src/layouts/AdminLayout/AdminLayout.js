import React from 'react';
import { LoginAdmin } from "pages/Admin/LoginAdmin"
import { useAuth } from 'hooks/useAuth';
import './AdminLayout.scss';
import { TopMenu, SideMenu } from "../../components/Admin";


export function AdminLayout(props) {
  const { children } = props;
  //console.log(useAuth())
  //const auth = null; // TODO: get auth from context or props  
  
  const {auth} = useAuth();
  if (!auth) return <LoginAdmin />;

  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu />
        </div>
      <div className="main-content">
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  );
}
