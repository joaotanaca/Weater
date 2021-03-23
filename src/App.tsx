import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Global from './utils/styles/global';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
