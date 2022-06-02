import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Fleet from './pages/fleet'
import Gear from "./pages/gear";
import Contact from './pages/contact';
import Icons from "../helpers/icons";
import Footer from '../components/footer';



const App = () => {
  Icons();

  return (

    <div className="container">
      <Router>
        <div>
        <Navbar />
          <Switch>
            
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/fleet" component={Fleet} />
          <Route path="/gear" component={Gear} />
          <Route path="/cart" component={Cart} />
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
