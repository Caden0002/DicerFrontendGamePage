import React, { useEffect, useRef } from 'react';
import '../../static/fonts.css';
import AnnouncementPoster1 from './AnnouncementPoster1.jsx';
import AnnouncementPoster2 from './AnnouncementPoster2.jsx'; // Corrected import statement
import AnnouncementPoster3 from './AnnouncementPoster3.jsx';

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color

function Announcement(props) {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the middle poster
        const container = scrollContainerRef.current;
        if (container) {
            const middlePosterIndex = Math.floor(container.children[0].children.length / 2);
            const middlePoster = container.children[0].children[middlePosterIndex];
            if (middlePoster) {
                container.scrollLeft = middlePoster.offsetLeft - (container.clientWidth - middlePoster.clientWidth) / 2;
            }
        }
    }, []);

    return (
        <div className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col items-center relative z-20">
                <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide w-full snap-x snap-mandatory">
                    <div className="flex py-6 px-3 space-x-3 w-max">
                        <div className="snap-center flex-shrink-0">
                            <AnnouncementPoster1 />
                        </div>
                        <div className="snap-center flex-shrink-0">
                            <AnnouncementPoster2 />
                        </div>
                        <div className="snap-center flex-shrink-0">
                            <AnnouncementPoster3 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Announcement;
