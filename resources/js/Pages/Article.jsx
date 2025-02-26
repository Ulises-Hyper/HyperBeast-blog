import React from "react";
import ArticleHeader from "../components/article/ArticleHeader";
import ArticleHero from "../components/article/ArticleHero";
import ArticleContent from "../components/article/ArticleContent";
import AuthorBio from "../components/article/AuthorBio";
import CommentForm from "../components/article/comments/CommentForm";
//import CommentList from "../components/article/comments/CommentList";
import CommentItem from "../components/article/comments/CommentItem";
import RelatedArticleCard from "../components/article/RelatedArticleCard";
import FloatingActionButtons from "../components/article/FloatingActionButtons";

function Article (){
    return(
        <div>
            <ArticleHeader/>
            <ArticleHero/>
            <ArticleContent/>
            <AuthorBio/>
            <CommentForm/>
            <CommentItem/>
            <RelatedArticleCard/>
            <FloatingActionButtons/>
        </div>
    )
}

export default Article;