import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import QuestBanner from "./components/QuestBanner.jsx";
import Page1 from "./components/Page1.jsx";
import GameBento from "./components/GameBento.jsx";
import Announcement from "./components/Announcement.jsx";
import AnnouncementInfinite from "./components/AnnouncementInfinite.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
    return (
        <>
                    <Navbar />

            <Hero />
            <QuestBanner />
            <GameBento />
            <Announcement />
            {/* <AnnouncementInfinite /> */}
            <Footer />


            {/* <Page1 /> */}

        </>
    )
}

