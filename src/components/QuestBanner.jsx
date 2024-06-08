import '../../static/fonts.css';
import QuestCard from "./QuestCard";
import ViewMoreArrow from "/QuestViewMoreButtonArrow.svg"; // Adjust the import path if needed

const ViewMoreButtonText = "View more";

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color

function QuestBanner(props) {
    return (
        <div className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col items-center relative z-20">
                <div className="overflow-x-auto scrollbar-hide w-full">
                    <div className="flex py-6 space-x-12 w-max">
                        <QuestCard title="Camaradarie" value={2} />
                        <QuestCard title="Flipper" value={50} />
                        <QuestCard title="Sputnik" value={10} />
                        <QuestCard title="Camaradarie" value={4} />
                        <QuestCard title="Lucky7" value={1} />
                        <QuestCard title="Soyuz" value={100} />
                        <QuestCard title="Flipper" value={20} />
                        <QuestCard title="Sputnik" value={12} />
                        <div className="flex items-center space-x-4" style={{ width: '154px' }}>
                            <div className="sfuiQuestCardTitle" style={{ color: 'rgba(209, 224, 255, 1)' }}>
                                {ViewMoreButtonText}
                            </div>
                            <img src={ViewMoreArrow} alt="View More Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestBanner;
