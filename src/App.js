import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Landing = lazy(() => import("./component/Landing/LandingPage"));
const Contact = lazy(() => import("./component/Landing/Contact"));
const About = lazy(() => import("./component/Landing/About"));
const Signin = lazy(() => import("./component/Authentication/Signin"));
const Signup = lazy(() => import("./component/Authentication/Signup"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
