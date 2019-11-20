import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';





class Groupcompany extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          member_emil_id_cambio_id : '',
          member_phone_no: '',
          menber_name:'',
          member_specialization: '',
          mamber_designation: '',
          value: ''
        };
        // this.onChangeMemberEmail = this.onChangeMemberEmail.bind(this);
        // this.onChangeMemberPhoneNo = this.onChangeMemberPhoneNo.bind(this);
        // this.onChangeMemberSpecialization = this.onChangeMemberSpecialization.bind(this);
        // this.onChangeMemberDesignation = this.onChangeMemberDesignation.bind(this);
        // this.onChangeMemberName = this.onChangeMemberName.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
    
      handleChange(event) {
        this.setState(
          {value: event.value},
        

          );
      }
    
      handleSubmit(event) {
        alert(
          'Member Email Id: ' + this.value
          
          );
        event.preventDefault();
      }
    render(){
      


	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page">
                         <div className="  text-center">
                           <h2>Company</h2>
                         </div>
                         <div className="company text-center">
                            <ul>
                               <li><Link to="/company"><button className="btn mdv-company-icons"><i className='far fa-building'></i></button></Link> </li>
                               <li> <button className="btn mdv-company-icons"><i className='fas  fa-users'></i></button></li>
                               <li><Link to="/condidatealert"><button className="btn mdv-company-icons"><i className='far  fa-bell'></i> </button></Link></li>
                            </ul>
                            <p>Add a Member</p>
                         </div>
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-row company-form">
                               <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs" 
                                      placeholder="Member Email Id/Cambio Id" 
                                      type="text" 
                                      value={this.state.member_emil_id_cambio_id} 
                                      onChange={this.handleChange} 
                                    />
                                  
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs" 
                                     placeholder="Member Phone Number" 
                                     type="text" 
                                     value={this.state.member_phone_no} 
                                     onChange={this.onChangeMemberPhoneNo} 
                                    />
                               </div>
                                <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input" 
                                     placeholder="Member Name" 
                                     type="text" 
                                     value={this.state.menber_name} 
                                     onChange={this.onChangeMemberName} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs" 
                                     placeholder="Meber Designation" 
                                     type="text" 
                                     value={this.state.mamber_designation} 
                                     onChange={this.onChangeMemberDesignation} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input" 
                                     placeholder="Company Industry Location / Address" 
                                     type="text" 
                                     value={this.state.member_specialization} 
                                     onChange={this.onChangeMemberSpecialization} 
                                    />
                               </div>
                               <div className="col-md-12 company-skip-btn text-center">
                               <buttom className="btn company-skip">Next</buttom><br />
                               <Link to="#">Skip</Link>
                           </div>
                               </div> 
                       </form>
                   </div>  
                    
                 
               </div>
           </div>
       </div>
    )
    }

}

export default Groupcompany;
