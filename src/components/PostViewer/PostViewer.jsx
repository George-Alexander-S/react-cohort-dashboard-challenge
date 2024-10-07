import { usePosts } from "../../context/PostProvider";
import PostItems from "./PostItems";

function PostViewer() {

    const {posts, setPosts} = usePosts();
    console.log(posts)

    return (
        <ul>
            {posts.map((post) => (
                <PostItems
                key={post.id}
                post= {post}
                />
            ))}
        </ul>
    )
}

export default PostViewer