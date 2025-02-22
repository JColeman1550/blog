import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sideBartitle">ABOUT ME</span>
                <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQFILSmqfp4bPA/profile-displayphoto-shrink_200_200/B56ZOSgRvXGwAc-/0/1733329756366?e=2147483647&v=beta&t=skR4Oh6lfDYb2LocsNEXCzOhvjdxTio8G5gaGtnI9eA"
                    alt=""
                />
                <p>
                    Scriptum a Juliano The Dev
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    Integer vitae eros id elit vehicula dapibus.
                    Proin suscipit, nisi sed scelerisque varius, purus odio facilisis est, et facilisis lectus justo a velit.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                <li className="sidebarListItem">MONGO DB</li>
                <li className="sidebarListItem">EXPRESS</li>
                    <li className="sidebarListItem">REACT</li>
                    <li className="sidebarListItem">NODE.JS</li>
                    
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
