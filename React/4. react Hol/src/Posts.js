import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    alert(error);
  }

  render() {
    if (this.state.error) {
      return <h2>{this.state.error}</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>

        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;