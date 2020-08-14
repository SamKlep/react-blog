import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Post = ({ post }) => {
  const converter = new QuillDeltaToHtmlConverter(post.content.ops, {});
  const contentHTML = converter.convert();

  return (
    <article className='post container'>
      <h2>{post.title}</h2>
      <div
        className='content'
        dangerouslySetInnerHTML={{
          __html: contentHTML,
        }}
      />
    </article>
  );
};

export default Post;
