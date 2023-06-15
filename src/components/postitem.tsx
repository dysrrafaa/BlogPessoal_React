import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

function PostItem({ post }: Props) {
  return (
    <div className="PostItem">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostItem;