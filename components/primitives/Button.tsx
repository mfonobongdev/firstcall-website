import React from 'react'

type buttonProps = {
  children: React.ReactNode
}

export const Button = ({ children }: buttonProps): JSX.Element => {
  return (
    <button className='px-6 py-4 font-semibold rounded-full border-2 border-opacity-0 transition duration-300 ease-in-out font-BeVietnamPro hover:border-opacity-100 hover:bg-blue-200 hover:text-blue-200'>
      {children}
    </button>
  )
}
