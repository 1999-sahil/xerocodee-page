import React from 'react'

type Props = {
    svg: JSX.Element;
    title: String;
    desc: String;
}

const ServiceCard = ({ svg, title, desc }: Props) => {
  return (
    <div className='w-[385px] h-[321px] rounded-[35.39px] shadow-lg space-y-[42px] bg-[#FFFFFF]'>
        {/** icon */}
        <div className='w-[50px] h-[50px] pl-[28px] pt-[28px]'>
            {svg}
        </div>
        {/** title and desc */}
        <div className='w-[329px] h-[171px] space-y-[19px] pl-[28px] pt-[28px]'>
            <h2 className='w-[327px] h-[80px] font-epilogue font-medium text-[28px] leading-[40px] text-[#3D3D3D]'>
                {title}
            </h2>
            <p className='w-[329px] h-[72px] font-epilogue font-normal text-[16px] leading-[24px] text-[#3D3D3D]'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard