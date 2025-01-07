import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Services = () => {
  return (
    <>
    <div className='bg-black'>
      <div  className='py-32 container mx-auto' >
        <div className='Service-heading'>
          <h2>My Quality Services</h2>
          <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>
        <div className='grid grid-cols-7 gap-5 items-center service'>
          <div className='col-span-2'>
            <div className='main-services'>
              <h3><span>01</span>Responsive Website</h3>
            </div>
          </div >
          <div className='col-start-4 col-span-3'>
            <div className='Service-pera'>
            <p>Create visually appealing websites that adapt seamlessly to any screen size or device, ensuring a consistent and user-friendly experience on desktops, tablets, and smartphones.</p>
            </div>
          </div>
          <div className='ml-32'>
            <div className='service-arrow'>
            <ArrowForwardIcon className='service-icon'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-5 items-center service'>
          <div className='col-span-2'>
            <div className='main-services'>
              <h3><span>02</span>Single Page Application</h3>
            </div>
          </div >
          <div className='col-start-4 col-span-3'>
            <div className='Service-pera'>
            <p> Build fast, interactive single-page applications (SPAs) using frameworks like React and Next.js for smooth navigation and dynamic content updates without reloading the page.</p>
            </div>
          </div>
          <div className='ml-32'>
            <div className='service-arrow'>
            <ArrowForwardIcon className='service-icon'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-5 items-center service'>
          <div className='col-span-2'>
            <div className='main-services'>
              <h3><span>03</span>Custom Components</h3>
            </div>
          </div >
          <div className='col-start-4 col-span-3'>
            <div className='Service-pera'>
            <p> Develop reusable and scalable front-end components tailored to your needs, enabling faster development and a consistent design language across your project.</p>
            </div>
          </div>
          <div className='ml-32'>
            <div className='service-arrow'>
            <ArrowForwardIcon className='service-icon'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-5 items-center service'>
          <div className='col-span-2'>
            <div className='main-services'>
              <h3><span>04</span>Api Integration </h3>
            </div>
          </div >
          <div className='col-start-4 col-span-3'>
            <div className='Service-pera'>
            <p> Collaborate with back-end developers to integrate APIs and databases, ensuring seamless communication between the front-end interface and server-side functionality.</p>
            </div>
          </div>
          <div className='ml-32'>
            <div className='service-arrow'>
            <ArrowForwardIcon className='service-icon'/>
            </div>
          </div>
        </div> 
          <div className='grid grid-cols-7 gap-5 items-center service'>
          <div className='col-span-2'>
            <div className='main-services'>
              <h3><span>05</span> Custom Dashboards</h3>
            </div>
          </div >
          <div className='col-start-4 col-span-3'>
            <div className='Service-pera'>
            <p>Develop user-friendly and visually appealing dashboards for data management, analytics, and reporting tailored to your specific needs.</p>
            </div>
          </div>
          <div className='ml-32'>
            <div className='service-arrow'>
            <ArrowForwardIcon className='service-icon'/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Services
