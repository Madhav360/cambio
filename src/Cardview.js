import React, { Component } from 'react';
import Sidebar from './Sidebar'


class Cardview extends Component{
    constructor(props){
        super(props);
    }


     render(){
         return(
             <div>
                 <div className="container-fluid">
                     <div className="row">
                         <div className="col-md-3">
                             <Sidebar />
                         </div>
                         <div className="col-lg-9 col-md-9">
                             <h1>gfghfh</h1>
                         </div>

                     </div>
                 </div>
             </div>
         )
     }
    
}
export default Cardview;