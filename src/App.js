import React from 'react';
import HomePage from './components/home/homePage';
import './App.css';
import AboutPage from './components/about/aboutPage';
import ShoePage from './components/shoes/shoePage';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/common/navbar';
import CreateShoes from './components/shoes/createShoes';

function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Switch>
        <Route path='/about' component={AboutPage} />
        <Route path='/shoes' component={ShoePage} />
        <Route path='/shoes/create' component={CreateShoes} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
