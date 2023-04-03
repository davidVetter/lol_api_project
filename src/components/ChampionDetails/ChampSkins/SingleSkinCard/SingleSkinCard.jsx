export default function SingleSkinCard({
  skin,
  selectedChampion,
  setCurrentBackgroundImage,
}) {
  const styling = {
    width: '90%',
    backgroundColor: 'tan',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '7px'    
  }
  return (
    <div id="test"
      onClick={() => {
        console.log('click');
        setCurrentBackgroundImage(`/img/centered/${selectedChampion}_${skin.num}.jpg`);
      }}
      style={styling}
    >
      <img
        alt={`Skin of ${selectedChampion}`}
        style={{width: '100%', borderRadius: '7px'}}
        src={`/img/splash/${selectedChampion}_${skin.num}.jpg`}
      />
      <div style={{paddingTop: '5px', fontWeight: 'bolder'}}>{skin.name === "default" ? selectedChampion : skin.name}</div>
    </div>
  );
}
