import { useState, useEffect } from "react";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function useFetchPosts() {
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [isPostsError, setIsPostsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
          try {
            setIsPostsLoading(true);
            const response = await fetch(POSTS_URL);
            const json = await response.json();
            setPosts(json);
            setIsPostsLoading(false);
          } catch {
            setIsPostsError(true);
            setIsPostsLoading(false);
          }
        }
        fetchPosts();
    }, [])
    
    return {
        posts,
        isPostsLoading,
        isPostsError,
    };
}

export default useFetchPosts;
