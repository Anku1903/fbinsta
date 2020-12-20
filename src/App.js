import React,{useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './comps/Home';
import Instagram from './comps/Instagram';
import Youtube from './comps/Youtube';
const App = () => {

  return(  
    <>
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/insta" component={Instagram} />
    <Route exact path="/youtube" component={Youtube} />
  </Switch>
</BrowserRouter>
    </>
       ); 
  }

export default App;