import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlidingCards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // For desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [ 
            {
                breakpoint: 1024, // For iPad size
                settings: {
                    slidesToShow: 3, // Show 3 slides on iPads
                }
            },
            {
                breakpoint: 768, // For medium-sized tablets and large phones
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium devices
                }
            },
            {
                breakpoint: 480, // For small mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide on small devices
                }
            }
        ]
    };

    return (
        <div className='w-[90%] h-auto'>
            {/* Centered h1 and p */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4"style={{ color: 'var(--primary-color)' }}>Welcome to Our Brand</h1>
                <p className="text-lg">
                    Discover our unique offerings and explore the finest selection of products.
                </p>
            </div>

            <div className=''>
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className='group mt-10 bg-white h-[340px] flex flex-col text-black rounded-xl transition-colors duration-300 hover:bg-gray-100'>
                            {/* Card container */}
                            <div className='relative h-56 rounded-t-xl flex flex-col justify-center items-center'>
                                {/* Image - initially visible, hidden on hover */}
                                <img 
                                    src={d.image} 
                                    alt={d.name} 
                                    className='w-54 h-54 mt-24 rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-0'
                                />
                                <div className='flex flex-col justify-center items-center gap-4 p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-0'>
                                    <p className='text-2xl font-semibold'>{d.name}</p>
                                    <p>{d.description}</p>
                                </div>

                                {/* Paragraph - initially hidden, shown on hover */}
                                <p className='absolute flex justify-center items-center p-8 text-black text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                    {d.paragraph}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'Morgan',
        image: 'web1.jpg',
        description: 'Morgan is a renowned brand.',
        paragraph: 'Morgan is committed to quality and innovation in all products.'
    },
    {
        name: 'Jaysingh',
        image: 'web2.jpg',
        description: 'Jaysingh is a skilled developer.',
        paragraph: 'Jaysingh focuses on robust solutions for complex engineering problems.'
    },
    {
        name: 'Alok',
        image: 'web3.jpg',
        description: 'Alok is a proficient engineer.',
        paragraph: 'Alok focuses on robust solutions for complex engineering problems.'
    },
    {
        name: 'Hello',
        image: 'web4.jpg',
        description: 'Hello is a greeting brand.',
        paragraph: 'Hello specializes in creating friendly interactions with users.'
    },
];

export default SlidingCards;
