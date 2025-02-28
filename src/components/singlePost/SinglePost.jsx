import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://s3-wp-product.s3.amazonaws.com/wp-content/uploads/20240612182027/1_ID3uH4873p4YIqYImQGdvQ-768x512.jpg"
                    alt=""
                    className="singlePostImage"
                />
                <h1 className="singlePostTitle">
                    
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-user-pen"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostDate">1 minute ago</span>
                </div>
                <p className="singlePostText">
                   
                </p>
            </div>
        </div>
    )
}
