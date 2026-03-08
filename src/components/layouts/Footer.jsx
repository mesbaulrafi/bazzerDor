import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-200 text-center py-6 mt-4">
      <p className="font-bold text-white text-lg mb-1">চাসি বাজার 🌿</p>
      <p className="text-sm opacity-70">প্রতিদিনের বাজারের দর — আপনার পাশে সবসময়</p>
      <p className="text-xs opacity-50 mt-2">© {new Date().getFullYear()} Chassi Bajder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;