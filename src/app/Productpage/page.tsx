

import React from 'react';
import Image from 'next/image';
import chair2 from '../../public/chair2.svg';
import line from '../../public/Rectangle 35.svg';

const ProductPage = () => {
  return (
    <div className="flex justify-center items-start pt-20 px-32 space-x-12">
      {/* Product Image */}
      <div className='mb-20'>
        <Image 
          src={chair2} 
          alt="Library stool chair" 
          height={675} 
          width={607} 
          className="rounded-lg shadow-lg" // Optional styles for better look
        />
      </div>

      {/* Product Description */}
      <div className="flex flex-col justify-between pb-20 ">
        <h1 className="text-[60px] font-semibold mb-6 ">Library Stool <br/> Chair</h1>
        <Image src={line} alt="rectangle"  />



        {/* Decorative Line */}
        <div className="pb-2">
          <Image src={line} alt="Decorative line" width={150} height={2} />
        </div>

        {/* Product Description */}
        <p className="text-[22px] text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Nullam tincidunt erat enim. Lorem ipsum dolor<br/>  sit amet, consectetur adipiscing elit.
        </p>

        {/* Add To Cart Button */}
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 w-[212px] h-[63px]">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
