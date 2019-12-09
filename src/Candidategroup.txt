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
          member_name:'',
          member_specialization: '',
          member_designation: '',
        };
        
        this.CambioEmailHandler = this.CambioEmailHandler.bind(this);
        this.onChangeMemberPhoneNo = this.onChangeMemberPhoneNo.bind(this);
        this.onChangeMemberSpecialization = this.onChangeMemberSpecialization.bind(this);
        this.onChangeMemberDesignation = this.onChangeMemberDesignation.bind(this);
        this.onChangeMemberName = this.onChangeMemberName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
  
      CambioEmailHandler(event) {
        this.setState({member_emil_id_cambio_id: event.target.value});
      }

      onChangeMemberPhoneNo(event) {
        this.setState({ member_phone_no: event.target.value});
      }
    
      onChangeMemberSpecialization(event) {
        this.setState({ member_specialization: event.target.value});
      }
    
      onChangeMemberDesignation(event) {
        this.setState({member_designation: event.target.value});
      }
    
      onChangeMemberName(event) {
        this.setState({member_name: event.target.value});
      }
    
      handleSubmit(event) {
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
                               <li><button className="btn mdv-company-icons"><i className='far fa-building'></i></button></li>
                               <li> <button className="btn mdv-company-icons basic-active"><i className='fas  fa-users'></i></button></li>
                               <li><button className="btn mdv-company-icons"><i className='far  fa-bell'></i> </button></li>
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
                                      onChange={this.CambioEmailHandler} 
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
                                     placeholder="Member Designation" 
                                     type="text" 
                                     value={this.state.mamber_designation} 
                                     onChange={this.onChangeMemberDesignation} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input" 
                                     placeholder="Member Specialization" 
                                     type="text" 
                                     value={this.state.member_specialization} 
                                     onChange={this.onChangeMemberSpecialization} 
                                    />
                               </div>
                               <div className="col-md-12 company-skip-btn text-center">
                                <Link to="/condidatealert"><buttom className="btn company-skip">Next</buttom><br /></Link>
                               <Link to="/condidatealert">Skip</Link>
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
