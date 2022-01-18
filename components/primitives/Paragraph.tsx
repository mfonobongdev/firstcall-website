import React from 'react'
import cx from 'clsx'

type paragraphProps = {
  children: React.ReactNode
  light?: boolean
  dark?: boolean
  small?: boolean
  fullWidth?: boolean
}

export const Paragraph = ({ children, light, dark, small, fullWidth }: paragraphProps): JSX.Element => {
  return (
    <p
      className={cx('font-BeVietnamPro font-base tracking-wide', {
        'text-white': light,
        'text-slate-700': dark,
        'max-w-[100ch]': fullWidth,
        'lg:text-[13px] text-[13px]': small,
        'lg:text-[15px] text-[13px] max-w-[40ch]': !small && !fullWidth
      })}>
      {children}
    </p>
  )
}
