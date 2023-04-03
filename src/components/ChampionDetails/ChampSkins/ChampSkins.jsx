import SingleSkinCard from "./SingleSkinCard/SingleSkinCard";

export default function ChampSkins({ champInfo, selectedChampion, setCurrentBackgroundImage }) {
  return champInfo[selectedChampion].skins.map((skin) => (
    <SingleSkinCard
      skin={skin}
      key={skin.id}
      selectedChampion={selectedChampion}
      setCurrentBackgroundImage={setCurrentBackgroundImage}
    />
  ));
}
