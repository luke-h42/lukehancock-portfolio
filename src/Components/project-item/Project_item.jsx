import React from 'react';

export default function Project_item({ image, title, alt, description, technology, live, code }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={live} target='_blank' rel="noopener noreferrer">
        <img className="rounded-t-lg w-full h-72 object-cover opacity-100 hover:opacity-75" src={image} alt={alt} />
      </a>
      <div className="flex flex-col flex-1 p-5">
        <a href={live} target='_blank' rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="flex-1 mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Technologies used: {technology}</p>
        <div className="mt-auto flex gap-2">
          <a href={live} target='_blank' rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            View Live
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href={code} target='_blank' rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 ">
            View Code
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
