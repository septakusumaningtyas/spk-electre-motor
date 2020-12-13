import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
//import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Konsultasi from "views/Konsultasi/Konsultasi.js";
import History from "views/History/History.js";
import Kontak from "views/Kontak/Kontak.js";
import Hasil from "views/Hasil/Hasil.js";
// import LoginPage from "views/LoginPage/LoginPage";
// import LandingPageLogin from "views/LandingPage/LandingPageLogin";
//import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  // <Router history={hist}>
  //   <Switch>
  //     <Route path="/" component={LandingPage} />
  //     <Route path="/Konsultasi" component={Konsultasi} />
  //   </Switch>
  // </Router>,
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/Konsultasi" component={Konsultasi} />
      <Route path="/History" component={History} />
      <Route path="/Kontak" component={Kontak} />
      <Route path="/Hasil" component={Hasil} />
      {/* <Route path="/Login" component={LoginPage} />
      <Route path="/LandingPageLogin" component={LandingPageLogin} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
