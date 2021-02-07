import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Landing = lazy(() => import("./component/Landing/LandingPage"));
const Contact = lazy(() => import("./component/Landing/Contact"));
const About = lazy(() => import("./component/Landing/About"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
