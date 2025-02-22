import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="post">
            <img className="postImage"
                src="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01-768x427.png"
                alt="react"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">MONGO DB</span>
                    <span className="postCat">EXPRESS</span>
                    <span className="postCat">REACT</span>
                    <span className="postCat">NODE JS</span>
                </div>
                <span className="postTitle">
                    De Arte Codicis et Analysi Datae
                </span>
                <hr />
                <span className="postDate">1 minute ago</span>
            </div>
            <p className="postDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id omnis optio impedit saepe ratione reprehenderit inventore, 
                nam dolores eos distinctio tempore veritatis ut aliquid adipisci recusandae nisi neque? Sunt, expedita.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id omnis optio impedit saepe ratione reprehenderit inventore, 
                nam dolores eos distinctio tempore veritatis ut aliquid adipisci recusandae nisi neque? Sunt, expedita.</p>
        </div>
    )
}
