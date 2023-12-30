/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bk2.jpg";

const imageAltText = "Muhammad Talha - Data Science and AI Enthusiast This is a sample image. Replace this with your own.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My GitHub Profile",
    description:
      "This my GitHub profile where you can find my open source projects.",
    url: "https://github.com/MuhammadTalha-Ai",
  },
  {
    title: "My LinkedIn Profile",
    description:
      "This my LinkedIn profile where you can find my the details of my professional career.",
    url: "https://www.linkedin.com/in/muhammad-talha-ai/",
  },
  {
    title: "My Projects on GitHub",
    description:
      "This my GitHub profile where you can find my open source projects.",
    url: "https://muhammadtalha-ai.github.io/MLSATASK_1/",
  },
  {
    title: "My Instagram Profile",
    description:
      "This my Instagram profile where you can find my the details of my personal life and school life.",
    url: "https://www.instagram.com/talha___panhwar/?next=%2F",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
