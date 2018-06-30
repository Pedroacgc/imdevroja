import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import './App.css';
import axios from 'axios'
import newMovie from './components/newMovie';
import Home from './components/Home';
import Home2 from './components/Home2';
import {BrowserRouter, Route} from 'react-router-dom';
import moviePreview from './components/moviePreview';
import Login from './components/Login'

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
       <Route exact path="/movieSearch/:uid" component={Home2}/>
       <Route exact path="/moviep/:uid" component={moviePreview}/>
       <Route exact path="/Login" component={Login}/>

      </main>
  </BrowserRouter>   
  
  )
 }
}

export default App;