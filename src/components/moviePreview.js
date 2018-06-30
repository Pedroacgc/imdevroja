import React, {Component} from 'react'
import Navbar from './Navbar';
import MovieFile from './MovieFile';
//import Comments from './Comments'
import axios from 'axios'


class moviePreview extends Component{

   constructor(props){
       super(props);
       this.state={
        movies:undefined
       }
   }

   componentDidMount(){
    axios.get('https://imdevroja.herokuapp.com/api/v1/peliculas/'+this.props.match.params.uid)
     .then(response =>{
       console.log(response.data)
       this.setState({
         movies:response.data
       })
     })
     .catch(err => console.log(err))
   }

   updateMovie(){
    console.log(this.state.movies)
   if (this.state.movies == undefined){
     return <div className ="loader centro"></div>
   }else{
       return <MovieFile nombre={this.state.movies.nombre} 
                          duracion={this.state.movies.duracion}
                          director={this.state.movies.director}
                          genero={this.state.movies.genero}
                          actores={this.state.movies.actores}
                          premios={this.state.movies.premios}
                          clasificacion={this.state.movies.clasificacion}
                          anio={this.state.movies.anio} 
                          sinopsis={this.state.movies.sinopsis} 
                          portada={this.state.movies.portada}
                          video={this.state.movies.video}/>
    
   }
   }


   render(){
       return (
        <div>
        <div>
        <Navbar/>
        </div>
         <div>
           
           
           <div>{this.updateMovie()}</div>
           

        </div>
        </div>
       )
   }
}

export default moviePreview