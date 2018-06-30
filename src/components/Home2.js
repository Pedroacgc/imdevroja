import React, {Component} from 'react'
import Navbar from './Navbar'
import Movie from './Movie'
import axios from 'axios'

class Home2 extends Component{

  constructor(props){
      super(props);
      this.state={
       movies:undefined
      }
  }

  componentDidMount(){
   axios.get('https://imdevroja.herokuapp.com/api/v1/buscarpelicula/'+this.props.match.params.uid)
    .then(response =>{
      this.setState({
        movies:response.data
      })
    })
    .catch(err => console.log(err))
  }


   updateMovie(){
     console.log(this.state.movies)
    if (this.state.movies == undefined){
      return <div className ="loader centro container"></div>
    }else{
        return <Movie _id={this.state.movies._id} nombre={this.state.movies.nombre} anio={this.state.movies.anio} sinopsis={this.state.movies.sinopsis} portada={this.state.movies.portada}/>
     
    }
    }

  render(){
      return (
          <div className='Home'>
          <Navbar/>
           <div className='row'>{this.updateMovie()}</div>

       
           </div>
         
      )
  }
}

export default Home2