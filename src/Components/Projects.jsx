import React from 'react'
import weather from '../assets/weather_dashboard_site_preview.jpg'
import login from '../assets/login_mern_site_preview.jpg'
import food from '../assets/recipe_site_preview_2.jpg'
import Project_item from './project-item/project_item'

const projects = [
    {title: "Login Page", src: login , alt: "Login page preview image", description: "The login page project was created to test my skills as a backend developer.", technology: "React, Express, Tailwind, MongoDB", live: "https://login-mern-seven.vercel.app/", code: "https://github.com/luke-h42/login-mern"   },
    {title: "Homepage", src: weather, alt: "Weather dashboard preview image", description: "The homepage app tested my skills to build a server that can handle multitple APIs.", technology:"React with typescript, Express", live: "https://weather-dashboard-beta-self.vercel.app/", code: "https://github.com/luke-h42/weather-dashboard"},
    {title: "Food Recipes", src: food, alt:"Food recipes preview image", description: "The food recipe app was my first dive into building a server to handle an api request as well as saving data to a database.", technology: "React, Express, Supabase", live:"https://food-recipe-app-jet-chi.vercel.app/", code:"https://github.com/luke-h42/food-recipe-app"},

]

export default function Projects() {
  return (
    <div className='bg-gray-100 shadow-inner min-h-screen flex items-center justify-center pt-5 pb-5' id="Projects">
    <div className='container mx-auto max-w-screen-xl px-6 '>
    <div className='text-4xl mb-10 font-body'>Projects</div>
    <div className="flex justify-center">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {projects.map((project, index) => 
        <Project_item title={project.title} image={project.src} alt={project.alt} description={project.description} technology={project.technology} key={index} live={project.live} code={project.code} />
      )}
      </div>
    </div>
  </div>
  </div>
  )
}

