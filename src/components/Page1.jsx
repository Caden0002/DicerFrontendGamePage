import QuestCard from "./QuestCard";

function Page1(props) {
    return (
        <div className="flex bg-black py-6 space-x-12">
<QuestCard title="Camaradarie" value={2} />
<QuestCard title="Flipper" value={50} />
<QuestCard title="Sputnik" value={10} />
<QuestCard title="Soyuz" value={150} />
<QuestCard title="Lucky7" value={3} />

        </div>
    );
}

export default Page1;
