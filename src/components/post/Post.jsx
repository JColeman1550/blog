import "./post.css"
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
         <Link to="/singlePost" className="link">   <img className="postImage"
                src="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01-768x427.png"
                alt="post1-img"
            /></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">REACT</span>
                </div>
                <span className="postTitle">
                    "Hit List": Building a Job Tracker App and What I Learned
                </span>
                <hr />
                <span className="postDate">2/28/25</span>
            </div>
            <p className="postDescription">
Starting the job search can feel overwhelming, 
and keeping track of applications across multiple platforms only adds to the challenge. 
That’s why I built Hit List, a web app designed to streamline job tracking. <br />

<span className="postDescriptionTitle">Why I Built This:</span><br />
I wanted a simple, organized way to manage job applications somewhere to store company names, locations, 
and notes, with the ability to update or remove entries as needed. Instead of relying on spreadsheets or scattered notes,
I created a solution that fits my workflow. <br />
 
 <span className="postDescriptionTitle">Features:</span> <br />
Add Job Applications – Save job details like company, location, and comments. <br />
Search & Filter – Quickly find applications by filtering entries.  <br />
Edit Listings – Update job details when needed. <br />
Delete Jobs – Remove applications that are no longer relevant. <br />
Responsive Design – <br />
Works across different screen sizes. <br />

<span className="postDescriptionTitle">Lessons Learned:</span> <br />
Building this app helped reinforce key development concepts, especially working with React state management. 
I gained a deeper understanding of component structure, conditional rendering, and handling user input dynamically.
Another big takeaway was improving UI/UX by implementing a modern card-style layout that adapts to different screen sizes. 
Styling and responsiveness are areas I continue to refine. <br />

<span className="postDescriptionTitle">What’s Next:</span> <br />
Future updates may include API integration for fetching company data, a job application status tracker, and light/dark mode.
If you’re looking for a simple way to track your job applications, <br />
check it out here: <a href="https://github.com/JColeman1550/job-hitlist">Repo</a>
            </p>
        </div>


    )

}
