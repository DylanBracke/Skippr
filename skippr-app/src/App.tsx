import React, { lazy } from 'react';
import logo from './logo.svg';
import './App.scss';
const Home = lazy(() => import( './pages/home'));

function App() {
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;
