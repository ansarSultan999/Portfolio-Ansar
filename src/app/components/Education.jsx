import React from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
const Education = () => {
  return (
    <>
      <div className='bg-black'>
        <div className='py-32 container mx-auto'>
            <div className='grid grid-cols-2 gap-32'>
                <div>
                    <div className='mb-20'> 
                        <h3 className='main-heading font-bold '> <span> <WorkspacePremiumIcon className='Education-icon'/></span>My Experience</h3>
                    </div>
                    <div className='Education-main'>
                        <span>2023 Web And App Develper</span>
                        <h3>Saylani SMIT/Course,Batch 10</h3>
                        <p>Bahadrabad,Karachi</p>
                    </div>
                    <div className='Education-main'>
                        <span>2024 Internship</span>
                        <h3>Bci New Media</h3>
                        <p>Shahrah E Faisal,Karachi</p>
                    </div>
                </div>


                <div>
                <div className='mb-20'> 
                        <h3 className='main-heading font-bold '> <span> <SchoolIcon className='Education-icon'/></span>My Education</h3>
                </div>
                <div className='Education-main'>
                        <span>2017-2019 Matric</span>
                        <h3>Bio Science</h3>
                        <p>Sargodha,Punjab</p>

                    </div>
                    <div className='Education-main'>
                        <span>2019-2021 Intermediate</span>
                        <h3>Inter Computer Science</h3>
                        <p>Sargodha, Punjab</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Education;
