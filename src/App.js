import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar1 from './Components/navbar';
import NotFound from './Components/NotFound';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Profile from './Components/Profile';

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/home')), 2000);
  });
});
const Register = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Register')), 2000);
  });
});
const Login = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Login')), 2000);
  });
});
const About = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/About')), 2000);
  });
});
const AddProduct = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/AddProduct')), 2000);
  });
});
const ProdDetails = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/ProdDetails')), 2000);
  });
});
const ProdLog = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/ProdLog')), 2000);
  });
});
const Cust = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Cust')), 2000);
  });
});
export default class App extends React.Component {
  render() {
    return (<>
      <ToastContainer />


      <Switch>
        <Route exact path="/" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <Home />
          </Suspense>
        )} />
        <Route exact path="/home" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <Home />
          </Suspense>
        )} />
        <Route exact path="/about" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <About />
          </Suspense>
        )} />
        <Route exact path="/add" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <AddProduct />
          </Suspense>
        )} />
        <Route exact path="/editProduct/:id" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <AddProduct />
          </Suspense>
        )} />
        <Route exact path="/prodDetails/:id" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <ProdDetails />
          </Suspense>
        )} />
        <Route exact path="/prodLog" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <ProdLog />
          </Suspense>
        )} />
        <Route exact path="/cust" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <Cust />
          </Suspense>
        )} />
        <Route exact path="/signup" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <Register />
          </Suspense>
        )} />
        <Route exact path="/login" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <Login />
          </Suspense>
        )} />
        <Route exact path="/profile" component={() => (
          <Suspense fallback={<div id="center1">Loading...</div>}>
            <Navbar1 />
            <Profile />
          </Suspense>
        )} />
        <Route path="*" component={NotFound} />
      </Switch>

    </>
    )
  }
}
