import React from 'react'

type imageSectionProps = {
  children: React.ReactNode
}

export const ImageSection = ({ children }: imageSectionProps): JSX.Element => {
  return <section className='font-BeVietnamPro md:h-screen h-80 py-10 xl:px-[7%] md:px-[5%] px-[3%]'>{children}</section>
}
