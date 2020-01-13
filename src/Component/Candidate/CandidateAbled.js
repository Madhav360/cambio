import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

 

class CandidateAbled extends Component{
    constructor(props){
        super(props);
        this.state = {
              abled_type : '',
          };

          this.AbledHandler = this.AbledHandler.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    AbledHandler (event){
       this.setState({
        abled_type: event.target.value
       })
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
                        <div className="col-md-12 main-root">
                            <h2 className="text-center">Basic</h2>
                            <div className="col-md-5 offset-md-7 candidate-basic-root text-center">
                                <ul>
                                    <li><img src="image/student-icon/basic-black.png" /></li>
                                    <li><img src="image/student-icon/gender-black.png" /></li>
                                    <li><img src="image/student-icon/basic3.png" /></li>
                                    <li><img src="image/student-icon/basic4blue.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-7 text-center candidate-basic-root basic-details">
                                  <p>Differently Abled</p>
                                     <div className="col-md-12 text-center">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="abled-buttons">
                                                <button className="btn">Yes</button>
                                                <button className="btn">No</button>
                                                
                                            </div>
                                            <div className="form-group">
                                             <input 
                                               className="form-control abled-input"
                                               placeholder="Please mention"
                                               value={this.state.abled_type}
                                               onChange={this.AbledHandler}
                                               type="text"
                                             />
                                            </div>
                                        </form>
                                        <div className="gender-option">
                                            
                                        </div>
                                     </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                         <Link to="/candidate-experience"><button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center lc">
                                      <Link to="/candidate-experience">Skip</Link>
                                      </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CandidateAbled; 