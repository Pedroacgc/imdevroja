import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import './App.css';
import axios from 'axios'
import newMovie from './components/newMovie';
import Home from './components/Home';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

 constructor(){
   super();
   this.state = {
     cards:[],
   }  

 }


   
  


 render() {

   return (
  
   <BrowserRouter>
     <main>
       <Route exact path="/" component={Home}/>
       <Route exact path="/newMovie" component={newMovie}/>
       <Route exact path="/movie" component={Movie}/>
      </main>
  </BrowserRouter>   
  
  )
 }
}

export default App;