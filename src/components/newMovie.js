import React, {Component} from 'react'
import Navbar from './Navbar';
import axios from 'axios'

class newMovie extends Component{

   constructor(props){
       super(props);
       this.state = {
        nombre:undefined,
        duracion:undefined,
        clasificacion:"G",
        genero:"Comedia",
        director:undefined,
        sinopsis:undefined,
        premios:undefined,
        anio:undefined,
        portada:undefined,
        actores:undefined,
        video:undefined,
       }
   }

   onInputChange=(e)=>{
    // console.log("Ejecute el onInputChange")
    // console.log(e.target.name)
    // console.log(e.target.value)
    if(e.target.name == "nombre"){
        //console.log('target es igual a name')
        this.setState({
            nombre:e.target.value
        })
    }else if(e.target.name == 'duracion'){
        //console.log('target es igual a name')
        this.setState({
            duracion:e.target.value
        })
    }else if(e.target.name == 'clasificacion'){
        this.setState({
            clasificacion:e.target.value
        })
    }else if(e.target.name == 'genero'){
      this.setState({
          genero:e.target.value
      })
    }else if(e.target.name == 'director'){
      this.setState({
          director:e.target.value
      })
    }else if(e.target.name == 'sinopsis'){
      this.setState({
          sinopsis:e.target.value
      })
    }else if(e.target.name == 'premios'){
      this.setState({
          premios:e.target.value
      })
    }else if(e.target.name == 'anio'){
      this.setState({
          anio:e.target.value
      })
    }else if(e.target.name == 'portada'){
      this.setState({
          portada:e.target.value
      })
    }else if(e.target.name == 'actores'){
      this.setState({
          actores:e.target.value
      })
    }else{
        this.setState({
            video:e.target.value
        })
    }
}

onSubmit=(e)=>{
    console.log("Desde el submit",this.state)   
    e.preventDefault()
    var json = {
        nombre:this.state.nombre,
        duracion:this.state.duracion,
        clasificacion:this.state.clasificacion,
        genero:this.state.genero,
        director:this.state.director,
        sinopsis:this.state.sinopsis,
        premios:this.state.premios,
        anio:this.state.anio,
        portada:this.state.portada,
        actores:this.state.actores,
        video:this.state.video
    }   
    
    if(this.state.nombre == undefined){
        alert("Llene todos los campos1")
    }else if(this.state.duracion == undefined){
        alert("Llene todos los campos2")
    }else if(this.state.director == undefined){
        alert("Llene todos los campos3")
    }else if(this.state.sinopsis == undefined){
        alert("Llene todos los campos4")
    }else if(this.state.premios == undefined){
      alert("Llene todos los campos5")
    }else if(this.state.anio == undefined){
      alert("Llene todos los campos6")
    }else if(this.state.portada == undefined){
      alert("Llene todos los campos7")
    }else if(this.state.actores == undefined){
      alert("Llene todos los campos8")
    }else if(this.state.video == undefined){
      alert("Llene todos los campos9")
    }else{
        axios.post('https://imdevroja.herokuapp.com/api/v1/peliculas/create',json).then(articulo => {
            alert("Creaste la pelicula: ",json)
            console.log("Creaste la pelicula: ",json)
        }).catch(err=>{
            console.log(err)
            alert("lo siento existe un problema")
        })
    }

      
}


   render(){
       return (
           <div className="newMovie">
           <Navbar/>
           <div className="container">
           <form onSubmit={this.onSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Nombre</label>
                  <input name="nombre" type="text" className="form-control" id="inputEmail4" placeholder="Iron Man"
                  onChange={this.onInputChange}>
                  </input>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Duracion</label>
                  <input name="duracion" type="number" className="form-control" id="inputPassword4" placeholder="120 min.."
                  onChange={this.onInputChange}>
                  </input>
                </div>
              </div>
              <div className="form-group col-md-4">
                  <label for="inputState">Clasificacion</label>
                  <select name="clasificacion" id="inputState" className="form-control"
                  onChange={this.onInputChange} value={this.state.value}>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="14A">14A</option>
                    <option value="R">R</option>
                    <option value="A">A</option>
                  </select>
                </div>
              <div className="form-group">
                <label for="inputAddress2">Sinopsis</label>
                <input name="sinopsis" type="text" className="form-control" id="inputAddress2" placeholder="Un empresario (Robert Downey Jr.) millonario construye un traje blindado...."
                onChange={this.onInputChange}>
                </input>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">Director</label>
                  <input name="director" type="text" className="form-control" id="inputCity"
                  onChange={this.onInputChange}>
                  </input>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">Genero</label>
                  <select name="genero" id="inputState" className="form-control"
                  onChange={this.onInputChange} value={this.state.value}>
                    <option value="Comedia">Comedia</option>
                    <option value="Accion">Accion</option>
                    <option value="Porno">Porno</option>
                    <option value="...">...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Premios</label>
                  <input name="premios" type="text" className="form-control" id="inputZip"
                  onChange={this.onInputChange}>
                  </input>
                </div>
                </div>
              <div className="form-group">
                <label for="inputAddress2">Ano de lanzamiento</label>
                <input name="anio" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                onChange={this.onInputChange}>
                </input>
              </div>
              <div className="form-group">
                <label for="inputAddress2">Link de portada</label>
                <input name="portada" type="text" className="form-control" id="inputAddress2" placeholder="URL"
                onChange={this.onInputChange}>
                </input>
              </div>
              <div className="form-group">
                <label for="inputAddress2">Actores</label>
                <input name="actores" type="text" className="form-control" id="inputAddress2" placeholder="Pedro Aguirre, Alan Contreras"
                onChange={this.onInputChange}>
                </input>
              </div>
              <div className="form-group">
                <label for="inputAddress2">Video</label>
                <input name="video" type="text" className="form-control" id="inputAddress2" placeholder="URL"
                onChange={this.onInputChange}>
                </input>
              </div>
              <button type="submit" className="btn btn-primary">Agregar Pelicula</button>
            </form>
           </div>
           </div>
       )
   }
}

export default newMovie