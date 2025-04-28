import React from 'react'
import './Aboutus.css'
const Aboutus = () => {
  const timeline = [
    { year: "2014", title: "Hello software world", description: "Started commercial software development with first projects for early-stage startups." },
    { year: "2015", title: "A year of development", description: "Expanded our team and delivered solutions for healthcare, fintech, and SaaS companies." },
    { year: "2017", title: "Pioneers of Blockchain", description: "Launched our first blockchain-based solutions for international clients." },
    { year: "2018", title: "Reflesh again", description: "Rebranding and new vision - bigger projects, greater impact." },
    { year: "2020", title: "Digital health professionals", description: "Focused on building healthcare solutions during the pandemic." },
    { year: "2021", title: "From scratch to success", description: "Helped multiple startups launch their MVPs and scale to real businesses." },
    { year: "2022", title: "9 years in the market", description: "Established strong partnerships with top industry leaders." },
    { year: "2023", title: "Making a difference", description: "Invested more in sustainability and social impact projects." },
  ];
  
  return (
    <div>
    <div className='Aboutusmain flex justify-center items-center w-full h-[100vh] bg-gray-700'>
        <div className='text-white'>
            <h1 className='Aboutuscenter flex justify-center relative text-[15px] font-bolder'>About Us</h1>
            <h1 className='text-[5vh] tracking-wide font-bold'>Check our <span className='text-[#019E6D]'>core services</span></h1>

        </div>
    </div>
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="text-green-500 text-3xl font-bold min-w-[80px]">{item.year}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Aboutus