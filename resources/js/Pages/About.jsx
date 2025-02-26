import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutMe from "../components/about/AboutMe";

function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <AboutHero />

                {/* About Me Section */}
                <AboutMe />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default About;