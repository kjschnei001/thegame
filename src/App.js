import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplashForm from './components/SplashPage/SplashForm';
import CardMedia from '@material-ui/core/CardMedia';


function App() {
  return (
    <div className="App">
      <CardMedia
        image="background.jpg"
      >
        <SplashForm/>
      </CardMedia>
    </div>
  );
}

export default App;
