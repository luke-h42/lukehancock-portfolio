import React from "react";
import weather from "../assets/weather_dashboard_site_preview1.webp";
import login from "../assets/login_mern_site_preview1.webp";
import food from "../assets/recipe_site_preview1.webp";
import lamyaAkhiyat from "../assets/akhiyatlamya.com3.webp";
import lukeHancock from "../assets/lukehancock.dev_3.webp";
import swimsuccess from "../assets/swimsuccess3.webp";
import droplet from "../assets/dropletwebdesign-preview.webp";
import navigator from "../assets/navigatorhotel.co.uk_.webp";
import bridging from "../assets/bridging-connect.webp";
import RotaTrackr from "../assets/RotaTrackr Homepage preview.webp";
import Project_item from "./project-item/project_item";

const projects = [
  {
    title: "RotaTrackr",
    src: RotaTrackr,
    alt: "RotaTrackr preview image",
    description:
      "A fullstack application using the MERN stack to aid with rota management. This application features role based access, email verification, integration with stripe for payments and more!",
    technology: "Mongo DB, Express, Tailwind, React",
    completed: "Jan-Feb 2025",
    live: "https://rota-tracker-client.vercel.app/",
    code: "https://rota-tracker-client.vercel.app/",
  },

  {
    title: "Bridging Connect",
    src: bridging,
    alt: "Bridging Connect preview image",
    description:
      "A frontend page run as an internship for Bridging Connect. Completed market research, design and creation of the wordpress page including plugins for forms, SEO and optimisation. Worked alongside the CEO and branding team throughout the project.",
    technology: "Wordpress",
    completed: "Dec-Jan 2024/25",
    live: "https://bridgingconnect.com",
    code: "https://bridgingconnect.com",
  },
  {
    title: "Lamya Akhiyat",
    src: lamyaAkhiyat,
    alt: "Lamya akhiyat preview image",
    description:
      "A frontend page made for the client's business as a speech therapist. This project included domain registering and editing DNS records. The code is private for client privacy.  ",
    technology: "React, Vanilla CSS",
    completed: "Jan 2024",
    live: "https://akhiyatlamya.com/",
    code: "https://akhiyatlamya.com/",
  },
  {
    title: "Navigator Hotel",
    src: navigator,
    alt: "Navigator Hotel preview image",
    description:
      "A frontend page for a client, The Navigator Hotel. Designed for the clien'ts hotel to share information about the rooms, restaurant and events. The code is private for client privacy.",
    technology: "React, Tailwind",
    completed: "Nov-Dec 2024",
    live: "https://navigatorhotel.co.uk/",
    code: "https://navigatorhotel.co.uk/",
  },
  {
    title: "Droplet Web Design",
    src: droplet,
    alt: "Droplet web design preview image",
    description:
      "A frontend page for my company Droplet Web Design. Designed with optimisation in mind.",
    technology: "React, Tailwind",
    completed: "Oct 2024",
    live: "https://dropletwebdesign.com/",
    code: "https://github.com/luke-h42/droplet",
  },
  {
    title: "SwimSuccess",
    src: swimsuccess,
    alt: "Swim Success preview image",
    description:
      "A frontend page as a personal project. This project was to test my frontend skills including web design to make a website that was business ready.",
    technology: "React, Tailwind",
    completed: "Oct 2024",
    live: "https://swimsuccess.netlify.app/",
    code: "https://github.com/luke-h42/swimsuccess",
  },
  {
    title: "Luke Hancock Personal Porfolio",
    src: lukeHancock,
    alt: "Luke Hancock website preview image",
    description:
      "My personal portfolio website made to showcase all the projects and learning that I've been doing.   ",
    technology: "React, Tailwind",
    completed: "Oct 2024",
    live: "https://lukehancock.dev/",
    code: "https://github.com/luke-h42/lukehancock-portfolio",
  },
  {
    title: "Login Page",
    src: login,
    alt: "Login page preview image",
    description:
      "The login page project was created to test my skills as a backend developer. This project has a registration and login with both users and admin access. The admin can add, edit and delete posts and the user can view them when logged in.",
    technology: "React, Express, Tailwind, MongoDB",
    completed: "Oct 2024",
    live: "https://login-mern-seven.vercel.app/",
    code: "https://github.com/luke-h42/login-mern",
  },
  {
    title: "Homepage",
    src: weather,
    alt: "Weather dashboard preview image",
    description:
      "The homepage app tested my skills to build a server that can handle multitple APIs.",
    technology: "React with typescript, Express",
    completed: "Sep 2024",
    live: "https://weather-dashboard-beta-self.vercel.app/",
    code: "https://github.com/luke-h42/weather-dashboard",
  },
  {
    title: "Food Recipes",
    src: food,
    alt: "Food recipes preview image",
    description:
      "The food recipe app was my first dive into building a server to handle an api request as well as saving data to a database.",
    technology: "React, Express, Supabase",
    completed: "Sep 2024",
    live: "https://food-recipe-app-jet-chi.vercel.app/",
    code: "https://github.com/luke-h42/food-recipe-app",
  },
];

export default function Projects() {
  return (
    <div
      className="bg-gray-100 shadow-inner min-h-screen flex items-center justify-center pt-5 pb-5"
      id="Projects"
    >
      <div className="container mx-auto max-w-screen-xl px-6 ">
        <div className="text-4xl mb-10 font-body">Projects</div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {projects.map((project, index) => (
              <Project_item
                title={project.title}
                image={project.src}
                alt={project.alt}
                description={project.description}
                technology={project.technology}
                completed={project.completed}
                key={index}
                live={project.live}
                code={project.code}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
