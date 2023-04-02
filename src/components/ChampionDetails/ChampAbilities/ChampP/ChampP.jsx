import parse from "html-react-parser";

export default function ChampP({ champInfo, selectedChamp }) {
  return (
    <>
      <div style={{fontWeight: 'bolder', textDecoration: 'underline'}}>{`${champInfo[selectedChamp].passive.name} (P)`}</div>
      <img alt={selectedChamp} src={`/passive/${champInfo[selectedChamp].passive.image.full}`} />
      {parse(`<div>${champInfo[selectedChamp].passive.description}</div>`)}
    </>
  );
}
