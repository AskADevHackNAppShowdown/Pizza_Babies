import React , { Component } from 'react';
import './App.css';
import Router from '../src/components/Router';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';


export default class App extends Component {
  render(){
  return (

    <BrowserRouter>
    <h1>hello</h1>
    <Header/>
    <Router/>
    
    </BrowserRouter>
  );
  }
}




    

