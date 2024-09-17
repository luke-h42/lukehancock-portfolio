import React from 'react'

export default function Contact() {
  return (
  <div className='min-h-screen flex items-center justify-center pt-5 pb-5 font-body'>
    <div className='container mx-auto max-w-screen-xl px-6 '>
      <div className='text-4xl mb-10 '>Contact</div>
      <div className='flex flex-col md:flex-row justify-between'>
          <form className='md:w-8/12'>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"  required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium  mb-2">Email</label>
                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"  required />    
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="10" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"  required />    
            </div>
            <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
            </button>
        </form>
        <div>
          <div className='bg-white p-4 mt-3 rounded shadow-lg lg:p-8'>
            Luke Hancock <br/>
            lukehancock42@gmail.com
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
