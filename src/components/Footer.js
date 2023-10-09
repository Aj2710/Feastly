import React from 'react';

const Footer = () => {
  return (
    <>
    <div className='flex justify-evenly bg-black text-white p-4'>
        <div>
            <ul className='text-sm'>
                <li className='text-[#9E9A9A]  mb-1 font-bold'>COMPANY</li>
                <li className='mb-1'>About Us</li>
                <li className='mb-1'>Team</li>       
                <li className='mb-1'>Carrers</li>
                <li className='mb-1'>Food Studio </li>
                <li className='mb-1'>Food Studio Corporate</li>
            </ul>
        </div>
        <div>
            <ul className='text-sm'>
                <li className='text-[#9E9A9A]  mb-1 font-bold'>CONTACT</li>
                <li className='mb-1'>Help & Support</li>
                <li className='mb-1'>Partner With Us</li>
                <li className='mb-1'>Ride With Us</li>
            </ul> 
        </div>
        <div>
            <ul className='text-sm'>
            <li className='text-[#9E9A9A] font-bold'>LEGAL</li>
            <li className='mb-1'>Term and Condition</li>
            <li className='mb-1'>Refund and Cancelletion</li>
            <li className='mb-1'>Privacy Policy</li>
            <li className='mb-1'>Cookie Policy</li>
            <li className='mb-1'>Offer Terms</li>
            </ul>
        </div>
        <div className='w-24'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="googleplay"  className='w-full mb-2'/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="appstore"  className='w-full'/>
        </div>
    </div>
    </>  
  );
}

export default Footer;