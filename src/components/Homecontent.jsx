import { div } from 'framer-motion/client';
import React from 'react';

const cardData = [
  {
    imgSrc: 'web.png',
    title: 'Web Development',
    description: 'We create modern, user-friendly websites that showcase your brand\'s unique selling points.',
  },
  {
    imgSrc: 'marketing.png',
    title: 'Mobile App Development',
    description: 'Build user-friendly mobile applications to extend your business to mobile platforms.',
  },
  {
    imgSrc: 'reach.png',
    title: 'UI/UX Design',
    description: 'We build responsive ecommerce, lead gen, custom, and informational websites that are attractive, intuitive, and optimized..',
  },
  {
    imgSrc: 'anouncement.png',
    title: 'Digital MARKETING & Social Media Management',
    description: 'We start our process by learning everything we can about your brand and then we make sure that every element on your website reflects that brand to your users.',
  },
  
  {
  imgSrc: 'marketing.png',
    title: 'BRANDING',
    description: 'We start our process by learning everything we can about your brand and then we make sure that every element on your website reflects that brand to your users..',
  }
];

function Homecontent() {
  return (
   
<div  class=" flex justify-center " >
  <div className='p-5 main m-5 items-center justify-center w-[100%] '>


      <p className='text-start justify-start align-center text-[20px] font-serif '>
        VaishaliTech is a leading website designing service provider that optimizes cutting-edge 
        technology and creativity to the core. By ideating a VaishaliTech with your objectives and goals, VaishaliTech offers the best website designing services that enroot your brand's DNA and truly reflect your visions.
      </p>
      <div className='flex flex-wrap justify-center gap-8 mt-12'>
        {cardData.map((card, index) => (
          <div key={index} className="card w-[40vh] h-[auto] rounded-lg shadow-lg p-4 flex flex-col items-center border" style={{ borderColor: 'var(--primary-color)' }}>
  <img
              src={card.imgSrc}
              alt={card.title}
              className='w-full h-[130px]  object-cover rounded-t-lg '
            />
            <div className='text-center mt-9'>
            <h3 className='text-xl font-bold text-[#4e6185]'>{card.title}</h3>
            <p className='mt-3 text-sm'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Homecontent;