import React, { useEffect, useState } from 'react'
import './Blog.css'

const Blog = () => {
  const blogs = [
    {
      title: "11 Must-Know Open Banking Apps in Saudi Arabia",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/04/11-Must-Know-Open-Banking-Apps-in-Saudi-Arabia.png",
      tags: ["Fintech", "Open Banking"],
    },
    {
      title: "Vibe Coding with Cursor AI [Tips and Tricks]",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/04/Vibe-Coding-with-Cursor-AI.png",
      tags: ["AI", "Development"],
    },
    {
      title: "Vibe Coding with Cursor AI [Tips and Tricks]",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/01/What-you-need-to-know-about-Generation-Beta.jpg.webp",
      tags: ["AI", "Development"],
    },
    {
      title: "Vibe Coding with Cursor AI [Tips and Tricks]",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/03/How-we-measure-dev-productivity.jpg",
      tags: ["AI", "Development"],
    },
    {
      title: "Vibe Coding with Cursor AI [Tips and Tricks]",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/03/8-ways-to-automate-your-HR-department-and-its-not-only-AI-article-cover.jpg",
      tags: ["AI", "Development"],
    },
    {
      title: "Vibe Coding with Cursor AI [Tips and Tricks]",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/03/Cursor-AI-for-Software-Development.png",
      tags: ["AI", "Development"],
    },
    // ...add more blogs as needed
  ];
   return (
    <div className='w-full '>
      <div className='Blogmain flex justify-center items-center w-full h-[100vh] bg-gray-700'>
        <div className='text-white'>
            <h1 className='Blogcenter flex justify-center relative text-[15px] font-bolder'>Blog</h1>
            <h1 className='text-[5vh] tracking-wide font-bold'>Check our <span className='text-[#019E6D]'>core services</span></h1>

        </div>
    </div>
      <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Pragmatic Blog</h2>
      <div className="flex gap-4 mb-6 flex-wrap">
        {["All", "Product Development", "Fintech", "AI", "Design"].map((tag) => (
          <button
            key={tag}
            className=" px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-2xl shadow hover:shadow-xl  p-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-fill rounded-xl mb-4  hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <h3 className=" font-semibold text-lg mb-2">{blog.title}</h3>
            <div className=" flex flex-wrap gap-2 text-xs text-gray-600">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className= "hover:bg-gray-200 bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    
    </div>
  )
}

export default Blog