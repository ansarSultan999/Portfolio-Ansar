import React from 'react'
import Profile from '../../../public/profile/team-details.png'
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import pdf  from '../../../public/pdf/Ansar-Resume.pdf'
function Home() {
  return (
    <div className='global-bg'>
      <div className='container mx-auto py-10 '>
        <div className='grid grid-cols-2 gap-5 mt-10 mb-36'>
            <div>
                <span className='spn-name '>
                    I am Ansar Sultan <br />
                    <h1 className='main-heading mb-4' >Front-end Develper </h1>
                </span>
                <p className='main-pera'>
                "I am a passionate front-end developer skilled in creating responsive, user-friendly websites. With expertise in HTML, CSS, JavaScript, React, and Next.js, your projects are crafted for seamless functionality and modern design."</p>
                <div className='flex items-center gap-3'>
                  <div>
                  {/* <a href={pdf} download="pdf-download">
            download
            </a> */}
            <button className='btn-cv'>Download CV
            <DownloadIcon fontSize='medium' className='ml-2' />
            </button>
            </div>
            <div>
            {/* <LinkedInIcon  fontSize="small"/> */}
            <LinkedInIcon fontSize="large" className='linkdin' />
            <GitHubIcon fontSize="large" className='linkdin'  />
            <FacebookIcon fontSize="large" className='linkdin'  />
            <TwitterIcon fontSize="large" className='linkdin'  />
      
            </div>
                </div>

            </div>
            
            <div>
              <div className='pro-border'>
            <Image
                src={Profile}
                className='Profile'
                alt="Your Company"
              />
            </div>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-5'>
            <div className='flex items-center gap-5 justify-center'>
              <div><h3 className='pro-size'>01</h3></div>
              <div><p className='pro-text'>Years of Experience</p></div>
            </div>
            <div className='flex items-center gap-5 justify-center'>
              <div><h3 className='pro-size'>01+</h3></div>
              <div><p className='pro-text'>Projects Completed</p></div>
            </div>
            <div className='flex items-center gap-5 justify-center'>
              <div><h3 className='pro-size'>01+</h3></div>
              <div><p className='pro-text'>Happy Client</p></div>
            </div>
            <div className='flex items-center gap-5 justify-center'>
              <div><h3 className='pro-size'>14</h3></div>
              <div><p className='pro-text'>Years of Experience</p></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
