import { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

const getAllPostsUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/post';

const makePostUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/post'
//Do I want that post url above here though? Maybe just make the logic in its own file...


// Lets go with a named export. Maybe not export default this time? Why would I want to import it later and give it a new name. Might just as well stick to this named export.
export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(getAllPostsUrl);
        const jsonData = await response.json();
        setPosts(jsonData.results);
        console.log(posts);
    };
    fetchData();
}, []);

return (
    <PostContext.Provider value={{posts, setPosts}}>
        {children}
    </PostContext.Provider>
)

}