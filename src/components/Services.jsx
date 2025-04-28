import React from 'react'
import './services.css'

const Services = () => {
  const reasons = [
    {
      title: "Experienced Teams",
      description: "Work with highly skilled developers, designers, and project managers with years of real-world experience."
    },
    {
      title: "Client-Centric Approach",
      description: "Your goals are our priority. We tailor every project to your unique needs and visions."
    },
    {
      title: "Agile and Transparent",
      description: "We follow agile methodologies and ensure full transparency during the entire development process."
    },
    {
      title: "End-to-End Support",
      description: "From idea validation to scaling up, we support you through every stage of your product journey."
    }
  ];
  
  return (
    <div className='w-full '>
    <div className='servicesmain flex justify-center items-center w-full h-[100vh] bg-gray-700'>
        <div className='text-white'>
            <h1 className='servicecenter flex justify-center relative text-[15px] font-bolder'>Services</h1>
            <h1 className='text-[5vh] tracking-wide font-bold'>Check our <span className='text-[#019E6D]'>core services</span></h1>

        </div>
    </div>
    <div className=' flex  w-full h-[11vh]  bg-gray-700'>
        <div className='w-full flex overflow-hidden items-center justify-center  h-[100%] border bg-white'>
      <ul className='flex  uppercase text-[1.9vh] tracking-widest font-bold'>
        <li className='sericestitle px-8 py-7 '>Software Development</li>
        <li className='sericestitle px-8 py-7 '>Product Design</li>
        <li className='sericestitle px-8 py-7 '>Business Consulting</li>
        <li className='sericestitle px-8 py-7 '>IT Outsourcing</li>
      </ul>
        </div>
    </div>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dedicated Software Development Team for your business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hire professional engineers for your projects and extend your team efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Dedicated Team</h3>
            <p className="text-gray-400">
              Build a team of handpicked experts working exclusively for your project.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Staff Augmentation</h3>
            <p className="text-gray-400">
              Add skilled professionals to your internal team without the overhead.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Outsourced Development</h3>
            <p className="text-gray-400">
              Let us handle your complete development lifecycle with our experts.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Key Focus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to deliver excellence in every service we offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Focus 1 */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Quality First</h3>
            <p className="text-gray-600">
              Maintaining superior quality standards across all deliverables.
            </p>
          </div>

          {/* Focus 2 */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Client Success</h3>
            <p className="text-gray-600">
              Ensuring client goals are achieved with precision and excellence.
            </p>
          </div>

          {/* Focus 3 */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
            <p className="text-gray-600">
              Crafting solutions that are ahead of the curve and future-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Pragmatic Coders?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We don’t just develop software — we build solutions that solve your real business problems and drive your success.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
  )
}

export default Services