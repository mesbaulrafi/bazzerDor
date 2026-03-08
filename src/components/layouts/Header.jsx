import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🏪</span>
          <Link to="/" className="text-xl font-bold hover:text-green-100">
            চাসি বাজার
          </Link>
        </div>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-green-100 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-100 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;