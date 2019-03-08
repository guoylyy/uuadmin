/**
 * The Definition of Router 
 * 
 * 1. Define the Entance of each page 
 * 2. Define the user defined routers
 * 
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";

// Business Relative
import * as serviceWorker from './serviceWorker';
import Store from "./js/store/main";

// Styles
import "./style/reset.scss";

import Me from './js/view/me/me.page';
import Car from './js/view/me/car.page';
import Coupon from './js/view/me/coupon.page';
import Rating from './js/view/me/rating.page';

//  @functiona If you want your app to work offline and load faster, you can change
//             unregister() to register() below. Note this comes with some pitfalls.
//  @more      Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * @Note: For V4 Router
 * Routers fro React Router V4
 *  1. This too much changes from V3
 *. 2. Directly use Component's name in father route
 */
ReactDOM.render((
    <Provider {...Store}>
      <BrowserRouter>
      	<Me>
        	<Route path='/me/car' component={Car}/>
        	<Route path='/me/coupon' component={Coupon}/>
        	<Route path='/me/rating' component={Rating}/>
        </Me>
      </BrowserRouter>
    </Provider>),
  document.getElementById('root')
);


