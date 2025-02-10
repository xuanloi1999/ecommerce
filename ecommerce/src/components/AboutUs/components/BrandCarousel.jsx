import React from 'react';
import Slider from 'react-slick';

const BrandCarousel = () => {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const brandData = [
        {
            href: 'https://xstore.8theme.com/elementor2/marseille04/brand/brand-01/',
            imgSrc: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
            alt: 'Brand 01',
        },
        {
            href: 'https://xstore.8theme.com/elementor2/marseille04/brand/brand-02/',
            imgSrc: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png',
            alt: 'Brand 02',
        },
        {
            href: 'https://xstore.8theme.com/elementor2/marseille04/brand/brand-03/',
            imgSrc: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-04-min.png',
            alt: 'Brand 03',
        },
        {
            href: 'https://xstore.8theme.com/elementor2/marseille04/brand/brand-04/',
            imgSrc: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-05-min.png',
            alt: 'Brand 04',
        },
        {
            href: 'https://xstore.8theme.com/elementor2/marseille04/brand/brand-05/',
            imgSrc: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-02-min.png',
            alt: 'Brand 05',
        },
    ];

    return (
        <div className='brands-carousel'>
            <Slider {...settings}>
                {brandData.map((brand, index) => (
                    <div key={index} className='categories-mask'>
                        <a href={brand.href} title={brand.alt}>
                            <img
                                loading='lazy'
                                decoding='async'
                                src={brand.imgSrc}
                                alt={brand.alt}
                                className='lazyload-lqip'
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BrandCarousel;
