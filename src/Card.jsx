import React from "react";
import web from "..//src/images/img1.jpg";

import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
        <>
      {/* <div className="my-5">
        <h1 className="test-center">Our Services</h1>
      </div> */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
              <div class="card">
           <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
             <div class="card-body">
               <h5 class="card-title font-weight-bold">{props.title}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="" class="btn btn-primary">
                Go somewhere
                </NavLink>
         </div>
      </div>
      </div>
      
              </div>
            </div>
          </div>
       </div>
    
      
      </>
  );
}

export default Card;