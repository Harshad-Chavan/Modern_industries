import React , {useState} from 'react'
import './login.css'
import logo from '../images/logo.jpeg';

function LoginForm(props) {
    const [state , setState] = useState({
        username : "",
        password : ""
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }


    const handleonclick = (e) => {
        e.preventDefault();
        if(state.password === "confirm") {
            // redirectToHome();
              alert("running")
        } else {
            alert("not running")
        }
    }

    return(
    <div class="container-fluid">
        <div class="row main-content text-center">
            <div class="col-md-6 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
                <div class="row">
                    <form control="" class="form-group">
                            <div class="row">
                                <img src={logo} class="logo" alt="Responsive image"></img>   
                            </div>
							<div class="row">
								<input type="text" name="username" id="username" class="form__input" placeholder="Username" value={state.username} onChange={handleChange}></input>
							</div>
							<div class="row">
								<input type="password" name="password" id="password" class="form__input" placeholder="Password" value={state.password} onChange={handleChange}></input>
							</div>
                            <div class="row">
								<input type="submit" value="Login" class="btn" onClick={handleonclick}></input>
							</div>
                            <div class="row">
						        Don't have an account? <a href="#">Sign up !</a>
				            </div>
					    </form>
                    </div>
                </div>
		    </div>
	    </div>
    </div>
);
}

export default LoginForm;