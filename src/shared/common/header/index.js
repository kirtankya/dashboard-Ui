import React, { useEffect } from 'react';
import './header.scss';

export default function Header() {

  useEffect(() => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    const handleClick = () => {
      sidebar.classList.toggle('close');
      if (sidebar.classList.contains('close')) {
        localStorage.setItem('status', 'close');
      } else {
        localStorage.setItem('status', 'open');
      }
    };

    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', handleClick);
    }

    return () => {
      if (sidebarToggle) {
        sidebarToggle.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <header>
    </header>
  );
}
