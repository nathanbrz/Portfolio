"use client";
import trailblazeWebsite from "@/assets/images/trailblazeWebsite.png";
import acmeplexWebsite from "@/assets/images/acmeplexWebsite.png";
import LRG from "@/assets/images/LRG.png";
import celestialBody from "@/assets/images/celestialBody.png";
import musicAnalysis from "@/assets/images/musicAnalysis.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "University of Calgary",
    year: "2024",
    title: "TrailBlaze AI Trip Itinerary Planner Website",
    category: "software",
    results: [
      { title: "Uses React, Next.js, Node.js, Express" },
      { title: "Uses NoSQL MongoDB Database" },
      { title: "Firebase Authentication" },
      { title: "Styled with Tailwind" },
    ],
    link: "https://trailblaze-webapp.vercel.app/",
    image: trailblazeWebsite,
  },
  {
    company: "University of Calgary",
    year: "2024",
    title: "AcmePlex Movie Teather Website",
    category: "software",
    results: [
      { title: "Uses React and SpringBoot" },
      { title: "Uses SQL database hosted in the cloud" },
      { title: "Styled with Tailwind" },
    ],
    link: "https://github.com/nathanbrz/TheaterReservationApp.git",
    image: acmeplexWebsite,
  },
  {
    company: "Lewis Research Group",
    year: "2023",
    title: "Metabolomics Data Analysis Pipeline of Klebsiela Oxytoca",
    category: "data-science",
    results: [
      { title: "Utilezed PyCaret, Seaborn, etc" },
      { title: "Showcased statistical test" },
      { title: "Performed Kaplan-Meier survival analysis" },
      { title: "Optimzed a QDA Machine Learning model (87% Accuracy)" },
      { title: "Worked directly with Alberta Health Services Data" },
    ],
    link: "none",
    image: LRG,
  },
  {
    company: "University of Calgary",
    year: "2024",
    title: "Spotify Big Data Analytics of Tracks + Track Reccomendation System",
    category: "data-science",
    results: [
      { title: "Utilized PySpark" },
      { title: "Optimized a Track Popularity Prediction Model (87% Accuracy)" },
      { title: "Utilized clustering for track reccomendation system" },
    ],
    link: "https://github.com/nathanbrz/Music_Analytics_and_Recommendation.git",
    image: musicAnalysis,
  },
  {
    company: "University of Calgary",
    year: "2024",
    title:
      "Machine Learning Analysis of Celestial Body Spacial and Spectral Data",
    category: "data-science",
    results: [
      { title: "Optimized a SVC model" },
      { title: "Performed Grid Searches" },
      { title: "Acheived 97% accuracy" },
    ],
    link: "https://github.com/nathanbrz/CelestialClassifier.git",
    image: celestialBody,
  },
];

export const ProjectsSection = () => {
  // State for which category is active
  const [activeCategory, setActiveCategory] = useState("software"); // default to "software"
  // Filter projects based on the active category
  const filteredProjects = portfolioProjects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Getting Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See how I work through my experience!
        </p>
        {/* --- NAVBAR STYLE BUTTONS START --- */}
        <div className="flex justify-center gap-4 mt-8 flex-col px-6 md:flex-row">
          <button
            onClick={() => setActiveCategory("software")}
            className={`${
              activeCategory === "software"
                ? "bg-white text-gray-950"
                : "bg-gray-600 text-white"
            } h-10 px-4 rounded-lg font-semibold transition-colors`}
          >
            Software Development
          </button>
          <button
            onClick={() => setActiveCategory("data-science")}
            className={`${
              activeCategory === "data-science"
                ? "bg-white text-gray-950"
                : "bg-gray-600 text-white"
            } h-10 px-4 rounded-lg font-semibold transition-colors`}
          >
            Data Science + AI
          </button>
        </div>
        {/* --- NAVBAR STYLE BUTTONS END --- */}
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {filteredProjects.map((project, projectIndex) => (
            <Card
              key={projectIndex}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 mt-4 md:mt-5 border-white/5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 items-center text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
