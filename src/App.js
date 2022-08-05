import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import { BrowserRouter ,Routes,Route } from "react-router-dom"
import React, { Component, useEffect }  from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment';
import Orders from './Orders';

const promise = loadStripe("pk_test_51LIIurERBnS58yi6ACvoCtvBchxJvQ4McVeV4f4yAy2Oc3syMSPeZHX5lSVc6NWiomqTMtgmnsmHDgtluxVSd0Fz00ID9MLgH1"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
   <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Orders" element={<Orders />} />
         <Route path="/payment" element= {<Elements stripe={promise}><Payment /> </Elements>}>

         </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
         </Routes>
    </div>
  </BrowserRouter>





  );
}

export default App;
