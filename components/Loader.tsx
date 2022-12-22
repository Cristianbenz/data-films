import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
    <div className='h-screen w-full flex items-center jusitfy-center'>
      <Image className='w-20 h-auto' src={'/spin.gif'} alt="Loading..." width={200} height={200} />
    </div>
  )
}

export default Loader