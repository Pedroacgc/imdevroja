import React, {Component} from 'react'
import Commments from './Comments';


class MovieFile extends Component{

   constructor(props){
       super(props);
   }

   render(){
    var youtube = this.props.video   
    var link= youtube.replace("watch?v=", "embed/");
       return (
        <div>
        <div>
        
  <div class="container">
    <h1 class="my-4">{this.props.nombre}
      <small> {this.props.anio}</small>
    </h1>

   
    <div class="row">

      <div class="col-md-8">
      <iframe width="750" height="500" src={link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

      <div>
      <Commments nombre={this.props.nombre}
                         duracion={this.props.duracion}
                         director={this.props.director}
                         genero={this.props.genero}
                         actores={this.props.actores}
                         premios={this.props.premios}
                         clasificacion={this.props.clasificacion}
                         anio={this.props.anio}
                         sinopsis={this.props.sinopsis}
                         portada={this.props.portada}
                         video={this.props.video}/>
    </div>
      </div>

      <div class="col-md-4 info2">
        <h3 class="my-3">{this.props.nombre}</h3>
        <p><div className = "titulomoviep">Sinopsis:</div>{this.props.sinopsis}</p>
        <h2 class="my-3">___________________ </h2>
        
                 <h4>Duracion:<h6> {this.props.duracion}</h6></h4>
                 <h4>Director: <h6>{this.props.director}</h6></h4>
                 <h4>Genero: <h6>{this.props.genero}</h6></h4>
                 <h4>Actores: <h6>{this.props.actores}</h6></h4>
                 <h4>Premios: <h6>{this.props.premios}</h6></h4>
                 <h4>Clasificacion: <h6>{this.props.clasificacion}</h6></h4>
                 <h4>Sinopsis: <h6>{this.props.sinopsis}</h6></h4>
                 <h4>Ano de lanzamiento:<h6> {this.props.anio}</h6></h4>
        
      </div>

    </div>

   </div>
   
   </div>
   </div> 
       )
   }
}

export default MovieFile