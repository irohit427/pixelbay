import React from 'react'

const Info = ({label, value}) => {
  return (
    <div className='flex flex-col gap-2 items-start justify-center p-4'>
      <span className='text-sm text-gray-500'>{label}</span>
      <p className='font-bold text-wrap capitalize line-clamp-2'>{value}</p>
    </div>
  )
}

export default Info