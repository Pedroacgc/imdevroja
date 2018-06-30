import React, {Component} from 'react'
import Navbar from './Navbar'
import Movie from './Movie'
import axios from 'axios'

class Home extends Component{

   constructor(props){
       super(props);
       this.state={
        movies:[]
       }
   }

   componentDidMount(){
    axios.get('https://imdevroja.herokuapp.com/api/v1/peliculas')
     .then(response =>{
       this.setState({
         movies:response.data
       })
     })
     .catch(err => console.log(err))
   }
 
 
    updateMovie(){
     if (this.state.movies.length == 0){
       return <div className ="loader centro"></div>
     }else{
       return this.state.movies.map(element =>{
         return <Movie _id={element._id} nombre={element.nombre} anio={element.anio} sinopsis={element.sinopsis} portada={element.portada} genero={element.genero}/>
       })
       
     }
     }

   render(){
       return (
           <div className='Home'>
           <Navbar/>
            <div className="peliculas">peliculas</div>
            <div className='row'>{this.updateMovie()}</div>

        
            </div>
           
       )
   }
}

export default Home