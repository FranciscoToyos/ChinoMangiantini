import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//Context
import ContenidoState from '../context/contenido/ContenidoState'

// Components
import { Navigator } from "./Navigator/Navigator";

// Pages
import { Cinema } from "../Pages/Cinema";
import { Directing } from "../Pages/Directing";
import { Home } from "../Pages/Home";
import { Podcast } from "../Pages/Podcast";
import { Videoclip } from "../Pages/Videoclip";

import tokenAuth from "../config/token";
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
      <ContenidoState>
        <Switch>
          <Route path="/podcast" component={Podcast} />
        </Switch>
        <Switch>
          <Route path="/videoclip" component={Videoclip} />
        </Switch>
        <Switch >
          <Route  path='/directing' component={Directing}/>
        </Switch>
        <Switch >
          <Route  path='/cinematography' component={Cinema}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ContenidoState>
      </Router>
    </div>
  );
}

export default App;
