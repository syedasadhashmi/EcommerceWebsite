import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Details from "./components/users/Details";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "./pages/Cart";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div>
            <Navbar />
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/Cart">
                  <Cart />
                </Route>
                <Route exact path="/Login">
                  <Login />
                </Route>
                <Route exact path="/Register">
                  <Register />
                </Route>
                <Route exact path="/Details/:id">
                  <Details />
                </Route>
              </Switch>
            </div>
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
