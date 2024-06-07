import QuestCard from "./QuestCard";

function Page1(props) {
    return (
        <div className="flex bg-black">
            <QuestCard title="Camaradarie" />
            <QuestCard title="Flipper" />
            <QuestCard title="Sputnik" />
            <QuestCard title="Soyuz" />
            <QuestCard title="Lucky7" />
        </div>
    );
}

export default Page1;
