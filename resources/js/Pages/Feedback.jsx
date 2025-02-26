import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FeedbackHero from "../components/feedback/FeedbackHero";
import FeedbackForm from "../components/feedback/FeedbackForm";

function Feedback() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <FeedbackHero />

                {/* About Me Section */}
                <FeedbackForm />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Feedback;