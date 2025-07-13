import React from "react";
import PostActions from "@/Components/post/PostActions";
import PostSettings from "@/Components/post/PostSettings";
import PostCategory from "@/Components/post/PostCategory";
import PostTag from "@/Components/post/PostTag";
import PostMetaInfo from "@/Components/post/PostMetaInfo";

export default function PostSidebar({ onSave, categories, user, postData, status, scheduleDate, tags, setTags, selectedCategories, setSelectedCategories }) {
  return (
    <aside className="w-[280px] flex flex-col border-1 overflow-y-auto bg-gray-50">
      <PostActions onSave={onSave} />
      <PostSettings status={status} scheduleDate={scheduleDate} />
      <PostCategory categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      <PostTag tags={tags} setTags={setTags}/>
      <PostMetaInfo user={user} title={postData.title} />
    </aside>
  );
}
