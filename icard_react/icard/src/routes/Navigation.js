import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // 👈 Navigate
import routes from "./routes";
import { useAuth } from "hooks/useAuth";

function PrivateRoute({ children }) {
  const { auth, isLoading } = useAuth();

  if (isLoading) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      Cargando...
    </div>
  );

  if (!auth) return <Navigate to="/login" />;

  return children;
}

export function Navigation() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Layout = route.layout || React.Fragment;
          const Component = route.component;

          if (!Component) return null;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? ( // 👈 solo rutas marcadas como protected
                  <PrivateRoute>
                    <Layout>
                      <Component />
                    </Layout>
                  </PrivateRoute>
                ) : (
                  <Layout>
                    <Component />
                  </Layout>
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}