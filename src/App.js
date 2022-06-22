import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Details from "./components/users/Details";
import Home from "./pages/Home";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  // const obj = [
  //   {
  //     id: 1,
  //     name: "Nike Air",
  //     brandCode: 2312,
  //     description: "For Runing",
  //     price: "$120",
  //   },
  //   {
  //     id: 2,
  //     name: "Nike Jordon",
  //     brandCode: 22,
  //     description: "For Casual Wearing",
  //     price: "$80",
  //   },
  // ];
  return (
    <Router>
      {/* {obj.map((items) => (
        <div key={items.id}>
          <h1>{items.name}</h1>
          <Link to={`/Details/${items.id}`} props={items.description}>
            <button>Details</button>
          </Link>
        </div>
      ))} */}
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
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
    </Router>
  );
}

export default App;
