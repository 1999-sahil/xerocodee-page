import React from 'react'

type Props = {
    svg: JSX.Element;
    title: String;
    desc: String;
}

const MobileCard = ({ svg, title, desc }: Props) => {
  return (
    <div className='shadow-lg p-[20px] space-y-[20px] rounded-[25.82px]'>
        <div className='w-[34.48px] h-[36.48px]'>
            {svg}
        </div>

        <div className='w-[177px] h-[172.86px]'>
            <h2 className='h-[88px] font-epilogue font-medium text-[20.43px] leading-[29.18px] text-[#3D3D3D]'>
                {title}
            </h2>
            <p className='h-[71px] font-epilogue font-normal text-[11.67px] leading-[17.51px] text-[#525252]'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default MobileCard