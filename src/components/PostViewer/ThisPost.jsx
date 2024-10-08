import { useParams } from "react-router-dom";
import { usePosts } from "../../context/PostProvider";
import { useEffect } from "react";
import Commenter from "../Commenter/Commenter";


function ThisPost() {
    const {postId} = useParams();
    const {post, getPostById} = usePosts();

    useEffect(() => {
        getPostById(postId);
    }, [getPostById, postId]);

    return (
        <div className="this-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Commenter postId={post.id}/>
        </div>
    )

}

export default ThisPost