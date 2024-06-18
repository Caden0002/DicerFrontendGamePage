import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import QuestBanner from "./components/QuestBanner.jsx";
import QuestBannerSplide from "./components/QuestBannerSplide.jsx";
import GameBento from "./components/GameBento.jsx";
import Announcement from "./components/Announcement.jsx";
import AnnouncementSplide from "./components/AnnouncementSplide.jsx";

import Footer from "./components/Footer.jsx";


export default function App() {
    return (
        <>
                    <Navbar />

            <Hero />
            {/* <QuestBanner /> */}
                        <QuestBannerSplide />

            <GameBento />
            {/* <Announcement /> */}
                        <AnnouncementSplide />

            <Footer />



        </>
    )
}

