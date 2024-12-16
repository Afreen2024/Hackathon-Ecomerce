
    

import React from 'react';
import chair from '../public/Product Image.svg';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const Hero = () => {
  return (
    <div className="w-auto md:w-[1321px] h-auto md:h-[850px] mx-auto mt-11  bg-[#F0F2F3]  md:flex md:flex-row  flex flex-col-reverse md:justify-between  ">
      

        

 
        <div className='w-auto md:w-[577px] md:h-[337px] mt-10 md:pt-40 pl-20 '>
        <p className=" text-lg font-medium">Welcome to Chairy</p>
        <p className={`${inter.className} text-[40px] md:text-[60px] font-bold `}>
          Best Furniture <br /> Collection for your <br /> interior
        </p>
        <p className=" w-[171px] h-[52px] bg-[#029FAE] text-center pt-4 rounded-md text-white">
          Shop Now
        </p>
      </div>
       
      {/* Image Section */}
      <div className='w-[434px] h-[584px] md:pt-24 md:pr-20 pl-10 '>
      <Image 
          src={chair} 
          alt="Chair" 
          height={584} 
          width={434} 
          className="  "

        />
        </div>
    
        
      </div>
    
    
  );
}

export default Hero;




