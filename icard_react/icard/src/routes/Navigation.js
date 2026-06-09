import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

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
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}