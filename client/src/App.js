import React from 'react';
import './App.css';
import './index.css';
import { AppRouter } from './routers/AppRouter';
import { NavbarSlide } from './components/shared/NavBarSlide/NavbarSlide';

function App() {
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;
