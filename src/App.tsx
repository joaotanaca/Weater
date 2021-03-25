import React from 'react';
import Navbar from './components/Navbar';
import Preload from './components/Preload';
import Home from './pages/Home';
import Global from './utils/styles/global';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <Navbar />
      <Home />
      <Preload />
    </>
  );
}

export default App;
