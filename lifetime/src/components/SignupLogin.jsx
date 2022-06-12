import  { Component } from 'react';
import '../styles/signuplogin.css'

class SignupLogin extends Component {


  render() { 

  
    return (<>
    <div className="mainsign">
    <div className="form-structor">
	<div className="signup">
		<h2 className="form-title" id="signup" onClick={this.signupEvent}><span>or</span>Sign up</h2>
		<div className="form-holder">
			<input type="text" className="input" placeholder="UserName" />
			<input type="email" className="input" placeholder="Email" />
			<input type="password" className="input" placeholder="Password" />
		</div>
		<button className="submit-btn">Sign up</button>
	</div>
	<div className="login slide-up">
		<div className="center">
			<h2 className="form-title" id="login" onClick={this.loginEvent}><span>or</span>Log in</h2>
			<div className="form-holder">
				<input type="email" className="input" placeholder="Email" />
				<input type="password" className="input" placeholder="Password" />
			</div>
			<button className="submit-btn">Log in</button>
		</div>
	</div>
</div>

    </div>
		
    </>);
  }


loginEvent = (e)=>{
  const signupBtn = document.getElementById("signup");

let parent = e.target.parentNode.parentNode
Array.from(e.target.parentNode.parentNode.classList).find((element) => {
  if (element !== "slide-up") {
    parent.classList.add("slide-up");
  } else {
    signupBtn.parentNode.classList.add("slide-up");
    parent.classList.remove("slide-up");
  }
});
};
signupEvent = (e)=>{
  const loginBtn = document.getElementById("login");
  
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			loginBtn.parentNode.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
};












}
 
export default SignupLogin;