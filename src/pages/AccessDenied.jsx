import React from 'react'

export default function AccessDenied () {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Acceso Denegado</h1>
        <p className="text-gray-600">Lo sentimos, no tienes permisos para acceder a esta página.</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">Volver a la página de inicio</a>
      </div>
    </div>
  );
};

