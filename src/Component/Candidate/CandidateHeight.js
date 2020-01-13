import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
 
const options = [
  { value: '5 FT (152 cm)', label: '5.5(INCH)' },
  { value: '6 FT (152 cm)', label: '5.2(INCH)' },
  { value: '7 FT (152 cm)', label: '5.1(INCH)' },
  { value: '8 FT (152 cm)', label: '5.4(INCH)' },
  { value: '9 FT (152 cm)', label: '5.6(INCH)' },
  { value: '4 FT (152 cm)', label: '5.0(INCH)' },
  { value: '3 FT (152 cm)', label: '4.5(INCH)' },
  { value: '5 FT (152 cm)', label: '5.9(INCH)' },
];
class Candidateheight extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
          };
    }
   
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
    render(){
        const { selectedOption } = this.state;
        return(
            <div>
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
                                  <p>Height</p>
                                     <div className="col-md-12 lc">
                                        <div className="form-group">
                                        <Select
                                           value={selectedOption}
                                           onChange={this.handleChange}
                                           options={options}
                                          />
                                        </div>
                                        <div className="gender-option">
                                            
                                        </div>
                                     </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                         <Link to="/candidate-lang"><button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center">
                                      <Link to="/candidate-lang">Skip</Link>
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

export default Candidateheight; 