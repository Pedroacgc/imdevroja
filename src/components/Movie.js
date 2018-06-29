import React, {Component} from 'react'


class movie extends Component{

   constructor(props){
       super(props);
   }

   render(){
       return (
           <div>
           <a href=''>
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
                        <div className="col-8 metadata">Adventure. Sci-Fi</div>
                     </div>
                  </div>      
                  <p className="card-text">{this.props.sinopsis}}</p>
                  <a className="trailer-preview" href='' target="new">
                     <i className="fa fa-play" aria-hidden="true"></i>
                     </a>
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

export default movie