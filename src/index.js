import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Cart from './pages/cart/cart';
import Login from './pages/Signin/Signin';
import Register from './pages/Signup/Signup';
import Wallet from './pages/Wallet/Wallet';
import Catlog from './pages/Catlog/Catlog'
import 'preline';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path=''element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='catlog/' element={<Catlog/>}>
       <Route path='?q=:catlog' element={<Catlog/>}/>
      </Route>
      <Route path='cart' element={<Cart/>}/>
      <Route path='wallet' element={<Wallet/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
