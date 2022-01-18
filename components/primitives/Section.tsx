import React from 'react'
import cx from 'clsx'

type sectionProps = {
  children: React.ReactNode
  responsiveFullHeight?: boolean
  fullHeight?: boolean
}

export const Section = ({ children, responsiveFullHeight = false, fullHeight = false }: sectionProps): JSX.Element => {
  return (
    <section
      className={cx('font-BeVietnamPro xl:px-[15%] xl:py-35 py-16 md:px-[10%] px-[4%]', {
        'md:h-screen flex items-center': responsiveFullHeight,
        'h-screen flex items-center': fullHeight
      })}>
      {fullHeight && <div>{children}</div>}
      {responsiveFullHeight && <div>{children}</div>}
      {!responsiveFullHeight && !fullHeight && <>{children}</>}
    </section>
  )
}
