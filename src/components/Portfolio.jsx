import "../index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Intro } from "../components/Intro";
import { Project } from "../components/Project";
import { Footer } from "../components/Footer";

function AboutPage() {
    return (
        <>
            <Intro />
        </>
    );
}

function ProjectsPage() {
    return (
        <>
            <Project />
        </>
    );
}

function ContactPage() {
    return (
        <>
            <section id="contact" className="intro-section">
                <h2>Contact</h2>
                <p>Feel free to reach out to me at amyyu116@gmail.com</p>
            </section>
        </>
    );
}

export default function Portfolio() {
    return (
        <Router>
            <main className="main-content">
                <Navbar />
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </main>
        </Router>
    );
}
