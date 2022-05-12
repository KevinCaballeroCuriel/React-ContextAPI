import React from "react";
import posts from "./../data/posts";
import { NavLink } from "react-router-dom";
import { Controllers } from "./Controllers";

export function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <Controllers />
    </div>
  );
}
