import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='min-h-[80vh] bg-pink-50 flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}

export default AuthLayout