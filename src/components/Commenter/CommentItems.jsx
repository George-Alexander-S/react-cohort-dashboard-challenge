import { useEffect, useState } from "react";

function CommentItems(props) {
    const {comment} = props

    const userUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact'

    const [userName, setUserName] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${userUrl}/${comment.contactId}`);
            const jsonData = await response.json();
            setUserName(`${jsonData.firstName} ${jsonData.lastName}`);
        };
        fetchData();
    }, []);

    return (
        <li className="li-postviewer">
            <h5>{userName}</h5>
            <p>{comment.content}</p>
        </li>
    )
}

export default CommentItems