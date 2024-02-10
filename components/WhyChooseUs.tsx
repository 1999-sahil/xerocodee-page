import React from 'react'
import SuccessCard from './SuccessCard';

type Props = {}

const WhyChooseUs = (props: Props) => {
  return (
    <>
      {/** desktop */}
      <div className='w-[1300px] h-[640px] rounded-[35.39px] px-0 py-[70px] bg-[#F7F7FD] mt-[20px] mx-[25px] block max-lg:hidden'>
        {/** heading and svg */}
        <div className='flex space-x-[50px] ml-[250px]'>
          {/** heading */}
          <div className='w-[802px] h-[124px]'>
            <h2 className='font-epilogue font-medium text-[40px] leading-[62px] text-center text-[#3D3D3D]'>
              Choose Us: Your Path to Innovation and <span className='bg-gradient-to-r from-[#3171DE] to-[#4AC0F2] inline-block text-transparent bg-clip-text'>Success</span>
            </h2>
          </div>
          {/** green vector */}
          <div className='w-[90px] h-[82px]'>
            <svg width="90" height="82" viewBox="0 0 90 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M2.04425 45.8238L0.565934 68.4269C0.188206 74.2022 4.56383 79.1903 10.3392 79.568L35.0751 81.1858C37.7376 81.36 40.3663 80.512 42.4251 78.8147L83.619 44.8555C85.8497 43.0167 87.2216 40.338 87.4103 37.4533L89.1056 11.5304C89.5017 5.47447 84.6868 0.349376 78.618 0.366981L54.0381 0.438283C51.5489 0.445504 49.1436 1.33852 47.2528 2.95744L5.68576 38.5474C3.54142 40.3834 2.22849 43.0069 2.04425 45.8238Z" fill="url(#paint0_linear_0_234)"/>
              <defs>
              <linearGradient id="paint0_linear_0_234" x1="44.417" y1="0.514779" x2="-15" y2="111" gradientUnits="userSpaceOnUse">
              <stop stop-color="#62AE6E"/>
              <stop offset="1" stop-color="#EDE14F"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/** cards container */}
        <div className='h-[229px] flex space-x-[38px] mx-[30px] my-[30px]'>
          {/** card */}
          <SuccessCard
            style={{ backgroundColor: '#FFFFFF' }}
            title='Expertise Across the Tech Spectrum'
            desc='Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.' 
          />

          <SuccessCard
            style={{ background: 'linear-gradient(40deg, #EDE14F, #62AE6E)' }}
            title='Proven Track Record of Success:'
            desc='Our portfolio is a testament to our ability to deliver impactful results.' 
          />

          <SuccessCard
            style={{ backgroundColor: '#FFFFFF' }}
            title='Collaborative Approach, Communication:'
            desc='We believe in working hand-in-hand with our clients.'
          />
        </div>

        {/** svg and pagination */}
        <div className='flex mx-[200px]'>
          {/** blue vector */}
          <div className='w-[90] h-[80]'>
            <svg width="90" height="82" viewBox="0 0 90 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M2.04425 45.8238L0.565934 68.4269C0.188206 74.2022 4.56383 79.1903 10.3392 79.568L35.0751 81.1858C37.7376 81.36 40.3663 80.512 42.4251 78.8147L83.619 44.8555C85.8497 43.0167 87.2216 40.338 87.4103 37.4533L89.1056 11.5304C89.5017 5.47447 84.6868 0.349376 78.618 0.366981L54.0381 0.438283C51.5489 0.445504 49.1436 1.33852 47.2528 2.95744L5.68576 38.5474C3.54142 40.3834 2.22849 43.0069 2.04425 45.8238Z" fill="url(#paint0_linear_0_235)"/>
              <defs>
              <linearGradient id="paint0_linear_0_235" x1="44.417" y1="0.514779" x2="45.3332" y2="81.3877" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3171DE"/>
              <stop offset="1" stop-color="#4AC0F2"/>
              </linearGradient>
              </defs>
            </svg>

          </div>

          {/** pagination */}
          <div className='w-[148px] h-[65px] flex space-x-[20px] ml-[300px]'>
            {/** left */}
            <div className='w-[65px] h-[65px] rounded-[100px] bg-[#FFFFFF] flex items-center justify-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9995 26.5604L11.3061 17.8671C10.2795 16.8404 10.2795 15.1604 11.3061 14.1338L19.9995 5.44043" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            {/** right */}
            <div className='w-[65px] h-[65px] rounded-[100px] bg-[#FFFFFF] flex items-center justify-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8809 26.5604L20.5742 17.8671C21.6009 16.8404 21.6009 15.1604 20.5742 14.1338L11.8809 5.44043" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/** mobile */}
      <div className='hidden max-lg:block h-[622px] rounded-[35.39px] bg-[#F7F7FD] py-[45px] px-0 mt-[50px] mx-[30px]'>
        {/** text */}
        <div className='w-[263px] h-[186px] mx-[80px]'>
          <h2 className='font-epilogue font-medium text-[30px] leading-[62px] text-center text-[#3D3D3D]'>
            Choose Us: Your Path to Innovation and <span className='bg-gradient-to-r from-[#3171DE] to-[#4AC0F2] inline-block text-transparent bg-clip-text'>Success.</span>
          </h2>
        </div>

        {/** cards */}
        <div className='h-[168px] flex overflow-hidden space-x-[30px] mt-[100px] ml-[20px]'>
          {/** card1 */}
          <div className='w-[300px] h-[168px] rounded-[25.96px] bg-white shadow-md'>
            <div className='w-[241px] h-[113px] m-[30px] space-y-[13px]'>
              <h2 className='h-[47px] font-epilogue font-medium text-[17.61px] leading-[23.48px] text-[#3D3D3D]'>
                Expertise Across the Tech Spectrum
              </h2>
              <p className='h-[53px] font-epilogue font-normal text-[11.74px] leading-[17.61px] text-[#525252]'>
                Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.
              </p>
            </div>
          </div>

          {/** card2 */}
          <div className='w-[100px] h-[168px] rounded-tl-[25.96px] rounded-bl-[25.96px] bg-gradient-to-b from-[#62AE6E] to-[#EDE14F] shadow-md'></div>
        </div>

        {/** pagination buttons */}
        <div className="w-[97.35px] h-[42.76px] mx-[170px] mt-[40px] flex space-x-[15px]">
          {/** left */}
          <div className="w-[42px] h-[42px] rounded-[65.78px] bg-[#FFFFFF] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3442 18.3079L7.62582 12.5896C6.95049 11.9142 6.95049 10.8091 7.62582 10.1338L13.3442 4.41542" stroke="#292D32" stroke-width="1.31558" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          </div>

          {/** right */}
          <div className="w-[42px] h-[42px] rounded-[65.78px] bg-[#FFFFFF] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9184 18.3122L13.6368 12.5939C14.3121 11.9185 14.3121 10.8134 13.6368 10.1381L7.9184 4.41973" stroke="#292D32" stroke-width="1.31558" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs;