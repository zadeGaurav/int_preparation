import React, { useState } from 'react'

const Toggle = () => {
    const [flag, setFlag] = useState(false)
  return (
    <div className='parent'>
        <h2>Bro you are {flag ? 'Online': 'Offline'}</h2>
        <button onClick={()=> setFlag(!flag)}>Go {flag ? 'Offline': 'Online'} </button>
    </div>
  )
}

export default Toggle