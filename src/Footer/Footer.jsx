import React from 'react';
import logo from '../assets/logo-footer.png'
import btn_bg from '../assets/btn-bg.jpg'

const Footer = () => {
    return (
        <div className='mt-20 max-w-7xl mx-auto text-white p-4 space-y-10'>
            <div className='flex justify-center '>
                <img className='' src={logo} alt="" />
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='space-y-4'>
                    <h2 className='text-sm md:text-xl font-bold'>About Us</h2>
                    <p className='text-[#FFFFFF99] text-xs md:text-base'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='space-y-4 flex flex-col items-center'>
                <h2 className='text-sm md:text-xl font-bold'>Quick Links</h2>
                <ul className='text-[#FFFFFF99] text-xs md:text-base list-disc'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    
                </ul>
                </div>

                <div className='space-y-4 col-span-2 md:col-span-1'>
                <h2 className='text-sm md:text-xl font-bold'>Subscribe</h2>
                <p className='text-[#FFFFFF99] text-xs md:text-base'>Subscribe to our newsletter for the latest updates.</p>
                <form action="" >
                          <div className="flex  items-center  ">
                            <input
                              className="bg-white border-none text-black text-xs  sm:text-base sm:py-2,px-6 rounded-l-md px-4 py-2"
                              placeholder="Enter your email"
                              type="email"
                              name=""
                              id=""
                            />
                            <button
                              type="submit"
                              style={{
                                backgroundImage: `url(${btn_bg}) `,
                                backgroundRepeat: "no-repeat, no-repeat",
                                backgroundSize: "cover, cover",
                              }}
                              className="text-black text-xs  sm:text-base sm:py-2,px-6 rounded-r-md px-4 py-2  font-medium cursor-pointer hover:shadow hover:text-white "
                            >
                              Subscribe
                            </button>
                          </div>
                        </form>
                </div>
            </div>
            <hr className='mt-10  border-gray-500'/>
            <p className='text-center text-[#FFFFFF99] font-medium text-sm'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;