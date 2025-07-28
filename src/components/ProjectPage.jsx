import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Select, Pagination } from "antd";
import projects from "../data/projects.json";

export function ProjectPage() {
    const options = Array.from(new Set(projects.flatMap((p) => p.tags))).map(
        (tag) => ({ label: tag, value: tag })
    );

    const [selectedTags, setSelectedTags] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    const handleChange = (value) => {
        setSelectedTags(value);
        setCurrentPage(1);
    };

    const filteredProjects =
        selectedTags.length === 0
            ? projects
            : projects.filter((project) =>
                  project.tags.some((tag) => selectedTags.includes(tag))
              );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedProjects = filteredProjects.slice(
        startIndex,
        startIndex + pageSize
    );

    return (
        <section
            id="projects"
            className="projects"
            style={{ padding: "1rem", paddingBottom: "100px" }}
        >
            <div>
                <h2>Projects</h2>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "800px", marginBottom: "20px" }}
                    placeholder="Filter by tags"
                    onChange={handleChange}
                    options={options}
                    value={selectedTags}
                    size="large"
                />
            </div>

            <div className="project-grid">
                {paginatedProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        link={project.link}
                    />
                ))}
            </div>

            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                }}
            >
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredProjects.length}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                    align="center"
                />
            </div>
        </section>
    );
}
