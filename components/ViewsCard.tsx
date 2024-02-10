import React from 'react'

type Props = {
    title: String;
    desc: String;
    svg: JSX.Element;
    name: String;
    company: String;
}

const ViewsCard = ({ title, desc, svg, name, company }: Props) => {
    return (
        <>
            <div className='w-[395.35px] h-[527px] rounded-[21.66px] border-[0.72px] p-[34.65px] border-[#F0F0F6] bg-[#FFFFFF] shadow-md'>
                {/** stars */}
                <div className='w-[156px] h-[28px] mb-[35px]'>
                    ⭐⭐️⭐️⭐️⭐️️
                </div>

                {/** description */}
                <div className='w-[326.05px] h-[294.66px] space-y-[8.66px] mb-[35px]'>
                    {/** title */}
                    <h2 className='w-[326.05px] h-[73px] font-dmsans text-[24px] text-[#1E1B39] leading-[36.09px] font-bold'>
                        {title}
                    </h2>
                    {/** description */}
                    <p className='w-[326.05px] h-[213px] font-dmsans font-normal text-[17.32px] leading-[30.32px] text-[#6E6C83]'>
                        {desc}
                    </p>
                </div>

                {/** border line */}
                <div className='w-[326.05px] border-[1.08px] bg-[#DEDEE9] mb-[20px]'></div>
                
                {/** svg and name */}
                <div className='flex space-x-[30px]'>
                    {/** svg */}
                    <div className='w-[33px] h-[33px] mt-[20px]'>
                        {svg}
                    </div>
                    <div className='w-[171px] h-[58.32px] space-y-[10.83px]'>
                        <h2 className='w-[138px] h-[28px] font-dmsans font-bold text-[20.21px] leading-[27.43px] text-[#1E1B39]'>{name}</h2>
                        <h2 className='h-[28px] font-dmsans font-bold text-[13px] leading-[27.43px] text-[#525252]'>{company}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewsCard;