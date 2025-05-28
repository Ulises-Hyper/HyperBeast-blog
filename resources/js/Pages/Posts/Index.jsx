import React from "react";
import ArticlesCards from "@/components/articles/ArticlesCards";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ArticlesList from "@/components/articles/ArticlesList";

export default function Index() {
    return (
        <div className="flex flex-col bg-gray-800 min-h-screen">
            <Navbar className="sticky top-0 z-10 bg-white" />
            <ArticlesCards className="mb-0" />
            <ArticlesList className="mb-0" />
            <Footer />
        </div>
    );
}