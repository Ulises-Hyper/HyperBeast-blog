import React from "react";
import ArticlesCards from "../components/articles/ArticlesCards";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ArticlesList from "../components/articles/ArticlesList";

function Articles() {
    return (
        <div className="flex flex-col bg-gray-800">
            <Navbar className="sticky top-0 z-10 bg-white" />
            <ArticlesCards className="mb-0" />
            <ArticlesList className="mb-0" />
            <Footer />
        </div>
    );
}

export default Articles;
