import { useEffect, useState } from "react";
import Commenter from "../Commenter/Commenter";

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
            <h4>{userName}</h4>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <Commenter postId={post.id}/>
        </li>
    )
}

export default PostItems