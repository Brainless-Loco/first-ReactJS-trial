import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import './components/Common css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
              <Shop></Shop>
          </Route>
          <Route path="/review">
              <Review></Review>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
