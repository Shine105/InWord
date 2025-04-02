import React from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next-Gen Book Platform',
  description: 'A platform for personalized reading tracking and social engagement.',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;