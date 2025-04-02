import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Next-Gen Book Platform. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;