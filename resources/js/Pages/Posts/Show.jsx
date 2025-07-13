import React from "react";
import { usePage } from "@inertiajs/react";
import ArticleHeader from "../../components/article/ArticleHeader";
import ArticleHero from "../../components/article/ArticleHero";
import ArticleContent from "../../components/article/ArticleContent";
import AuthorBio from "../../components/article/AuthorBio";
import CommentForm from "../../components/article/comments/CommentForm";
//import CommentList from "../components/article/comments/CommentList";
import CommentItem from "../../components/article/comments/CommentItem";
import RelatedArticleCard from "../../components/article/RelatedArticleCard";
import FloatingActionButtons from "../../components/article/FloatingActionButtons";

export default function Show() {
    const { post } = usePage().props;

    console.log("Post: ", post);

    return (
        <div>
            <ArticleHeader avatar={post.user.avatar} title={post.title} publishedAt={post.published_at} username={post.user.username}/>
            <ArticleHero image={post.image}/>
            <ArticleContent content={post.content}/>
            <AuthorBio avatar={post.user.avatar} name={post.user.name} username={post.user.username} description={post.user.description} created_at={post.user.created_at} />
            <CommentForm />
            <CommentItem />
            <RelatedArticleCard />
            <FloatingActionButtons />
        </div>
    )
}

