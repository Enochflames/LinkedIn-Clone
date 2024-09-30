import React, { useState } from "react";
import styled from "styled-components";

const postsData = [
  {
    id: 1,
    user: "Adepoju Emmanuel",
    description: "Software Engineer at Google",
    message: "#TechDreal2024",
    likes: 239,
    comments: 56,
    Img: "/images/tech.jpg", // Image for the post
  },
  {
    id: 2,
    user: "Stella Orire",
    description: "Data Analyst at Oracle",
    message: "I'm so excited for this new Chapter of my life, can't wait to network with great minds",
    likes: 203,
    comments: 15,
    Img: "/images/new.jpg", // You can add an image path for this post as well
  },
  {
    id: 3,
    user: "Covenant Samuel",
    description: "Technical writer at OnlyDust",
    message: "Had a great time speaking at the OpenSource Conference 2024!",
    likes: 23,
    comments: 1,
    Img: "/images/seminar.jpg", // No image for this post
  },
  {
    id: 4,
    user: "Adam Lee",
    description: "Finance Specialist",
    message: "Consistency is all it takes, be humble and start small",
    likes: 47,
    comments: 20,
    Img: "/images/day1.jpg", // No image for this post
  },
  {
    id: 5,
    user: "Kemi Bankole",
    description: "Product Designer at Meta",
    message: "Latest graduate, I'm so excited",
    likes: 52,
    comments: 11,
    Img: "/images/mama.jpg", // Image for this post
  },
];

function Main({ username }) {
  const [posts, setPosts] = useState(postsData);
  const [newPostMessage, setNewPostMessage] = useState("");

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleComment = (id) => {
    const commentText = prompt("Enter your comment:");
    if (commentText) {
      const updatedPosts = posts.map((post) =>
        post.id === id ? { ...post, comments: post.comments + 1 } : post
      );
      setPosts(updatedPosts);
    }
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (newPostMessage.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: username, // Use the logged-in user's name
        description: "Updated description here",
        message: newPostMessage,
        likes: 0,
        comments: 0,
        Img: "", // You can add logic for the user to upload an image if needed
      };
      setPosts([newPost, ...posts]); // Add new post to the top
      setNewPostMessage(""); // Clear form
    }
  };

  return (
    <Container>
      <PostForm onSubmit={handleSubmitPost}>
        <textarea
          placeholder="What's on your mind?"
          value={newPostMessage}
          onChange={(e) => setNewPostMessage(e.target.value)}
        />
        <PostButton type="submit">Post</PostButton>
      </PostForm>

      {posts.map((post) => (
        <Post key={post.id}>
          <UserInfo>
            <h3>{post.user}</h3>
            <span>{post.description}</span>
          </UserInfo>
          <PostMessage>{post.message}</PostMessage>
          {/* Conditionally render image if it exists */}
          {post.Img && <PostImage src={post.Img} alt="Post image" />}
          <PostActions>
            <Button onClick={() => handleLike(post.id)}>Like ({post.likes})</Button>
            <Button onClick={() => handleComment(post.id)}>Comment ({post.comments})</Button>
          </PostActions>
        </Post>
      ))}
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
  padding: 0 0 10px;
`;

const PostForm = styled.form`
  margin-bottom: 20px;
  textarea {
    width: 97%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const PostButton = styled.button`
  background-color: #0a66c2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
`;

const Post = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 16px;
  }
  span {
    color: gray;
    font-size: 14px;
  }
`;

const PostMessage = styled.p`
  margin: 10px 0;
`;

const PostImage = styled.img`
  max-width: 100%;
  margin: 10px 0;
  border-radius: 4px;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #0a66c2;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Main;
