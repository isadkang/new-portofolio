import React from 'react'

function SectionTitle({children, id}) {
  return (
    <h1 id={id && id} 
     className='text-center text-3xl font-bold mb-5 text-sky-600
     dark:text-sky-500'
    >
        {children}
    </h1>
  )
}

export default SectionTitle