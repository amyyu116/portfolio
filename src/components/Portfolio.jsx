import "../index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "../components/ContactPage";
import { ProjectPage } from "../components/ProjectPage";

export default function Portfolio() {
    return (
        <Router>
            <main className="main-content">
                <Navbar />
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    {/* <Route path="/contact" element={<ContactPage />} /> */}
                </Routes>
            </main>
        </Router>
    );
}
