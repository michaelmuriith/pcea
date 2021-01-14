import React from 'react';
import ReactDOM from 'react-dom';
import Global from './Global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Banner, Footer, Navbar } from './Components';
import Home from './pages/Home/Home';
import Service from './pages/Sermon/Sermon';



function App() {
  return (
    <Router>
      <Navbar />
      <Global />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Sermons" exact component={Service} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
