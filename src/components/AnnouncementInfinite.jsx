import React from 'react';
import Slider from 'react-slick';
import '../../static/fonts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnnouncementPoster1 from './AnnouncementPoster1.jsx';
import AnnouncementPoster2 from './AnnouncementPoster2.jsx';
import AnnouncementPoster3 from './AnnouncementPoster3.jsx';
import '../../styles.css'

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color

function Announcement(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one main slide
        slidesToScroll: 1, // Scroll one slide at a time
        centerMode: true, // Enable center mode to show partial slides
        variableWidth: true, // Allow variable width for slides
        swipeToSlide: true, // Enable swipe to slide
        draggable: true, // Enable dragging to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed to 2 seconds
        dots: true,
        
    customPaging: i => (
      <div className="ft-slick__dots--custom">
      </div>
    )

    };

    return (
        <div className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col items-center relative z-20">
                <Slider {...settings} className="w-full h-auto overflow-x-hidden pb-12">
                    <div className="snap-center flex-shrink-0 px-3">
                        <AnnouncementPoster2 />
                    </div>
                    <div className="snap-center flex-shrink-0 px-3">
                        <AnnouncementPoster3 />
                    </div>
                    <div className="snap-center flex-shrink-0 px-3">
                        <AnnouncementPoster1 />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Announcement;
