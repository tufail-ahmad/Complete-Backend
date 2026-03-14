import axios from "axios";
import { useEffect, useState } from "react";

const Feed = () => {
  const [post, setPost] = useState({
    imageUrl: "https://via.placeholder.com/400",
    caption: "This is a sample post caption.",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setPost(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      {post.length > 0 ? (
        post.map((p) => (
          <div key={p._id} style={styles.container}>
            <img src={p.image} alt="Feed" style={styles.image} />
            <p style={styles.caption}>{p.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    background: "#fff",
  },
  image: {
    width: "100%",
    display: "block",
    objectFit: "cover",
  },
  caption: {
    padding: "12px",
    fontSize: "1rem",
    color: "#333",
    margin: 0,
    background: "#fafafa",
  },
};

export default Feed;
