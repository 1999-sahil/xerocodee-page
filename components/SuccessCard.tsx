import React from 'react'

type Props = {
    style?: React.CSSProperties;
    title: String;
    desc: String;
}

const SuccessCard = ({ style, title, desc }: Props) => {
  return (
    <div className={`w-[385px] h-[229px] rounded-[35.39px] shadow-lg`} style={style}>
        <div className='pt-[37px] pl-[28px] space-y-[19px]'>
            {/** heading */}
            <div className='w-[327px] h-[64px] font-epilogue font-medium text-[24px] leading-[32px] text-[#3D3D3D]'>
                {title}
            </div>
            {/** desc */}
            <div className='w-[329px] h-[72px] font-epilogue font-normal text-[16px] leading-[24px] text-[#525252]'>{desc}</div>
        </div>
    </div>
  )
}

export default SuccessCard