import React from 'react'
import Image from 'next/image'

import chair1 from '../../public/chair1.png'
import chair2 from '../../public/chair2.svg'
import chair3 from '../../public/chair3.svg'
import chair4 from '../../public/chair4.png'
import cart from '../../public/Buy 3.svg'
import bgchair1 from '../../public/bigChair1.svg'
import bgchair2 from '../../public/bigChair2.png'
import bgchair3 from '../../public/bigChair3.svg'

const page = () => {
  return (
    <div>
        <div className="w-[1321px] h-[461px]  mx-auto">
  <p className="text-black text-[32px] font-medium text-center mt-24 mb-10">Our Products</p>
  <div className="grid grid-cols-4  gap-5">
    <div className="h-[312px] w-[312px] "><Image src={chair1} alt="chair-pic"  />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair2} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair3} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair4} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
  </div>
    </div>

{/* 4th product */}
    
<div className="w-[1321px] h-[461px]  mx-auto">
  <p className="text-white text-[32px] font-medium text-center ">Featured Products</p>
  <div className="grid grid-cols-4  gap-5">
    <div className="h-[312px] w-[312px] "><Image src={bgchair1} alt="chair-pic"  />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={bgchair2} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={bgchair3} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair1} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>
      

    </div>
  </div>
    </div>


    <div className="w-[1321px] h-[461px]  mx-auto">
  
  <div className="grid grid-cols-4  gap-5">
    <div className="h-[312px] w-[312px] "><Image src={chair1} alt="chair-pic"  />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair2} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair3} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
    <div className="h-[312px] w-[312px] "><Image src={chair4} alt="chair-pic" />
    <div className='flex pt-5 space-x-4'>
    <p className='w-[251px] h-[51]  text-[16px] text-[#007580]'  >Library Stool Chair  <br className='text-[18px] font-bold text-black'/>$20 $39 </p>
      <Image src={cart} alt="chair-pic"   />
      </div>

    </div>
  </div>

    
    
    </div>
    </div>
  )
}

export default page