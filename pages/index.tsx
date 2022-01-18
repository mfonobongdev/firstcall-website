import { Headline } from '../components/primitives/Headline'
import { Navigation } from '../components/Navigation'
import { Section } from '../components/primitives/Section'
import { space, Spacer } from '../components/primitives/Spacer'
import { ImageSection } from '../components/primitives/ImageSection'
import Image from 'next/image'
import staffOne from '../public/images/staff-1.jpeg'
import staffTwo from '../public/images/staff-2.jpeg'
import staffThree from '../public/images/staff-3.jpeg'
import staffFour from '../public/images/staff-4.jpg'
import staffFive from '../public/images/staff-5.jpg'
import staffSix from '../public/images/staff-6.jpg'
import { Paragraph } from '../components/primitives/Paragraph'
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-scroll'
import logoalt from '../public/images/firstcall-logo-alt.png'

export default function Home() {
  return (
    <main>
      <div className='bg-gradient-to-r from-blue-400 to-blue-500'>
        <Navigation />
        <Section>
          <div id={'home'} className='md:grid md:grid-cols-2 md:grid-rows-1 place-items-center flex flex-col'>
            <div>
              <Headline light>Make your health a top priority.</Headline>
              <Spacer />
              <Headline small light>
                Because your health matters most.
              </Headline>
              <Spacer amount={space.default} />
            </div>
            <div className='relative md:h-[800px] md:w-[80%] h-[400px] w-[99%] rounded-lg shadow-2xl shadow-blue-900'>
              <Image src={staffOne} layout='fill' className='object-cover object-top rounded-lg' />
            </div>
          </div>
        </Section>
      </div>

      <ImageSection>
        <div
          className='relative w-full h-full bg-center bg-no-repeat bg-cover rounded-lg shadow-2xl shadow-blue-900/50'
          style={{ backgroundImage: "url('/images/hero-3.jpg')" }}>
          {/*<Image src='/apps-showcase.jpg' layout='fill' className='object-cover object-center' />*/}
        </div>
      </ImageSection>

      <Section>
        <div id={'about'} className='text-center'>
          <Headline medium>About Us.</Headline>
          <Spacer />
          <div className='md:text-center text-left'>
            <Headline small>Our Pharmacist plays an integral role in your healthcare.</Headline>
            <Spacer amount={space.small} />
            <Headline small>
              Do you have a question about your health or the health of your loved ones?
              <br /> The Pharmacists at FirstCall Pharmacy understand how important it can be to find a solution quickly and efficiently.
              <br />
              That’s why we are available to help.
            </Headline>
          </div>
        </div>
      </Section>

      <div className='bg-gradient-to-r from-blue-400 to-blue-500'>
        <Section>
          <div id={'team'} className='text-center'>
            <Headline medium light>
              A professional and friendly team.
            </Headline>
            <Spacer />
            <Headline small light>
              Our Pharmacists are medication expert and can help you better understand and manage your prescriptions and over-the-counter
              remedies.
            </Headline>
          </div>
          <div className='my-20 flex flex-nowrap overflow-y-hidden space-x-4 overflow-x-auto rounded-lg'>
            <div className='relative min-h-[500px] min-w-[300px] rounded-lg shadow-2xl shadow-blue-900'>
              <Image src={staffOne} layout='fill' className='object-cover rounded-lg' />
            </div>
            <div className='relative min-h-[500px] min-w-[300px] rounded-lg shadow-2xl shadow-blue-900'>
              <Image src={staffTwo} layout='fill' className='object-cover rounded-lg' />
            </div>
            <div className='relative min-h-[500px] min-w-[300px] rounded-lg shadow-2xl shadow-blue-900'>
              <Image src={staffThree} layout='fill' className='object-cover rounded-lg' />
            </div>
            <div className='relative min-h-[500px] min-w-[300px] rounded-lg shadow-2xl shadow-blue-900'>
              <Image src={staffFour} layout='fill' className='object-cover rounded-lg' />
            </div>
            <div className='relative min-h-[500px] min-w-[300px] rounded-lg shadow-2xl shadow-blue-900'>
              <Image src={staffFive} layout='fill' className='object-cover rounded-lg' />
            </div>
            <div className='relative min-h-[500px] min-w-[300px] rounded-lg shadow-2xl shadow-blue-900'>
              <Image src={staffSix} layout='fill' className='object-cover rounded-lg' />
            </div>
          </div>

          <div className='text-center'>
            <Headline small light>
              We are here for you. Call us at <span className='underline'>0906 000 1234</span> or{' '}
              <span className='underline'>0906 000 1234</span>
            </Headline>
          </div>
        </Section>
      </div>

      <Section>
        <Headline medium>
          <p id={'services'} className='text-center'>
            Education is Key,
            <br /> especially when it comes to your health.
          </p>
        </Headline>

        <div className='my-28 w-full grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10 md:grid-rows-2  grid-rows-6 md:place-items-stretch place-items-center'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9 fill-current text-indigo-300'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                clipRule='evenodd'
              />
            </svg>
            <Spacer amount={space.small} />
            <div className='font-bold'>
              <Paragraph>Prescription Medication</Paragraph>
              <Spacer amount={space.small} />
            </div>
            <Paragraph>
              A prescription is filled or prepared by carefully reviewing a patient medication profile, ensuring there are no interactions.
            </Paragraph>
          </div>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-9 w-9 fill-current text-red-300' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z'
                clipRule='evenodd'
              />
            </svg>
            <Spacer amount={space.small} />
            <div className='font-bold'>
              <Paragraph>Medication Sync Service</Paragraph>
              <Spacer amount={space.small} />
            </div>
            <Paragraph>
              Have you been prescribed multiple medications? Speak to one of our Pharmacists and learn how you can sync your medications so
              that they get refilled at the same time.
            </Paragraph>
          </div>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-9 w-9 fill-current text-cyan-300' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
            </svg>
            <Spacer amount={space.small} />
            <div className='font-bold'>
              <Paragraph>Product Knowledge</Paragraph>
              <Spacer amount={space.small} />
            </div>
            <Paragraph>
              FirstCall Pharmacy can provide you with guidance and information about a wide range of healthcare products, including
              medication, vitamins, first aid, and everything else in between.
            </Paragraph>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9 fill-current text-yellow-300'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
            <Spacer amount={space.small} />
            <div className='font-bold'>
              <Paragraph>Prescription Consultations</Paragraph>
              <Spacer amount={space.small} />
            </div>
            <Paragraph>
              Our Pharmacist is a medication expert and can help you better, understand and manage your prescriptions and over-the-counter
              remedies.
            </Paragraph>
          </div>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-9 w-9 fill-current text-blue-300' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z'
                clipRule='evenodd'
              />
            </svg>
            <Spacer amount={space.small} />
            <div className='font-bold'>
              <Paragraph>Take Control of Your Health</Paragraph>
              <Spacer amount={space.small} />
            </div>
            <Paragraph>Speaking with our Pharmacist can help you feel confident and informed that your health is in good hands.</Paragraph>
          </div>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-9 w-9 fill-current text-green-300' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              />
            </svg>
            <Spacer amount={space.small} />
            <div className='font-bold'>
              <Paragraph>Healthcare Advice, Support & Services</Paragraph>
              <Spacer amount={space.small} />
            </div>
            <Paragraph>
              If it involves your health, our Pharmacists are there to help. FirstCall pharmacy offers a number of services that can help
              you maintain a good quality of health or treat existing illnesses.
            </Paragraph>
          </div>
        </div>
      </Section>

      <section className='relative md:py-96 py-60'>
        <div className='text-center overflow-clip'>
          <Headline small light>
            Stay healthy and strong to enjoy life.
          </Headline>
          <Spacer />
          <div className='hidden lg:block'>
            <Headline light>Believe.Consolidation.Reality.</Headline>
          </div>
          <div className='lg:hidden block'>
            <Headline light>
              Believe.
              <br />
              Consolidation.
              <br />
              Reality.
            </Headline>
          </div>
        </div>
        <div className='absolute inset-0 bg-gradient-to-r opacity-50 from-blue-400 to-blue-800 -z-10' />
        <div className='absolute inset-0 -z-20'>
          <Image src='/images/customer-2.jpg' layout='fill' className='object-cover object-bottom' />
        </div>
      </section>

      <Section>
        <div id={'faq'} className='text-center'>
          <Headline medium>Frequently Asked Questions.</Headline>
          <Spacer />
          <Headline small>
            Our Pharmacist is a medication expert and can help you better, understand and manage your prescriptions and over-the-counter
            remedies.
          </Headline>
        </div>

        <div className='md:w-[80%] w-[100%] p-2 my-20 mx-auto bg-white rounded-2xl'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span>
                    <Headline small>How do I get health care when I need it?</Headline>
                  </span>
                  <ChevronArrow open={open} />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                  <Paragraph fullWidth>
                    You can visit Firstcall Pharmacy during office hours. Appointments are appreciated, but walk-ins are welcome as well. If
                    possible, please make a call ahead before visiting. This will allow us to arrange services and reduce your waiting time.
                    Hours are Monday through Friday, 9:00 a.m. to 4:30 p.m.
                  </Paragraph>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between mt-10 w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span>
                    <Headline small>What should I know about this prescription?</Headline>
                  </span>
                  <ChevronArrow open={open} />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                  <Paragraph fullWidth>
                    Discuss the details of your prescription to ensure it’s right for you. Ask for the name of your medication, both the
                    brand and generic name. Our pharmacist will help you understand your medications and why you are taking them.
                  </Paragraph>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between mt-10 w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span>
                    <Headline small>How should I take this medication?</Headline>
                  </span>
                  <ChevronArrow open={open} />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                  <Paragraph fullWidth>
                    How you take your medication can greatly affect the results. Some medications require food, while others need an empty
                    stomach, and some have strict dosage instructions. Find out what you should do if you miss a dose.
                  </Paragraph>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between mt-10 w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span>
                    <Headline small>Is there anything I should avoid?</Headline>
                  </span>
                  <ChevronArrow open={open} />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                  <Paragraph fullWidth>
                    You may have to slightly alter your lifestyle to adhere to the requirements of some prescription medications. Ask our
                    Pharmacist what you should avoid, including driving, drinking alcohol, taking other medication, or exercising.
                  </Paragraph>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </Section>

      <Section>
        <div className='grid md:grid-cols-6 grid-cols-2 md:grid-rows-1 gap-8 md:gap-0 grid-rows-2 w-full place-content-start grid-flow-row'>
          <div className='flex flex-col space-y-4 col-start-1 col-end-2'>
            <Link className='cursor-pointer' to={'home'} spy={true} smooth={true} offset={-125}>
              <div className='flex items-center'>
                <div className='relative w-full h-16'>
                  <Image src={logoalt} layout={'fill'} className='object-contain object-left-top' />
                </div>
              </div>
            </Link>
            <div className='flex space-x-8'>
              <svg
                className='h-5 w-5 text-blue-500 hover:text-blue-900'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='twitter'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <path
                  fill='currentColor'
                  d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                />
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='facebook-f'
                className='h-5 w-5 text-blue-500 hover:text-blue-900'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'>
                <path
                  fill='currentColor'
                  d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                />
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='linkedin'
                className='h-5 w-5 text-blue-500 hover:text-blue-900'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'>
                <path
                  fill='currentColor'
                  d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
                />
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='instagram'
                className='h-5 w-5 text-blue-500 hover:text-blue-900'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'>
                <path
                  fill='currentColor'
                  d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                />
              </svg>
            </div>
            <Paragraph small>© 2021 Firstcall Pharmacy</Paragraph>
          </div>
          <div className='block md:hidden'>{''}</div>
          <div className='flex flex-col space-y-4 md:col-start-5 md:col-end-6'>
            <div className='font-bold'>Links</div>
            <Paragraph small>
              <Link className='cursor-pointer' to={'home'} spy={true} smooth={true} offset={-125}>
                Home
              </Link>
            </Paragraph>
            <Paragraph small>
              <Link className='cursor-pointer' to={'about'} spy={true} smooth={true} offset={-60}>
                About Us
              </Link>
            </Paragraph>
            <Paragraph small>
              <Link className='cursor-pointer' to={'team'} spy={true} smooth={true} offset={-60}>
                Our Team
              </Link>
            </Paragraph>
            <Paragraph small>
              <Link className='cursor-pointer' to={'services'} spy={true} smooth={true} offset={-60}>
                Our Services
              </Link>
            </Paragraph>
            <Paragraph small>
              <Link className='cursor-pointer' to={'faq'} spy={true} smooth={true} offset={-60}>
                FAQ
              </Link>
            </Paragraph>
          </div>
          <div className='flex flex-col space-y-4 md:col-start-6 md:col-end-7 overflow-clip'>
            <div className='font-bold'>Contact Us</div>
            <Paragraph small>firstcallpharmacy@gmail.com</Paragraph>
            <Paragraph small>0906 000 1234</Paragraph>
            <Paragraph small>0704 083 0006</Paragraph>
            <Paragraph small>8b Dipo Awolesi St, magodo Phase II, Lagos</Paragraph>
          </div>
        </div>
      </Section>
    </main>
  )
}
type chevronArrowProps = {
  open: boolean
}
const ChevronArrow = ({ open }: chevronArrowProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-blue-500`}
      viewBox='0 0 20 20'
      fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
        clipRule='evenodd'
      />
    </svg>
  )
}
