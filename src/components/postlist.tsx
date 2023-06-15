import React from 'react';
import PostItem from './postitem';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface Props {
  posts: Post[];
}

function PostList({ posts }: Props) {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;