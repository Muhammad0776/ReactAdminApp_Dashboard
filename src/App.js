import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Transaction from "./components/transaction/WidgetLg";
import Analytics from "./pages/analytics/Analytics";
import Sales from "./pages/sales/Sales";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="d-flex">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/transactions">
            <Transaction />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
