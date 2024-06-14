import React, { useState, useEffect, useRef } from 'react';
import '../../static/fonts.css';
import AnnouncementPoster1 from './AnnouncementPoster1.jsx';
import AnnouncementPoster2 from './AnnouncementPoster2.jsx'; // Corrected import statement
import AnnouncementPoster3 from './AnnouncementPoster3.jsx';

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color

function Announcement(props) {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1); // Assuming the middle poster is the initial active one
    const posters = [AnnouncementPoster1, AnnouncementPoster2, AnnouncementPoster3];

   useEffect(() => {
    const container = scrollContainerRef.current;
     if (container) {
        const middlePosterIndex = Math.floor(posters.length / 2);
        const middlePoster = container.children[0].children[middlePosterIndex];
        if (middlePoster) {
            container.scrollLeft = middlePoster.offsetLeft - (container.clientWidth - middlePoster.clientWidth) / 2;
        }
    }

    const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const slideWidth = container.children[0].children[0].offsetWidth;
        const index = Math.round(scrollLeft / slideWidth);
        setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll);

    // Scroll to the middle poster initially
   

    return () => {
        container.removeEventListener('scroll', handleScroll);
    };
}, [posters.length]);


    const handleDotClick = (index) => {
        const container = scrollContainerRef.current;
        if (container) {
            const poster = container.children[0].children[index];
            if (poster) {
                container.scrollLeft = poster.offsetLeft - (container.clientWidth - poster.clientWidth) / 2;
                setActiveIndex(index);
            }
        }
    };

    return (
        <div className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col items-center relative z-20 ">
                <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide w-full snap-x snap-mandatory" style={{ borderB: '1px solid #E6E6E666' }}>
                    <div className="flex py-6 px-3 space-x-3 w-max">
                        {posters.map((Poster, index) => (
                            <div key={index} className="snap-center flex-shrink-0">
                                <Poster />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center pb-6 ">
                    {[0, 1, 2].map(index => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${index === activeIndex ? 'bg-neutral-50' : 'bg-gray-700'}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Announcement;
