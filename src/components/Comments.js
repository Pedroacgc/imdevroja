import React, {Component} from 'react'
import Navbar from './Navbar';
import { Redirect } from 'react-router'
import axios from 'axios'


class Commments extends Component{

   constructor(props){
       super(props);
       this.state = {
        estrellas:undefined,
        comentarios:undefined,
        fecha:undefined,
        nombre:this.props.nombre,
                duracion:this.props.duracion,
                clasificacion:this.props.clasificacion,
                genero:this.props.genero,
                director:this.props.director,
                sinopsis:this.props.sinopsis,
                premios:this.props.premios,
                anio:this.props.anio,
                portada:this.props.portada,
                actores:this.props.actores,
                video:this.props.video,
                calificacion:this.props.calificacion
       }
   }

   onInputChange=(e)=>{
    // console.log("Ejecute el onInputChange")
    // console.log(e.target.name)
    // console.log(e.target.value)
    if(e.target.name == "estrellas"){
        //console.log('target es igual a name')
        this.setState({
            estrellas:e.target.value
        })
    }else if(e.target.name == 'comentarios'){
        //console.log('target es igual a name')
        this.setState({
            comentarios:e.target.value
        })
    }else{
        this.setState({
            fecha:e.target.value
        })
    }
    }

    onSubmit=(e)=>{
        console.log("Desde el submit",this.state)   
        e.preventDefault()
        var json = {
            estrellas:this.state.estrellas,
            comentarios:this.state.comentarios,
            fecha:this.state.fecha
        }   
        
        if(this.state.estrella == undefined){
            alert("Llene todos los campos")
        }else if(this.state.comentarios == undefined){
            alert("Llene todos los campos")
        }else if(this.state.fecha == undefined){
            alert("Llene todos los campos")
        }else{
            axios.post('https://imdevroja.herokuapp.com/api/v1/calificacion/create',json).then(calificacion2 => {
              
              var idP = this.props.match.params.uid
              this.setState({
                calificacion:this.state.calificacion.push(calificacion2)
            })
              
              let nuevaPelicula={
                _id:idP,
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
                video:this.state.video,
                calificacion:this.state.calificacion
            }

              axios.put('https://imdevroja.herokuapp.com/api/v1/peliculas/'+this.props.match.params.uid,nuevaPelicula)
            }).then(pelicula => {
              console.log(pelicula)
              // return <Redirect to={} />
            }).catch(err=>{
                console.log(err)
                alert("lo siento existe un problema")
            })
        }
      }

   render(){
       return (
           <div>
               <h2>Comentarios:</h2>
            <div className="container info">
                <div className="media">
  <img className="mr-3" src="http://www.footballgate.com/wp-content/uploads/2014/12/jose-mourinho-profile-photo-65x65.jpg" alt="Generic placeholder image"/>
  <div className="media-body">
    <h5 className="mt-0">Juanito45@gmail.com</h5>
        pinche pelicula culera... pero la pagina esta de lujo, saludos.
  </div>
</div>
</div>


        <div className="container comentario">
        <div className="form-group row">
          <label htmlFor="example-datetime-local-input" className="col-2 col-form-label">Date and time</label>
          <div className="col-10">
            <input name="fecha" className="form-control" type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input"
            onChange={this.onInputChange}>
            </input>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Calificacion:</label>
          <select name="estrellas" className="form-control" id="exampleFormControlSelect1"
          onChange={this.onInputChange}>
          
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Comentario:</label>
          <textarea name="comentarios" className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""}
          onChange={this.onInputChange}>
          </textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar comentario</button>
      </div>

</div>
            
       )
   }
}

export default Commments