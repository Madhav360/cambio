import React from 'react';
import {Component} from 'react';
import Sidebar from './Sidebar';
import AccountInfo from './AccountInfo';
import {Link} from 'react-router-dom';






class CandidateProfileSetting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            profile_summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. text ever since the 1500',
            company_name : 'Deuglo Infosystem Pvt Ltd',
            designation : 'Develoer',
            comapany_mail : 'demo@gmail.com',
            phone_no : '9864464523',
            industry_category : 'IT',
            type_of_company : 'Service',
            how_old_company : '5 Years',
            company_website : 'www.yourlink.com',
            act: 0,
            index: '',
            datas: []

        
        };
    
        this.ProfileSummaryHandle = this.ProfileSummaryHandle.bind(this);
        this.ComapanyNameHandle = this.ComapanyNameHandle.bind(this);
        this.CompanyMailHandle = this.CompanyMailHandle.bind(this);
        this.CompanyMailHandle = this.CompanyMailHandle.bind(this);
        this.PhoneNoHandle = this.PhoneNoHandle.bind(this);
        this.IndustryCategoryHandle = this.IndustryCategoryHandle.bind(this);
        this.TypeOfCompanyHandle = this.TypeOfCompanyHandle.bind(this);
        this.HowOldCompanyHandle = this.HowOldCompanyHandle.bind(this);
        this.CompanyWebsiteHandle = this.CompanyWebsiteHandle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      ProfileSummaryHandle(event) {
        this.setState({profile_summary: event.target.value});
      }

      ComapanyNameHandle(event) {
        this.setState({company_name: event.target.value});
      }

      CompanyMailHandle(event) {
        this.setState({comapany_mail: event.target.value});
      }

      PhoneNoHandle(event) {
        this.setState({phone_no: event.target.value});
      }

      IndustryCategoryHandle(event) {
        this.setState({industry_category: event.target.value});
      }

      TypeOfCompanyHandle(event) {
        this.setState({type_of_company: event.target.value});
      }
    
      
      HowOldCompanyHandle(event) {
        this.setState({how_old_company: event.target.value});
      }
    
      
      CompanyWebsiteHandle(event) {
        this.setState({company_website: event.target.value});
      }

      
      componentDidMount(){
        this.refs.name.focus();
      }
    
      fSubmit = (e) =>{
        e.preventDefault();
        console.log('try');
    
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let member_designation = this.refs.member_designation.value;
        let panel = this.refs.panel.value;
    
        if(this.state.act === 0){   //new
          let data = {
            name, member_designation,panel,
          }
          datas.push(data);
        }else{                      //update
          let index = this.state.index;
          datas[index].name = name;
          datas[index].member_designation = member_designation;
          datas[index].panel = panel;
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
        this.refs.member_designation.value = data.member_designation;
        this.refs.panel.value = data.panel;
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
       
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <AccountInfo />
            </div>
            <div className="col-lg-9 col-md-9">
                <p className="back">Back</p>
                 <div class="row  dashpagewidth"> 
                      <div className="postajob-head text-center">
                          <h4>Profile Setting</h4>
                      </div>
                      <div className="col-md-4 offset-md-8 profile-setting-user-details ">
                          <div className="col-xs-2 profile-setting-share-icon">
                             <Link to="#">
                                 <img src="image/menuicon/share.png" />
                             </Link>
                          </div>
                          <div className="col-xs-8 profile-pics text-center">
                              <img src="image/icons/shikhar.jpg" />
                              <p>Luis Felipe , 28yrs</p>
                              <p>lorem</p>
                              <p>lorem</p>
                              <p>lorem</p>
                          </div>
                          <div className="col-xs-2 profile-setting-video-icon">
                             <Link to="#">
                                 <img src="image/menuicon/video.png" />
                             </Link>
                          </div>
                      </div>
                      <div className="col-md-5 offset-md-7 profile-setting-post-details">
                          <div className="col-xs-5 text-center profile-setting-candidate-placed">
                              <img src="image/menuicon/bag-blue.png" />
                              <p>Candidate Placed</p>
                              <h6>200</h6>
                          </div>
                          <div className="col-xs-4 text-center  profile-setting-candidate-placed">
                          <img src="image/menuicon/bag-blue.png" />
                              <p>Followers</p>
                              <h6>200</h6>
                          </div>
                          <div className="col-xs-3 text-center  profile-setting-candidate-placed">
                          <img src="image/menuicon/bag-blue.png" />
                              <p>My Post</p>
                              <h6>200</h6>
                          </div>
                      </div>
                      <div className="col-md-12 profile-setting-candidate-desciption">
                           <p>{this.state.profile_summary}</p>
                          <i class="material-icons" data-toggle="modal" data-target="#profilesummary-popup">edit</i>
                          {/* -----------------------Profilr Summary popup---------------------- */}
                             <div id="profilesummary-popup" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                         <div class="modal-body">
                                           <form onSubmit={this.handleSubmit}>
                                             <div className="form-group">
                                               <input type='text' 
                                                className="form-control" 
                                                value={this.state.profile_summary}
                                                 onChange={this.ProfileSummaryHandle} 
                                                 placeholder="Enter Profile Summary"/>
                                              </div>
                                              <input type="submit" value="Submit" />
                                           </form>
                                         </div>
                                    </div>
                                </div>
                            </div>
                             {/* -----------------------Profilr Summary popup end---------------------- */}
                      </div>
                      <div className="col-md-12 profile-setting-blue-lines text-center">
                          <div className=""></div>
                          <div className=""></div>
                          <div className=""></div>
                      </div>
                      <div className="col-md-12 profile-setting-company-details">
                          <div className="company-preference">
                              <h6>My Preference Profile</h6>
                              <p>Company</p>
                              <i class="material-icons" data-toggle="modal" data-target="#company-details-popup">edit</i>
                          </div>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>Company Name </p>
                           <h4>{this.state.company_name}</h4>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>Your Designation </p>
                             <h4>{this.state.designation}</h4>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>Company Email ID </p>
                           <h4>{this.state.comapany_mail}</h4>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>Phone Number</p>
                           <h4>{this.state.phone_no}</h4>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>Industry category  </p>
                            <h4>{this.state.industry_category}</h4>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>Type of Company</p>
                            <h4>{this.state.type_of_company}</h4>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>How old is the Company </p>
                           <h4>{this.state.how_old_company}</h4>
                      </div>
                      <div className="col-md-6 profile-setting-form-details">
                           <p>Company Website</p>
                           <h4>{this.state.company_website}</h4>
                      </div>
                      {/* --------------company details popup form----------------------- */}
                      <div id="company-details-popup" class="modal fade" role="dialog">
                                <div class="row modal-dialog">
                                    <div class="modal-content">
                                         <div class="modal-body">
                                             <h4 className="text-center">Edit</h4>
                                           <form onSubmit={this.handleSubmit}>
                                           <div className="row">
                                           <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Company Name</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.company_name}
                                                 onChange={this.ComapanyNameHandle} 
                                                 placeholder="Company Name"/>
                                              </div>
                                             </div>
                                             <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Your Designation</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.designation}
                                                 onChange={this.DesignationHandle} 
                                                 placeholder="Your Designation "/>
                                              </div>
                                             </div>
                                             <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Company Email ID</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.comapany_mail}
                                                 onChange={this.CompanyMailHandle} 
                                                 placeholder="Company Email ID "/>
                                              </div>
                                             </div>
                                             <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Phone Number</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.phone_no}
                                                 onChange={this.PhoneNoHandle} 
                                                 placeholder="Phone Number"/>
                                              </div>
                                             </div>
                                             <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Industry category</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.industry_category}
                                                 onChange={this.IndustryCategoryHandle} 
                                                 placeholder="Industry category "/>
                                              </div>
                                             </div>
                                             <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Type of Company</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.type_of_company}
                                                 onChange={this.TypeOfCompanyHandle} 
                                                 placeholder="Type of Company"/>
                                              </div>
                                             </div>
                                             <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>How old is the Company</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.how_old_company}
                                                 onChange={this.HowOldCompanyHandle} 
                                                 placeholder="How old is the Company "/>
                                              </div>
                                             </div>
                                             <div className="col-md-6">
                                              <div className="form-group">
                                                  <label>Company Website</label>
                                               <input type='text' 
                                                className="form-control profile-summart-edit" 
                                                value={this.state.company_website}
                                                 onChange={this.CompanyWebsiteHandle} 
                                                 placeholder="Company Website "/>
                                              </div>
                                             </div>
                                           </div>
                                           </form>
                                         </div>
                                    </div>
                                </div>
                            </div>
                         {/* ------------------company details popup end--------------- */}
                         <div className="col-md-12 profile-setting-company-details">
                             <div className="company-preference">
                                <p>Member</p>
                             </div>
                         </div>
                         <div className="profile-setting-member-table">
                         <div className="table-responsive-xs">
                         <table class="table">
                                <thead>
                                    <tr>
                                         <th scope="col">Member Name</th>
                                         <th scope="col">Member Designation</th>
                                         <th scope="col">Panel</th>
                                         <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {datas.map((data, i) =>
                                       <tr>
                                           <td scope="row">{data.name}</td>
                                           <td>{data.member_designation}</td>
                                           <td>{data.panel}</td>
                                           <td className="profile-setting-action"><i class="material-icons"  onClick={()=>this.fEdit(i)} data-toggle="modal" data-target="#add-member">edit</i>     <i class="material-icons"  onClick={()=>this.fRemove(i)}>delete</i></td>
                                        </tr>
                                 )}
                                 </tbody>
                            </table>
                            <div className="text-center add-morre"><h4 data-toggle="modal" data-target="#add-member">Add More</h4></div>
                            </div>
                         </div>
                         <div className="col-md-12">
                             <div className="profile-setting-upload-documents">
                                 <p>Upload Company ID Card</p>
                                 <div className="camera-gallary text-center">
                                     <ul>
                                         <li><i class='fas fa-camera camerra'></i><br />Camera</li>
                                         <li> <div class="upload-btn-wrapper">
                                           <img src="image/menuicon/file.png" className="profilesetting-file" /><br />Gallary
                                           <input type="file" onChange={this.handleChange}/>
                                     </div>
                                </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         {/* ---------------------Add More Member's popup-------------------- */}
                         <div id="add-member" class="modal fade" role="dialog">
                             <div class="modal-dialog">
                               <div class="row modal-content">
                                   <div class="modal-header">
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                                   </div>
                                   <div class="modal-body">
                                       <form ref="myForm" onSubmit={this.handleSubmit}>
                                          <div className="form-row company-form">
                                              <div className="form-group col-md-6">
                                                  <input 
                                                    className="form-control mdv-first-input company-inputs cm-popup" 
                                                    placeholder="Member Name" 
                                                    type="text" 
                                                    ref="name"
                                                 />    
                                              </div>
                                              <div className="form-group col-md-6">
                                                  <input 
                                                     className="form-control company-inputs cm-popup" 
                                                     placeholder="Member Designtion" 
                                                     type="text" 
                                                     ref="member_designation"
                                                  />
                                             </div>
                                             <div className="form-group col-md-6">
                                                 <input 
                                                    className="form-control company-inputs mdv-first-input cm-popup" 
                                                    placeholder="Panel" 
                                                    ref="panel"
                                                    type="Number" 
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


                         {/* -------------------Add More Member end popup------------- */}
                         <div className="col-md-12 text-center">
                             <div className="text-center profile-setting-menu">
                                 <Link to ="#">Candidate Alert</Link>
                                 <Link to ="#">Change Password</Link>
                                 <Link to ="#">Proﬁle Visibility</Link>
                                 <Link to ="#">Account Delete</Link>
                                 <Link to ="#">Account Recovery</Link>
                               <h5>Logout</h5>
                             </div>
                         </div>
                </div>
            </div>
        </div>    

    )
}

}


export default CandidateProfileSetting