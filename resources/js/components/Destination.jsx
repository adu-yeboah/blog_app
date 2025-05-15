import React from 'react'
import { BlogCard } from './cards/BlogCard';
import { blogPosts } from '../constants/blog';
import Slider from 'react-slick';
import { DestinarionCard } from './cards/DestinationCard';

export default function Destination() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '16px',
                },
            },
        ],
    };

    return (
        <section className="my-8 sm:my-12 px-4 sm:px-6 md:px-8 min-h-[60vh] relative max-w-7xl mx-auto">

            <div className="flex flex-col items-center my-8 gap-2.5">
                <h1 className='text-black text-4xl font-bold'> Featured Ghanaian Destinations</h1>
                <p className='text-gray text-lg'>Explore some of the most amazing places in Ghana, from historic castles to pristine beaches</p>
            </div>

            <div className="slider-container">
                <Slider {...settings} className="px-2">
                    {blogPosts.map((blog, index) => (
                        <div key={index} className="px-2">
                            <DestinarionCard data={blog} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
