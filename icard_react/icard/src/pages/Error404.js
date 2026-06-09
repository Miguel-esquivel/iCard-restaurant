import React from 'react';
import { Link } from 'react-router-dom';

export function Error404() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        color: '#fff',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        <h1
          style={{
            fontSize: '10rem',
            fontWeight: '900',
            margin: 0,
            background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Página no encontrada
        </h2>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2rem',
          }}
        >
          La página que intentas visitar no existe, fue eliminada o la URL es incorrecta.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/"
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              background: '#3b82f6',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '600',
              transition: '0.3s',
            }}
          >
            🏠 Volver al inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              border: '1px solid #64748b',
              background: 'transparent',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            ← Regresar
          </button>
        </div>

        <div
          style={{
            marginTop: '3rem',
            fontSize: '4rem',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          🚀
        </div>
      </div>
    </div>
  );
}