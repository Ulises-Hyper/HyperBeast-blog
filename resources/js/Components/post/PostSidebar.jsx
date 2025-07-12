import React from "react";
import PostActions from "@/Components/post/PostActions";
import PostSettings from "@/Components/post/PostSettings";
import PostStats from "@/Components/post/PostStats";
import PostMetaInfo from "@/Components/post/PostMetaInfo";
import PostCategory from "@/Components/post/PostCategory";
import PostTag from "@/Components/post/PostTag";

// PostSidebar.jsx
export default function PostSidebar({ onSave, categories, user, postData }) {
  return (
    <aside className="w-[280px] flex flex-col border-1 overflow-y-auto bg-gray-50">
      <PostActions onSave={onSave} />
      <PostSettings />
      {/* <PostStats /> */}
      <PostCategory categories={categories} />
      <PostTag />
      <PostMetaInfo user={user} title={postData.title} />
    </aside>
  );
}
