import { useState, useEffect } from "react"
import { API } from "aws-amplify";
import { listPosts } from "./../src/graphql/queries";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [post]);

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items)
    // const { items } = postData.data.listPosts;
  }

    return (
      <div> 
        <h1 className="text-sky-400 text-6xl font-bold underline">
          My Posts
        </h1>
        {
          posts.map((post, index) => ( 
          // eslint-disable-next-line react/jsx-key
          <p> {post.title} </p>
        ))}
      </div>
    );
  }