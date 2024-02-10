import React from 'react'
import CrewCard from './CrewCard'
import Image from 'next/image'

type Props = {}

const Crew = (props: Props) => {
  return (
    <>
        {/** desktop */}
        <div className='w-full h-[703px] mt-[100px] block max-lg:hidden'>
            {/** crew images conatiner */}
            <div className='w-[1083.26px] h-[300px] relative mx-[100px]'>
                {/** vectors */}
                <div className='flex absolute'>
                    <div className='mt-[100px] ml-[100px]'>
                        <svg width="128" height="117" viewBox="0 0 128 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M2.25659 65.5585L0.125498 98.1423C-0.419021 106.468 5.88873 113.658 14.2143 114.203L49.8727 116.535C53.7109 116.786 57.5002 115.564 60.4681 113.117L119.852 64.1627C123.068 61.5119 125.045 57.6504 125.317 53.4919L127.761 16.1224C128.332 7.39237 121.391 0.00422587 112.643 0.029604L77.209 0.132391C73.6208 0.1428 70.1533 1.43014 67.4276 3.76392L7.50605 55.0691C4.41485 57.7158 2.52218 61.4977 2.25659 65.5585Z" fill="url(#paint0_linear_0_410)"/>
<defs>
<linearGradient id="paint0_linear_0_410" x1="63.3396" y1="0.242664" x2="64.6604" y2="116.826" gradientUnits="userSpaceOnUse">
<stop stop-color="#62AE6E"/>
<stop offset="1" stop-color="#EDE14F"/>
</linearGradient>
</defs>
</svg>
                    </div>
                    <div className='ml-[700px] mt-[50px]'>
                    <svg width="128" height="117" viewBox="0 0 128 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M2.25659 65.5585L0.125498 98.1423C-0.419021 106.468 5.88873 113.658 14.2143 114.203L49.8727 116.535C53.7109 116.786 57.5002 115.564 60.4681 113.117L119.852 64.1627C123.068 61.5119 125.045 57.6504 125.317 53.4919L127.761 16.1224C128.332 7.39237 121.391 0.00422587 112.643 0.029604L77.209 0.132391C73.6208 0.1428 70.1533 1.43014 67.4276 3.76392L7.50605 55.0691C4.41485 57.7158 2.52218 61.4977 2.25659 65.5585Z" fill="url(#paint0_linear_0_409)"/>
<defs>
<linearGradient id="paint0_linear_0_409" x1="63.3396" y1="0.242664" x2="64.6604" y2="116.826" gradientUnits="userSpaceOnUse">
<stop stop-color="#3171DE"/>
<stop offset="1" stop-color="#4AC0F2"/>
</linearGradient>
</defs>
</svg>

                    </div>
                </div>
                {/** images container */}
                <div className='w-[925px] h-[300px] relative mx-[175px] flex'>
                    {/** images card */}
                    <div className='absolute'>
                        <CrewCard src='/Frame-one.png' />
                    </div>
                    <div className='absolute left-[150px]'>
                    <CrewCard src='/Frame-two.png' />
                    </div>
                    <div className='absolute left-[310px]'>
                        <CrewCard src='/Frame-three.png' />
                    </div>
                    <div className='absolute left-[460px]'>
                        <CrewCard src='/Frame-four.png' />
                    </div>
                    <div className='absolute left-[615px]'>
                        <CrewCard src='/Frame-five.png' />
                    </div>
                </div>

                {/** heading */}
                <div className='w-[802px] h-[62px] ml-[180px] mt-[50px]'>
                    <h2 className='text-[40px] font-epilogue font-medium leading-[62px] text-center text-[#3D3D3D]'>
                        Let&apos;s Form Your Crew.
                    </h2>
                </div>
                {/** button */}
                <div className='w-[172px] h-[48px] rounded-[50px] px-[25px] py-[18px] bg-[#3171DE] ml-[500px] mt-[50px]'>
                    <h2 className='text-[#FFFFFF] font-epilogue font-medium text-[16px] leading-[16.4px]'>
                        Schedule a Call
                    </h2>
                </div>
            </div>
        </div>

        {/** mobile */}
        <div className='hidden max-lg:block h-[925px]'>
            {/** crew images */}
            <div className='w-[349px] h-[657px] mx-[70px] mt-[80px]'>
                {/** 1st div */}
                <div className='relative mx-[40px]'>
                    <div className='absolute'>
                        <Image src='/Frame-one.png' alt='crew-one' width={152.44} height={219.14} />
                    </div>
                    <div className='absolute ml-[110px]'>
                        <Image src='/Frame-two.png' alt='crew-one' width={152.44} height={219.14} />
                    </div>
                    <div className='absolute mt-[195px]'>
                        <Image src='/Frame-three.png' alt='crew-one' width={152.44} height={219.14} />
                    </div>
                    <div className='absolute ml-[110px] mt-[195px]'>
                        <Image src='/Frame-four.png' alt='crew-one' width={152.44} height={219.14} />
                    </div>
                    <div className='absolute ml-[60px] mt-[390px]'>
                        <Image src='/Frame-five.png' alt='crew-one' width={152.44} height={219.14} />
                    </div>
                </div>
            </div>

            {/** bottom text */}
            <div className='w-[309px] h-[62px] font-epilogue font-medium text-[26px] leading-[62px] text-center text-[#3D3D3D] mx-[90px]'>
                Let&apos;s Form Your Crew
            </div>

            {/** biutton */}
            <div className='w-[182px] h-[40.7px] rounded-[42.64px] px-[29px] py-[15.35px] bg-[#3171DE] mx-[160px] mt-[30px]'>
                <h2 className='w-[144px] h-[10px] font-epilogue font-medium text-[16px] leading-[16.4px] text-[#FFFFFF]'>
                    Schedule a Call
                </h2>
            </div>
        </div>
    </>
  )
}

export default Crew