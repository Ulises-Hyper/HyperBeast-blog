import React from "react";
import Navbar from "../Components/common/Navbar";
import Footer from "../components/common/Footer";
import HeroSection from "../components/sections/HeroSection";
import Newsletter from "../components/sections/Newsletter";
import ArticleIndexSection from "../components/sections/ArticleIndexSection";
import { Head  } from "@inertiajs/react";


function Index({canLogin, canRegister, flash}) {    
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Tab header */}
            <Head title="Portada"/>

            {/* Navbar */}
            <Navbar canLogin={canLogin} canRegister={canRegister}/>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <HeroSection />

                {/* Articles Section */}
                <ArticleIndexSection/>
                
                {/* Newsletter Section */}
                <Newsletter flash={flash}/>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Index;