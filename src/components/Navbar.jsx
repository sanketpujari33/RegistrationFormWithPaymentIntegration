import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline"> One Page</Link>
          <Link to="/second" className="hover:underline">Two Page</Link>
        </div>
      </div>
    </nav>
  );
}
