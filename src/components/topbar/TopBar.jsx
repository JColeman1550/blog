import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        {/* social media icons - fontawesome */} 
        <div className="topLeft">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                <Link to="/" className="link">HOME</Link>
                </li>
                <li className="topListItem">
                <Link to="/about" className="link">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link to="/contact" className="link">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link to="/write" className="link">WRITE</Link>
                </li>
                <li className="topListItem">
                {user && "LOGOUT"}
                </li>
                
            </ul>
        </div>
        <div className="topRight">

            {
                user ? (
                    <img 
                    className="topImage"
                    src="https://media.licdn.com/dms/image/v2/D5603AQFILSmqfp4bPA/profile-displayphoto-shrink_200_200/B56ZOSgRvXGwAc-/0/1733329756366?e=2147483647&v=beta&t=skR4Oh6lfDYb2LocsNEXCzOhvjdxTio8G5gaGtnI9eA" 
                    alt="" 
                    />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                    <Link to="/login" className="link">LOGIN</Link>
                    </li>
                        <li className="topListItem">
                    <Link to="/signup" className="link">SIGNUP</Link>
                    </li>
                    </ul>
                )
            }
          
            <i className=" topSearchIcon fa-brands fa-searchengin"></i>
        </div>
        </div>
  )
}
