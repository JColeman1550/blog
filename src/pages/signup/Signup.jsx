import "./signup.css"
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="signup">
            <span className="signupTitle">Sign Up</span>
                <form className="signupForm">
                <label>Email</label>
                <input type="text" placeholder="Enter your email..." className="signupInput"/>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username..." className="signupInput"/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..."/>
                    <button className="signupButton">Sign Up</button>
                </form>
                <button className="signupLoginButton">
                <Link className="link" to="/login">LOG IN</Link>
                </button>
        </div>
    );
}
