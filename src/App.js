import logo from "./logo.svg";
import "./App.css";
import Maincomponents from "./compontents/Body/Maincomponents";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./compontents/About";
import Contact from "./compontents//Contact/Contact";
import Nav from "./compontents/Header/Nav";
import Footer from "./compontents/Footer/Footer";
import Tst from "./compontents/Tst";
import ContactInfo from "./compontents/Contact/ContactInfo";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Maincomponents />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <Tst />
          </Route>
          <Route path="/userinfo">
            <ContactInfo />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
