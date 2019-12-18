import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Footer from './common/Footer';





class Groupcompany extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          act: 0,
          index: '',
          datas: []
        };
        
       

       
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
  

      componentDidMount(){
        this.refs.name.focus();
      }
    
      fSubmit = (e) =>{
        e.preventDefault();
        console.log('try');
    
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let designation = this.refs.designation.value;
        let member_emil_id_cambio_id = this.refs.member_emil_id_cambio_id.value;
        let member_phone_no = this.refs.member_phone_no.value;
        let member_specialization = this.member_specialization;
    
        if(this.state.act === 0){   //new
          let data = {
            name, designation,member_emil_id_cambio_id,member_phone_no,member_specialization,
          }
          datas.push(data);
        }else{                      //update
          let index = this.state.index;
          datas[index].name = name;
          datas[index].designation = designation;
          datas[index].member_emil_id_cambio_id = member_emil_id_cambio_id;
          datas[index].member_phone_no = member_phone_no;
          datas[index].member_specialization = member_specialization;
        }    
    
        this.setState({
          datas: datas,
          act: 0
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
      fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
          datas: datas
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
      fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.designation.value = data.designation;
        this.refs.member_emil_id_cambio_id.value = data.member_emil_id_cambio_id;
        this.refs.member_phone_no.value = data.member_phone_no;
        this.refs.member_specialization.value = data.member_specialization;
    
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
      }

      

     
      handleSubmit(event) {
        event.preventDefault();
      }

    render(){
      let datas = this.state.datas;


	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page company-page-height">
                         <div className="  text-center">
                           <h2>Company</h2>
                         </div>
                         <div className="company text-center">
                            <ul>
                               <li><button className="btn mdv-company-icons"><i className='far fa-building'></i></button></li>
                               <li> <button className="btn mdv-company-icons basic-active"><i className='fas  fa-users'></i></button></li>
                               <li><button className="btn mdv-company-icons"><i className='far  fa-bell'></i> </button></li>
                            </ul>
                            <p data-toggle="modal" data-target="#add-member-popup" className="add-member-open-popup">Add a Member</p>
                         </div>
                         <div className="col-md-6 offset-md-6 member-table">
                           <div className="add-a-member-table">
                          
                               <table class="table">
                                  <tbody>
                                  {datas.map((data, i) =>
                                    <tr key={i}>
                                      <td className="col-xs-1">{data.name}</td>
                                      <td className="col-xs-5">{data.designation}</td>
                                      <td className="col-xs-4">{i+1}</td>
                                      <td className="col-xs-1"><i onClick={()=>this.fRemove(i)} class="material-icons">delete</i></td>
                                      <td className="col-xs-1"><i onClick={()=>this.fEdit(i)} class="material-icons" data-toggle="modal" data-target="#add-member-popup">edit</i></td>
                                    </tr>
                                       )}
                                  </tbody>
                                </table>
                               
                           </div>
                         
                         </div>
                         <div className="col-md-12 company-skip-btn text-center">
                               
                               <Link to="/condidatealert">Skip</Link>
                           </div>
                   </div>  
                    {/* -------------------------Add Member popup start here------------------------------ */}

                    <div id="add-member-popup" class="modal fade" role="dialog">
                        <div class="modal-dialog">
                             <div class="row modal-content">
                                 <div class="model-header">
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                                 </div>
                                 <div class="modal-body">
                                 <form ref="myForm" onSubmit={this.handleSubmit}>
                           <div className="form-row company-form">
                               <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs cm-popup" 
                                      placeholder="Member Email Id/Cambio Id" 
                                      type="text" 
                                      ref="member_emil_id_cambio_id"
                                      maxLength="5"
                                    
                                    />
                                  
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs cm-popup" 
                                     placeholder="Member Phone Number" 
                                     type="number" 
                                     ref="member_phone_no"
                                     max="10"
                                    
                                    />
                               </div>
                                <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input cm-popup" 
                                     placeholder="Member Name" 
                                     ref="name"
                                     type="text" 
                                 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs cm-popup" 
                                     placeholder="Member Designation" 
                                     type="text" 
                                     ref="designation"
                                   
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input cm-popup" 
                                     placeholder="Member Specialization" 
                                     type="text" 
                                     ref="member_specialization"
                                    
                                    />
                               </div>
                               <div className="col-md-12 company-skip-btn text-center">
                                <buttom onClick={(e)=>this.fSubmit(e)}  className="btn company-skip">Add</buttom><br />
                              
                           </div>
                               </div> 
                       </form>
                                 </div>
                             </div>
                          </div>
                        </div>

                  {/* ----------------------------Add Member End here -------------------------------------- */}
                 
               </div>
           </div>
           <Footer />
       </div>
    )
    }

}

export default Groupcompany;
