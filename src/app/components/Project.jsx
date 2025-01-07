import React from 'react';
import Image from 'next/image';
import charity from '../../../public/project/CHarity-website.jpg';
import dublio from '../../../public/project/dublio.webp';
import cummunication from '../../../public//project/communication.webp';
import chat from '../../../public/project/chatapp.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

// Card data
const cardData = [
  {
    imgSrc: charity,
    heading: 'Donation Website',
    pera: 'This Donation Website features an engaging interface with clear calls to action, making charitable contributions simple and accessible.',
    link: 'https://ansarsultan999.github.io/poorex_theme/',
    link2: 'https://github.com/ansarSultan999/poorex_theme.git',
  },
  {
    imgSrc: dublio,
    heading: 'Dubliopk Website',
    pera: 'Dubliopk is a dedicated, community-focused, and sustainable food bank website. It was built using HTML, CSS, and Bootstrap, and includes a responsive design that adapts to various screen sizes.',
    link: 'https://dubliopk.netlify.app/',
    link2: '',
  },
  {
    imgSrc: cummunication,
    heading: 'belsito_communication-inc',
    pera: 'This portfolio highlights a company services and achievements with a professional, interactive design. Built using HTML, CSS, JavaScript, and Bootstrap, it enhances user engagement through dynamic features.',
    link: 'https://ansarsultan999.github.io/belsito_communication-inc/',
    link2: 'https://github.com/ansarSultan999/belsito_communication-inc.git',
  },
  {
    imgSrc: chat,
    heading: 'Chat Application',
    pera: 'This app offers real-time messaging with user profiles, message history, and multimedia sharing. Built with HTML, CSS, JavaScript, and React, it ensures a responsive experience. Firebase handles authentication and data storage for secure communication.',
    link: 'https://chat-app-livid-ten.vercel.app/',
    link2: 'https://github.com/ansarSultan999/chat-app.git',
  }
  
];

// Card Component
const Card = ({ imgSrc, heading, pera, link, link2 }) => {
  return (
    <div className="project-main">
      <div className="project-image">
        <Image src={imgSrc} className="project-img" alt={heading} />
      </div>
      <div className="project-link">
        <div className="project-title">
          <h3>{heading}</h3>
          <p>{pera}</p>
          <Link href={link} target="_blank">
            <button className="link-btn">Website</button>
          </Link>
          <Link href={link2} target="_blank">
            <button className="link-btn">Code</button>
          </Link>
        </div>
        <div className="service-arrow">
          <ArrowForwardIcon className="service-icon" />
        </div>
      </div>
    </div>
  );
};

// Project Component
function Project() {
  return (
    <div>
      <div className="back-clr">
        <div className="py-32 container mx-auto">
          <div className="Service-heading">
            <h2>My Recent Work</h2>
            <p>
              We put your ideas and thus your wishes in the form of a unique web project that
              inspires you and your customers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {cardData.map((card, index) => (
              <Card
                key={index}
                imgSrc={card.imgSrc}
                heading={card.heading}
                pera={card.pera}
                link={card.link}
                link2={card.link2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
