import React from "react";
import posts from "../data/posts";
import { useParams, Navigate } from "react-router-dom";

export function Post() {
  const { id } = useParams();

  return (
    <>
      {posts[id - 1] ? (
        <div>
          <h1>{posts[id - 1].title}</h1>
          <p>{posts[id - 1].text}</p>
        </div>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
}
