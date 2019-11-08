import React from 'react';
import { Link } from 'react-router-dom';


export default class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          hidden: true
        };
        this.toggleShow = this.toggleShow.bind(this);
      }
    
      toggleShow() {
        this.setState({ hidden: !this.state.hidden });
      }
    render(){
	return(
    <div>

        <div class="container-fluid">
            <div class="row">
                <div class="colors">
                <div class="col-md-6 login-form-2">
                    <div className="mdv-login">
                        <h1>Download Our App</h1>
                    </div>
                    <div className="col-md-6">
                    <img class="img-responsive" src="image/enbleloc.png" />
                    </div>
                    <div className="col-md-6">
                    <img class="img-responsive" src="image/maxmatch.png" />
                    </div>
                    
                </div>
                </div>
                <div class="col-md-6 login-form-1">
                {/* <img class="img-responsive nav-logoheight" src="image/logo.png" /> */}
                    <h2>Welcome Back</h2>
                    <h4>Login to Continue</h4>
                    <div className="mdv-login-with">
                        <h4>Login with</h4>
                        <ul>
                            <li><img className="img-responsive fb" src="image/fb.png" /></li>
                            <li><img className="img-responsive" src="image/gogle.png" /></li>
                            <li><img className="img-responsive" src="image/in.png" /></li>
                            <li><img className="img-responsive" src="image/phone.png" /></li>
                            
                        </ul>
                    </div>
                    <div className="mdv-login-form">
                    <form>
                        <div class="form-group">
                            
                            <input type="text" class="form-control logininputs" placeholder="Email/Mobile Number" value="" />
                        </div>
                        <div class="form-group">
                           
                            <input type={this.state.hidden ? "password" : "text"} class="form-control logininputs" placeholder="Password" value="" />
                            {/* <button onClick={this.toggleShow}>Show / Hide</button> */}
                        </div>
                        <div class="col-md-12 mdv-forgot-pwd">
                            <a href="#">Forgot Password ?</a>
                        </div>
                        <div class="form-group text-center">
                            <input type="submit" className="btn mdv-login-btn" value="Login" />
                        </div>
                        <div class="form-group login-text">
                           A New User ? <Link to="/Signup">Signup</Link>
                           
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

	</div>

)
    }
}