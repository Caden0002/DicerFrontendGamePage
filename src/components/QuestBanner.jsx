import '../../static/fonts.css';

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color


const items = [
    { image: '/QuestCamaraderie.png' },
    { image: '/QuestFlipper.png' },
    { image: '/QuestSputnik.png' },
    { image: '/QuestSoyuz.png' },
    { image: '/QuestLucky7.png' },
    { image: '/QuestCamaraderie.png' },
    { image: '/QuestFlipper.png' },
    { image: '/QuestSputnik.png' },
    { image: '/QuestSoyuz.png' },
    { image: '/QuestLucky7.png' },
];

function QuestBanner(props) {
    return (
        <div className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col items-center relative z-20">

                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-2 items-center" >
                        {items.map((item, index) => (
                            <div className="flex-none overflow-hidden" key={index}>
                                <img src={item.image} alt={`Poster ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestBanner;
