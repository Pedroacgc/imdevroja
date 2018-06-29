import React, {Component} from 'react'
import Navbar from './Navbar';


class moviePreview extends Component{

   constructor(props){
       super(props);
   }

   render(){
       return (
         <div>
           <div>
            <div className="container">
             <div className='Page MoviePage'>
              <div className='MoviePage-poster-wrapper'>
               <figure className='MoviePage-poster is-blurry'  />
                <img ref='posterImg' className='MoviePage-poster' src="" />
                 </div>
                 <article className='MoviePage-content'>
                 <h2 className='MoviePage-title' >
                 <h1>Iron Man</h1>
                 </h2>
                 <header className='MoviePage-meta'>
                 <h2>Genero:</h2>
                 <h1>Claisifacion:</h1>
                 <h1>Actores:</h1>
                 <h1>Director:</h1>
                 <h1>Sinopsis:</h1>
                 
                 </header>
                 <p className='MoviePage-plot'>
               <h1>video</h1>
               </p>
                <figure ref='video' clapssName='MoviePage-video'>
              <h1>video</h1>
          </figure>
        </article>
      </div>
           </div>
           
           </div>
           <div class="container">
           <div class="row">
               <div class="col-md-8">
                 <div class="page-header">
                   <h1><small class="pull-right">45 comments</small> Comments </h1>
                 </div> 
                  <div class="comments-list">
                      <div class="media">
                          <p class="pull-right"><small>5 days ago</small></p>
                           <a class="media-left" href="#">
                             <img src="http://lorempixel.com/40/40/people/1/"/>
                           </a>
                           <div class="media-body">
                               
                             <h4 class="media-heading user_name">Baltej Singh</h4>
                             Wow! this is really great.
                             
                             <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                           </div>
                         </div>
                      <div class="media">
                          <p class="pull-right"><small>5 days ago</small></p>
                           <a class="media-left" href="#">
                             <img src="http://lorempixel.com/40/40/people/2/"/>
                           </a>
                           <div class="media-body">
                               
                             <h4 class="media-heading user_name">Baltej Singh</h4>
                             Wow! this is really great.
                             
                             <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                           </div>
                         </div>
                      <div class="media">
                          <p class="pull-right"><small>5 days ago</small></p>
                           <a class="media-left" href="#">
                             <img src="http://lorempixel.com/40/40/people/3/"/>
                           </a>
                           <div class="media-body">
                               
                             <h4 class="media-heading user_name">Baltej Singh</h4>
                             Wow! this is really great.
                             
                             <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                           </div>
                         </div>
                      <div class="media">
                          <p class="pull-right"><small>5 days ago</small></p>
                           <a class="media-left" href="#">
                             <img src="http://lorempixel.com/40/40/people/4/"/>
                           </a>
                           <div class="media-body">
                               
                             <h4 class="media-heading user_name">Baltej Singh</h4>
                             Wow! this is really great.
                             
                             <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                           </div>
                         </div>
                  </div>
                   
                   
                   
               </div>
           </div>
       </div>
       </div>
       )
   }
}

export default moviePreview