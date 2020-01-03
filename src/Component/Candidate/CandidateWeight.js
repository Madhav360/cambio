import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../common/Footer';
import Header from '../../common/Header';

 

class CandidateWeight extends Component{
    constructor(props){
        super(props);
        this.state = {
              weight : '',
          };

          this.WeightHandler = this.WeightHandler.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    WeightHandler (event){
       this.setState({
        weight: event.target.value
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
                                    <li><img src="image/student-icon/basic3blue.png" /></li>
                                    <li><img src="image/student-icon/basic4.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-7 text-center candidate-basic-root basic-details">
                                  <p>Weight</p>
                                     <div className="col-md-12 text-center">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <h6>in Kgs</h6>
                                             <input 
                                               className="form-control weight-input"
                                               value={this.state.weight}
                                               onChange={this.WeightHandler}
                                               type="text"
                                             />
                                            </div>
                                        </form>
                                        <div className="gender-option">
                                            
                                        </div>
                                     </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                         <Link to="/abled"><button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center">
                                      <Link to="/abled">Skip</Link>
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

export default CandidateWeight; 