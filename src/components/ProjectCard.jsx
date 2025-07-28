import React from "react";
import { Card, Tag } from "antd";
import { GithubOutlined } from "@ant-design/icons";

export function ProjectCard({ title, description, tags, link }) {
    return (
        <Card
            bordered
            hoverable
            style={{
                maxWidth: "700px",
                fontSize: "1rem",
                transition: "box-shadow 0.3s ease",
                textAlign: "center",
                position: "relative",
            }}
            title={title}
            extra={
                link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "1rem",
                            position: "absolute",
                            top: "16px",
                            right: "32px",
                        }}
                    >
                        <GithubOutlined style={{ fontSize: "1.2rem" }} />
                        <span>GitHub</span>
                    </a>
                ) : null
            }
        >
            <p
                style={{
                    fontSize: "1rem",
                    color: "#4a4a4a",
                    marginBottom: "0.75rem",
                }}
            >
                {description}
            </p>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "6px",
                }}
            >
                {tags &&
                    tags.map((tag, index) => (
                        <Tag
                            color="purple"
                            key={index}
                            style={{
                                fontSize: "0.9rem",
                                padding: "0.2rem 0.5rem",
                            }}
                        >
                            {tag}
                        </Tag>
                    ))}
            </div>
        </Card>
    );
}
