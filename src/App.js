import React from 'react';
import HomePage from './components/home/homePage';
import './App.css';
import AboutPage from './components/about/aboutPage';
import PaperPage from './components/paper/paperPage';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/common/navbar';

function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Switch>
        <Route path='/about' component={AboutPage} />
        <Route path='/papers' component={PaperPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
