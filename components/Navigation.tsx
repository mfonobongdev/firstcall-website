import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from '../public/images/firstcall-logo.png'

export const Navigation = (): JSX.Element => {
  return (
    <nav className='font-BeVietnamPro w-full pt-10 px-[1%] lg:px-[8%] flex justify-between items-center text-white'>
      {/*hamburger menu*/}
      <Link className='cursor-pointer' to={'home'} spy={true} smooth={true} offset={-125}>
        <div className='flex items-center'>
          <div className='relative w-52 h-16'>
            <Image src={logo} layout={'fill'} className='object-contain' />
          </div>
        </div>
      </Link>

      <div className='hidden xl:block'>
        <div className='flex items-center space-x-10'>
          <span className='cursor-pointer text-sm font-semibold'>
            <Link to={'home'} spy={true} smooth={true} offset={-125}>
              Home
            </Link>
          </span>
          <span className='cursor-pointer text-sm font-semibold'>
            <Link to={'about'} spy={true} smooth={true} offset={-60}>
              About us
            </Link>
          </span>
          <span className=' cursor-pointer text-sm font-semibold'>
            <Link to={'team'} spy={true} smooth={true} offset={-60}>
              Our team
            </Link>
          </span>
          <span className='cursor-pointer text-sm font-semibold'>
            <Link to={'services'} spy={true} smooth={true} offset={-60}>
              Our services
            </Link>
          </span>
          <span className='cursor-pointer text-sm font-semibold'>
            <Link to={'faq'} spy={true} smooth={true} offset={-60}>
              FAQ
            </Link>
          </span>
        </div>
      </div>

      <div className='flex items-center'>
        {/*contacts*/}
        <PhoneIcon />
        <h3 className='mr-3 text-xs md:text-sm lg:text-base font-bold'>+234 906 000 1234</h3>
      </div>
    </nav>
  )
}

export const MenuIcon = (): JSX.Element => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='w-10 h-10 fill-current' viewBox='0 0 20 20' fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const PhoneIcon = (): JSX.Element => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 fill-current text-shapeDark' viewBox='0 0 20 20' fill='currentColor'>
      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
    </svg>
  )
}

export const MoonIcon = (): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='moon'
      className='w-4 h-4 fill-current text-shapeDark'
      role='img'
      viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z'
      />
    </svg>
  )
}
