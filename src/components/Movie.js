import React, {Component} from 'react'


class Movie extends Component{

   constructor(props){
       super(props);
   }

   render(){
       return (
           <div className="movie">
           <a href={'http://localhost:3000/moviep/'+this.props._id}>
           <div className="container">
    <div className="row flex-column-reverse flex-md-row">
        <div className="col-md-5">
            <div className="card">   
               <div className="card-header">
                  <img className="card-img" src={this.props.portada} alt="Card image"/>
               </div>  
               <div className="card-body">
                  <h1 className="card-title">{this.props.nombre}</h1>
                  <div className="container">
                     <div className="row">
                        <div className="col-4 metadata">
                           <i className="fa fa-star" aria-hidden="true"></i> 
                           <p>{this.props.anio}</p>
                        </div>
                        <div className="col-8 metadata">{this.props.genero}</div>
                     </div>
                  </div>      
                  <p className="card-text">{this.props.sinopsis}}</p>
               </div>
            </div>
        </div>
        
    </div>
</div>
           </a>
            </div>
           
       )
   }
}

export default Movie