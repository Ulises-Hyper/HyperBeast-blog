import React from "react";
import PostActions from "@/Components/post/PostActions";
import PostSettings from "@/Components/post/PostSettings";
import PostStats from "@/Components/post/PostStats";
import PostMetaInfo from "@/Components/post/PostMetaInfo";

// PostSidebar.jsx
export default function PostSidebar({ onSave }) {
  return (
    <aside className="w-[280px] max-h-screen border-1 overflow-y-auto bg-gray-50">
      <PostActions onSave={onSave} />
      <PostSettings />
      <PostStats />
      <PostMetaInfo />
    </aside>
  );
}
