import React from 'react'

export default function GenericModal({ isOpen, toggle, children }) {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="fixed inset-0 flex items-center justify-center min-h-screen p-4">
        <div
          className="absolute inset-0 z-40"
          style={{
            background: 'rgba(0, 0, 0, 0.5)', // Fondo oscurecido con opacidad
          }}
          onClick={toggle}
        ></div>
        <div className="bg-white w-full max-w-md p-4 rounded border border-gray-300 shadow-md relative z-50">
          <button
            className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800"
            onClick={toggle}
          >
            &#215;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
