import { useEffect, useState } from "react";
import Commenter from "../Commenter/Commenter";
import { Link } from "react-router-dom";

function PostItems(props) {

    const {post} = props

    const userUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact'

    const [userName, setUserName] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${userUrl}/${post.contactId}`);
            const jsonData = await response.json();
            setUserName(`${jsonData.firstName} ${jsonData.lastName}`);
        };
        fetchData();
    }, []);

    return (
        <li className="li-postviewer">
            <h4><Link to={`/profile/${post.contactId}`}>
                {userName}
                </Link>
                </h4>
            <h4><Link to={`/post/${post.id}`}>{post.title}</Link></h4>
            <p>{post.content}</p>
            <Commenter postId={post.id}/>
        </li>
    )
}

export default PostItems