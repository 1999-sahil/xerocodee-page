import React from 'react'

type Props = {
    svg: JSX.Element;
    title: String;
    desc: String;
}

const Card = ({ svg, title, desc }: Props) => {
  return (
    <div className='w-[329px] h-[205px] bg-[#FFFFFF] p-[20px] max-lg:w-[284px] max-lg:h-[172.5px] space-y-[35px] max-lg:space-y-[16px]'>
        <span className='w-[50px] h-[50px] max-lg:w-[36.5px] max-lg:h-[36.5px]'>
            {svg}
        </span>
        <div className='w-[329px] h-[120px] max-lg:w-[284px] max-lg:h-[120px] space-y-[8px]'>
            <h2 className='h-[40px] font-epilogue font-medium text-[28px] max-lg:text-[20px] leading-[40px] text-[#3D3D3D]'>
                {title}
            </h2>
            <h2 className='h-[72px] font-epilogue text-[16px] max-lg:text-[12px] font-normal leading-[24px] text-[#525252]'>
                {desc}
            </h2>
        </div>
    </div>
  )
}

export default Card