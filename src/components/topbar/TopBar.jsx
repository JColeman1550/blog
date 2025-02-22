import "./topbar.css"

export default function TopBar() {
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
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
            className="topImage"
            src="https://media.licdn.com/dms/image/v2/D5603AQFILSmqfp4bPA/profile-displayphoto-shrink_200_200/B56ZOSgRvXGwAc-/0/1733329756366?e=2147483647&v=beta&t=skR4Oh6lfDYb2LocsNEXCzOhvjdxTio8G5gaGtnI9eA" 
            alt="" />
            <i className=" topSearchIcon fa-brands fa-searchengin"></i>
        </div>
        </div>
  )
}
