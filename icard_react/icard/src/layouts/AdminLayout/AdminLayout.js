import React from 'react';
import { LoginAdmin } from "../../pages/Admin/LoginAdmin"
import { useAuth } from '../../hooks/useAuth';
import './AdminLayout.scss';

export function AdminLayout(props) {
  const { children } = props;
  //console.log(useAuth())
  //const auth = null; // TODO: get auth from context or props  
  
  const {auth} = useAuth();
  if (!auth) return <LoginAdmin />;

  return (
    <div>
      <p>AdminLayout</p>
      {children}    
    </div>
  )
}
