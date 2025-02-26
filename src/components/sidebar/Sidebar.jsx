import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sideBartitle">ABOUT ME</span>
                <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQFILSmqfp4bPA/profile-displayphoto-shrink_200_200/B56ZOSgRvXGwAc-/0/1733329756366?e=2147483647&v=beta&t=skR4Oh6lfDYb2LocsNEXCzOhvjdxTio8G5gaGtnI9eA"
                    alt="headshot"
                />
                <p>
                    Columbus, OH native. USC graduate (Fight On!). Software engineer, former educator, and
                    sports nerd. This blog documents my journey in tech—sharing projects,
                    insights, and lessons learned as I build, grow, and connect with others in the field.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">SKILLS</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">MONGO DB</li>
                    <li className="sidebarListItem">EXPRESS</li>
                    <li className="sidebarListItem">REACT</li>
                    <li className="sidebarListItem">NODE.JS</li>
                    <li className="sidebarListItem">PYTHON</li>
                    <li className="sidebarListItem">R</li>


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
