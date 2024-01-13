import React from 'react'

const HomeLayout = ({ children }) => {
  return (
    <div className='md:px-24 px-10'>
      {children}
    </div>
  )
}

export default HomeLayout