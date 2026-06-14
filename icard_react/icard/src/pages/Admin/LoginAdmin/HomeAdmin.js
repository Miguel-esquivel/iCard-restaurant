import React from 'react';
import { useAuth } from "../../../hooks";


export function HomeAdmin() {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Bienvenido al panel de administración</h1>
      <button onClick={logout}>Cerrar sesion</button>
    </div>
  )
}
