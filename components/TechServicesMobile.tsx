import React from 'react'
import TechServicesMobileCard from './TechServicesMobileCard';

type Props = {}

const TechServicesMobile = (props: Props) => {
  return (
    <div className='space-y-[27px]'>
        {/** heading */}
        <div className='w-[345px] h-[176px] p-[10px] flex space-x-[13.13px] mx-[40px]'>
            <div className=''>
                <svg width="65" height="60" viewBox="0 0 65 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M1.22097 33.9311L0.142446 50.4214C-0.13313 54.6349 3.05916 58.274 7.27264 58.5496L25.3191 59.7299C27.2615 59.8569 29.1793 59.2383 30.6813 58.0001L60.7349 33.2247C62.3622 31.8831 63.3631 29.9289 63.5008 27.8243L64.7376 8.91192C65.0266 4.49376 61.5139 0.754688 57.0863 0.767532L39.1537 0.819551C37.3377 0.824819 35.5829 1.47633 34.2034 2.65743L3.87768 28.6225C2.31325 29.962 1.35539 31.876 1.22097 33.9311Z" fill="url(#paint0_linear_0_479)"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_479" x1="32.1345" y1="0.87536" x2="32.803" y2="59.8772" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3171DE"/>
                            <stop offset="1" stop-color="#4AC0F2"/>
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <h2 className='text-[#3D3D3D] text-[24px] font-epilogue font-medium leading-[43.77px]'>
                Empowering Your Digital Vision: Our Comprehensive Tech Services.
            </h2>
        </div>

        {/** cards div */}
        <div className='w-[343px] h-[285px] flex space-x-[35px] mt-[20px]'>
            {/** card */}
            <TechServicesMobileCard />
            
        </div>
    </div>
  )
}

export default TechServicesMobile;

{/**
<div className='w-[220px] h-[285px] rounded-[25.82px] shadow-md'></div>
            <div className='w-[220px] h-[285px] rounded-[25.82px] shadow-md'></div>
 */}