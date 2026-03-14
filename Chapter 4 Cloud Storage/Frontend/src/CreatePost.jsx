import { useState } from "react";
import axios from "axios";
import "./CreatePost.css";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    file: null,
    caption: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", formData.file);
    data.append("caption", formData.caption);

    axios
      .post("http://localhost:3000/create-post", data)
      .then((response) => {
        console.log("Post created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <>
      <div className="create-post-title">Create Post</div>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <input
          className="create-post-file"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormData({ ...formData, file: e.target.files[0] })
          }
        />
        <input
          className="create-post-caption"
          type="text"
          placeholder="Enter caption"
          value={formData.caption}
          onChange={(e) =>
            setFormData({ ...formData, caption: e.target.value })
          }
        />
        <button className="create-post-button" type="submit">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
