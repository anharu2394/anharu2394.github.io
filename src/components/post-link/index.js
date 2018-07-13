import React from "react";
import Link from "gatsby-link";
import "./style.scss";

const PostLink = ({ post }) => (
    <Link to={post.frontmatter.path}>
      <div className="post">
      <h2 className="title">{post.frontmatter.title}</h2>
      <div className="title-border" />
      <p className="date">{post.frontmatter.date}</p>
     </div>
    </Link>
);

export default PostLink;
