import React, {Component} from 'react'
import Navbar from './Navbar';
import Comments from './Comments'


class moviePreview2 extends Component{

   constructor(props){
       super(props);
   }

   render(){
       return (
         <div>
          <div>
          
    <div class="container">
      <h1 class="my-4">Iron Man
        <small> 2008 </small>
      </h1>

     
      <div class="row">

        <div class="col-md-8">
          <img class="img-fluid" src="https://m.media-amazon.com/images/M/MV5BMTI3NzYxMDEwNV5BMl5BanBnXkFtZTcwMTkxNzYyMw@@._V1_SY500_CR0,0,750,500_AL_.jpg" alt=""/>
        </div>

        <div class="col-md-4 info2">
          <h3 class="my-3">Iron Man</h3>
          <p><div className = "titulomoviep">Sinopsis:</div>Un empresario (Robert Downey Jr.) millonario construye un traje blindado y lo usa para combatir al crimen y al terrorismo.</p>
          <h2 class="my-3 info">Info</h2>
          
                <h6>Duracion:{this.props.duracion}</h6>
                 <h6>Director:{this.props.director}</h6>
                 <h6>Genero:{this.props.duracion}</h6>
                 <h6>Actores:{this.props.duracion}</h6>
                 <h6>Premios:{this.props.duracion}</h6>
                 <h6>Clasificacion:{this.props.duracion}</h6>
                 <h6>Sinopsis:{this.props.duracion}</h6>
                 <h6>Ano de lanzamiento:{this.props.duracion}</h6>
          
        </div>

      </div>

     </div>
     
     <Comments />
     
     </div>
     </div>
       )
   }
}

export default moviePreview2