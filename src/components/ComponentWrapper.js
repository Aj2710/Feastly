import React from 'react'

const ComponentWrapper = ({children}) => {
  return (
    <div className='min-h-[70vh]'>
        {children}
    </div>
  )
}

export default ComponentWrapper