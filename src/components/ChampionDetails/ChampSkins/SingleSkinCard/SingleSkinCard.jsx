export default function SingleSkinCard({
  skin,
  selectedChampion,
  setCurrentBackgroundImage,
}) {
  return (
    <div id="test"
      onClick={() => {
        console.log('click');
        setCurrentBackgroundImage(`/img/centered/${selectedChampion}_${skin.num}.jpg`);
      }}
    >
      <img
        alt={`Skin of ${selectedChampion}`}
        style={{ width: "90%" }}
        src={`/img/splash/${selectedChampion}_${skin.num}.jpg`}
      />
      <div>{skin.name === "default" ? selectedChampion : skin.name}</div>
    </div>
  );
}
