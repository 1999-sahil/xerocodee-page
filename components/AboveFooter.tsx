import Image from 'next/image'
import React from 'react'

type Props = {}

const AboveFooter = (props: Props) => {
  return (
    <>
      {/** desktop */}
      <div className='w-full h-[964px] px-[48px] py-[38px] block max-lg:hidden'>
        <div className='relative w-[1250px] h-[632px] mx-[10px] rounded-[35.39px] bg-gradient-to-bl from-[#3171DE] to-[#4AC0F2]'>
          {/** heading */}
          <div className='w-[901px] h-[228px] space-y-[33px] flex flex-col items-center justify-center mx-[175px]'>
            {/** text */}
            <h2 className='h-[147px] font-epilogue font-semibold text-[48px] leading-[68px] text-center text-[#FFFFFF] mt-[200px]'>
              Ready to Transform Your Vision into Reality? Let&apos;s Get Started!
            </h2>
            {/** button */}
            <div className='w-[176px] h-[48px] rounded-[50px] px-[25px] py-[18px] bg-[#FFFFFF]'>
              <h2 className='w-[126px] h-[126px] font-epilogue font-semibold text-[16px] leading-[16.4px] text-[#5E5DEF]'>
                Schedule a Call
              </h2>
            </div>
          </div>

          {/** image */}
          <div className='w-[700px] h-[409px] overflow-hidden absolute mt-[130px] ml-[275px] rounded-full'>
            <div className=''>
              <Image
                src='/vectorImage.jpg'
                alt='bottom-image'
                width={700}
                height={228} 
              />
            </div>
          </div>
        </div>
      </div>

      {/** mobile */}
      <div className='hidden max-lg:block h-[373px]'>
        <div className='w-[327px] h-[560px] mx-[85px] relative rounded-[35.39px] bg-gradient-to-b from-[#3171DE] to-[#4AC0F2]'>
          {/** text */}
          <div className='w-[301px] h-[319px] space-y-[42px] py-[90px] mx-[10px]'>
            <h2 className='h-[229px] font-epilogue font-semibold text-[32px] leading-[48px] text-center text-[#FFFFFF]'>
              Ready to Transform Your Vision into Reality? Let&apos;s Get Started!
            </h2>
            <div className='w-[176px] h-[48px] mx-[70px] rounded-[50px] bg-[#FFFFFF] px-[25px] py-[18px]'>
              <h2 className='w-[126px] h-[126px] font-epilogue font-semibold text-[16px] leading-[16.4px] text-[#5E5DEF]'>
                Schedule a Call
              </h2>
            </div>
          </div>
          {/** image */}
          <div className=' h-[202px] shadow-md absolute overflow-hidden rounded-full mt-[150px]'>
            <div className=''>
              <Image src='/vectorImage.jpg' alt='vector-image' width={355} height={202} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboveFooter

{/**
transform rotate-90
<Image
              src='/vectorImage.png'
              alt='bottom-image'
              width={700}
              height={228} 
            />
*/}