import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';

function Contact() {
  return (
    <div className="Skills-bg">
      <div className="py-32 container mx-auto">
        <div className='grid grid-cols-2 gap-10 items-center'>
            <div className='contact-form'>
               <div className='Service-heading-1'>
          <h2>Lets work together!</h2>
          <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
               </div>
               <div className='contact-form-1'>
                <input type="text" placeholder='First Name'  className='input input-1'/>
                <input type="text" placeholder='Last Name'  className='input'/>
                <input type="email" placeholder='Email Address'  className='input input-1'/>
                <input type="number" placeholder='Phone Number' className='input'/>
                <input type="text" placeholder='set Role' className='input inp-1'/>
                <textarea name="" id="" className='textaria'></textarea>
                <button className='btn-2'>
                    Send message
                </button>
            </div>
            </div>
              <div className='contact-side'>
                <div className='contact-flx'>
                    <div className='icon-main'>
                    <PhoneIcon  className='icon-2' />
                    </div>
                    <div className='contaxt-text'>
                    <p>Phone</p>
                    <p className='text-xl'><a href="tel:+4733378901">+92 3061359665</a></p>
                    </div>
                </div>
                <div className='contact-flx'>
                    <div className='icon-main'>
                    <EmailIcon  className='icon-2' />
                    </div>
                    <div className='contaxt-text'>
                    <p>Email</p>
                    <p className='text-xl'><a className='text-white' href='mailto:ansarsultan2002@gmail.com'> ansarsultan2002@gmail.com</a> </p>
                    </div>
                </div>
                <div className='contact-flx'>
                    <div className='icon-main'>
                    <AddLocationIcon  className='icon-2' />
                    </div>
                    <div className='contaxt-text'>
                    <p>Address</p>
                    <p className='text-xl'>Stree 6, Sector H, gujjar choke manzoor colony,
                        Karachi
                    </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
