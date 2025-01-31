import React, { useState, useEffect } from 'react';
import './App.css';
import Leftbar from './ui/Leftbar';
import Dashboard from './ui/Dashboard';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme-link';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const link = document.getElementById('theme-link');
    if (theme === 'light') {
      link.href = `${process.env.PUBLIC_URL}/light-theme.css`;
    } else if (theme === 'dark') {
      link.href = `${process.env.PUBLIC_URL}/dark-theme.css`;
    }
  }, [theme]);

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  return (
    <div className="wrapper">
      <Leftbar onThemeChange={handleThemeChange} />
      <Dashboard />
    </div>
  );
}

export default App;