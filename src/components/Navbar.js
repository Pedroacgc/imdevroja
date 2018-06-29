import React, {PropTypes, Component} from 'react'
import axios from 'axios'

class Navbar extends Component{

   constructor(props){
       super(props);
       this.onSubmit = this.onSubmit.bind(this)
       this.state = {
        busqueda:undefined
       }

   }


   onInputChange=(e)=>{
       console.log(e.target.value)
       if(e.target.name == "busqueda"){
           var search = e.target.value.split(" ")
           var espacios = search.join("%20")
           this.setState({
               busqueda:e.target.value
           })
       }
   }

   onSubmit=(e)=>{
       e.preventDefault()
       if(this.state.busqueda == undefined){
        console.log('no lee')
       }else{
           console.log(this.props)
           this.props.history.push('/movieSearch/'+this.state.busqueda)
       }
   }

  render(){
      return(
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://imdevf.herokuapp.com/">IMDEV</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Genero
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Comedy</a>
                  </div>
              </li>

              <li className="nav-item">
                   <a className ="btn btn-outline-success my-2 my-sm-0" href="http://imdevf.herokuapp.com/newMovie">Agregar pelicula</a>
                 
              </li>
              </ul>
              <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
              <input name="busqueda" className="form-control mr-sm-2" type="search" placeholder="Buscar pelicula" aria-label="Search"
              onChange={this.onInputChange}>
              </input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscador</button>
              </form>
          </div>
          </nav>
      );
  }
}

export default Navbar;