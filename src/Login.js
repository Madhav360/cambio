import React from 'react';

export default class Login extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>

        <div class="container-fluid">
            <div class="row">
                <div class="colors">
                <div class="col-md-6 login-form-2">
                    <img class="img-responsive" src="image/login.png" />
                </div>
                </div>
                <div class="col-md-6 login-form-1">
                <img class="img-responsive nav-logoheight" src="image/logo.png" />
                    <h3>Login</h3>
                    <h4>Anytime Anywhere</h4>
                    <button type="button" class="btn btn-primary jobseekerbtns">I am a Job Seeker</button>
                    <button type="button" class="btn btn-primary jobseekerbtns">I am Service Provider</button>
                    <form>
                        <div class="form-group">
                            <labe  className="login-text">Email</labe>
                            <input type="text" class="form-control logininputs" placeholder="abc@gmail.com" value="" />
                        </div>
                        <div class="form-group">
                            <labe className="login-text">Password</labe>
                            <input type="password" class="form-control logininputs" placeholder="*******" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group login-text">
                            Don't have an Account ? <a href="#" class="ForgetPwd">Signup</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

	</div>

)
    }
}