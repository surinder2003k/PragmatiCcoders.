import React from 'react'
import './Resources.css'
const Resources = () => {
  const resources = [
    {
      title: "50 startup business model patterns for 2025",
      category: "E-book",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2024/10/Business-model-patterns.jpg.webp",
    },
    {
      title: "Best AI for coding in 2025: 25 tools to know",
      category: "Guide",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2024/05/Best-AI-tools-for-developers-in-2025-Pragmatic-Coders.png.webp",
    },
    {
      title: "Product Health Checklist",
      category: "Checklist",
      image: "https://www.pragmaticcoders.com/wp-content/uploads/2024/02/Newsletter-header.png.webp",
    },
    // ...add more resources as needed
  ];
  return (
    <div>
    <div className='Resourcesmain flex justify-center items-center w-full h-[100vh] bg-gray-700'>
        <div className='text-white'>
            <h1 className='Resourcecenter flex justify-center relative text-[15px] font-bolder'>Resources</h1>
            <h1 className='text-[5vh] tracking-wide font-bold'>Check our <span className='text-[#019E6D]'>core services</span></h1>

        </div>
    </div>
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Check our <span className="text-green-600">resources</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex gap-4 flex-wrap mb-8">
        {["All", "E-books", "Guides", "Videos", "Tools", "Other Resources"].map((item, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 text-sm rounded-full ${
              idx === 0
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Hero Resource Card */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://www.pragmaticcoders.com/wp-content/uploads/2024/05/Okladka-MRTool-1.webp"
          alt="Market Insights AI"
          className="w-full md:w-1/3 rounded-xl"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">Tool • 12.04.24</p>
          <h3 className="text-xl font-bold mb-2">Market Insights AI</h3>
          <a
            href="#"
            className="text-green-600 text-sm font-medium inline-flex items-center gap-1"
          >
            READ MORE →
          </a>
        </div>
      </div>
    </section>
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <p className="text-xs text-gray-500 mb-1">{item.category}</p>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <a
              href="#"
              className="text-green-600 text-sm font-medium mt-auto"
            >
              READ MORE →
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Resources