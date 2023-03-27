import React from 'react'

function Pokmoenlist({pokmon}) {
  return (
    <div>
      {pokmon.map((p)=><div key={p}> {p}</div>)}
    </div>
  )
}

export default Pokmoenlist
