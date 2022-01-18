import React from 'react'
import cx from 'clsx'

type headlineProps = {
  children: React.ReactNode
  small?: boolean
  medium?: boolean
  footer?: boolean
  light?: boolean
  dark?: boolean
}

export const Headline = ({ children, small, medium, footer, light, dark }: headlineProps): JSX.Element => {
  return (
    <h1
      className={cx('font-BeVietnamPro', {
        'md:text-lg text-sm font-semibold tracking-wide leading-[35px]': small,
        'md:max-w-[50ch] text-[40px] font-medium tracking-wide leading-[45px]': medium,
        'md:max-w-[53ch] lg:text-[100px] md:text-[60px] text-[40px] font-semibold tracking-wide lg:leading-[110px] md:leading-[70px] leading-[50px]':
          !small && !medium && !footer,
        'text-white md:max-w-[10ch] lg:text-[104px] md:text-[60px] text-[40px] font-medium tracking-wide lg:leading-[104px] md:leading-[60px] leading-[40px]':
          footer,
        'text-white': light,
        'text-slate-700': dark
      })}>
      {children}
    </h1>
  )
}
