import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'


function App() {
  return (
    <div className="App">



<Switch>
          
          
      <Route 
      exact path={`/`} 
      render={ (routerProps
      ) => < Homepage/>} />
          

          <Route
            exact
            path="/Services"
            render={() => (
              <Services
              />
            )}
          />

          <Route
            exact
            path="/Contact"
            render={() => (
              <Contact
              />
            )}
          />

        <Route
            exact
            path="/About"
            render={() => (
              <About
              />
            )}
          />

          
              
              </Switch>

    </div>
  );
}

export default App;
