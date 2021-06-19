import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Transfer from "./components/Transfer/Transfer";
import User from "./components/User/Users";
import UserProfile from "./components/UserProfile/UserProfile";
import History from './components/History/History';
import Contact from './components/Contact/Contact';
import Customer from './components/Customer/Customer';
import OpenAccount from "./components/Home/OpenAccount";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/create-account"><OpenAccount /></Route>
        <Route path="/users" exact><User /></Route>
        <Route path="/history" ><History /></Route>
        <Route path="/users/:userId" exact><UserProfile /></Route>
        <Route path="/users/transfer/:userId" > <Transfer /> </Route>
        <Route path="/customer"><Customer /></Route>
        <Route path="/contact"><Contact/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
