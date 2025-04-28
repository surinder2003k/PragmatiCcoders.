import React from 'react'
import './Casestudies.css'
const Casestudies = () => {
  const projects = [
    {
      title: "My AI Space",
      description: "Discover how we built a custom video-based AI assistant platform from scratch.",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/04/Everdome_user_dashboard-e1743682446774-1536x840.png",
      link: "#"
    },
    {
      title: "Fintech Trading Platform",
      description: "How we helped a fintech client automate their market operations with real-time analytics.",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/02/MRTool_Casestudy_cover_small.png",
      link: "#"
    },
    {
      title: "Fintech Trading Platform",
      description: "How we helped a fintech client automate their market operations with real-time analytics.",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2025/02/AI-case-studies-1024x535.jpg.webp",
      link: "#"
    },
    {
      title: "Fintech Trading Platform",
      description: "How we helped a fintech client automate their market operations with real-time analytics.",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2024/02/IMG_8271-e1737444358438.jpg.webp",
      link: "#"
    },
    {
      title: "Fintech Trading Platform",
      description: "How we helped a fintech client automate their market operations with real-time analytics.",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2024/08/Mockups-1.5x-JPG-1.jpg.webp",
      link: "#"
    },
    {
      title: "Fintech Trading Platform",
      description: "How we helped a fintech client automate their market operations with real-time analytics.",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2024/09/MOCKUP-6-ai-min_11zon-1-1024x523.png.webp",
      link: "#"
    },
    // Add more as needed
  ]; 
  return (
    <div className='w-full'>
    <div className='Casestudiesmain flex justify-center items-center w-full h-[100vh] bg-gray-700'>
        <div className='text-white'>
            <h1 className='Casestudiescenter flex justify-center relative text-[15px] font-bolder'>CaseStudies</h1>
            <h1 className='text-[5vh] tracking-wide font-bold'>Check our <span className='text-[#019E6D]'>core services</span></h1>

        </div>
    </div>
    <section className="bg-white py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-2">All <span className="text-green-600">Case Studies</span></h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our successful projects where we helped startups and enterprises scale with cutting-edge tech.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {["All", "AI", "Blockchain", "Consultations", "Ecommerce", "SaaS", "Fintech", "Healthcare"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 border rounded-full text-sm hover:bg-green-600 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{proj.description}</p>
              <a href={proj.link} className="text-green-600 font-medium hover:underline">READ MORE →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    </div>
  )
}

export default Casestudies