import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {HomePage}  from './pages/homepage/homepag.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';



function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;