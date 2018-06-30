import React, {Component} from 'react'
import Navbar from './Navbar';


class Commments extends Component{

   constructor(props){
       super(props);
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
            <input className="form-control" type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Calificacion:</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Comentario:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
        <button type="submit" class="btn btn-primary">Enviar comentario</button>
      </div>

</div>
            
       )
   }
}

export default Commments