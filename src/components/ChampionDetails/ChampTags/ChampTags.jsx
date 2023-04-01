import React from "react";

export default function ChampTags({ champInfo, selectedChamp }) {
  return champInfo[selectedChamp].tags.map((tag, index) => (
    <div key={index} style={{backgroundColor: 'yellowgreen', width: '100%'}}>{tag}</div>
  ));
}
