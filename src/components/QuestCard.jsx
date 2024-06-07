import CamaradarieImage from '/QuestCamaraderie.png';
import FlipperImage from '/QuestFlipper.png';
import SputnikImage from '/QuestSputnik.png';
import SoyuzImage from '/QuestSoyuz.png';
import Lucky7Image from '/QuestLucky7.png';

const title = {
    Camaradarie: 'Camaradarie',
    Flipper: 'Flipper',
    Sputnik: 'Sputnik',
    Soyuz: 'Soyuz',
    Lucky7: 'Lucky7'
};

const descriptions = {
    Camaradarie: 'Invite 5 friends',
    Flipper: 'Flip 100 coins',
    Sputnik: 'Play Skyrocket 20 times',
    Soyuz: 'Play Skyrocket 300 times',
    Lucky7: 'Win 7 rounds of Pick4'
};


const images = {
    Camaradarie: CamaradarieImage,
    Flipper: FlipperImage,
    Sputnik: SputnikImage,
    Soyuz: SoyuzImage,
    Lucky7: Lucky7Image
};

function QuestCard({ title }) {
    const image = images[title];
    const description = descriptions[title];

    return (
        <div className="w-50 h-auto flex flex-col justify-center items-center ">
            <img src={image} alt={image} className="w-auto h-auto " />
            <div className='py-2 space-y-1 text-center'>
              <div className="sfuiQuestCardTitle text-textColorPrimary">
                {title}
            </div>
            <div className="sfui7 text-textColorTertiary">
                {description}
            </div>
            </div>
        </div>
    );
}

export default QuestCard;
