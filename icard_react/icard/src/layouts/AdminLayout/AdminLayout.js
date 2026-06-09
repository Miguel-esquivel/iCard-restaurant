import React from 'react';
import { LoginAdmin } from "../../pages/Admin/LoginAdmin"
import './AdminLayout.scss';

export function AdminLayout(props) {
  const { children } = props;
  const auth = null; // TODO: get auth from context or props  

  if (!auth) return <LoginAdmin />;

  return (
    <div>
      <p>AdminLayout</p>
      {children}    
    </div>
  )
}
