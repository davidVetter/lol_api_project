import React from 'react'

export default function EnemyTips({ champInfo, selectedChamp }) {
  return (
    <>
      <h3 style={{width: '100%', textAlign: 'left', fontWeight: 'bolder' }}>Enemy Tips:</h3>
      <ul>
        {champInfo[selectedChamp].enemytips.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>
    </>
  )
}
