import React from "react";

export default function ChampP({ champInfo, selectedChamp }) {
  return (
    <>
      <div style={{fontWeight: 'bolder', textDecoration: 'underline'}}>{`${champInfo[selectedChamp].passive.name} (P)`}</div>
      <div>{champInfo[selectedChamp].passive.description}</div>
    </>
  );
}
