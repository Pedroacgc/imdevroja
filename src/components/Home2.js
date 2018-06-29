import React, {Component} from 'react'
import Navbar from './Navbar'
import Movie from './Movie'
import axios from 'axios'

class Home2 extends Component{

  constructor(props){
      super(props);
      this.state={
       movies:[]
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
    if (this.state.movies.length == 0){
      return <div className ="loader centro"></div>
    }else{
      return this.state.movies.map(element =>{
        return <Movie nombre={element.nombre} anio={element.anio} sinopsis={element.sinopsis} portada={element.portada}/>
      })
     
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