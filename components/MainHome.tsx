import Image from "next/image";
import React from "react";

type Props = {};

const MainHome = (props: Props) => {
  return (
    <>
      <div className="relative w-full h-[752px] mt-[30px] hidden sm:block">
        {/** text on image */}
        <div className="absolute z-[999] px-[50px] py-[140px]">
            {/** headings */}
            <div className="w-[490px] h-[338px] space-y-[20px] mb-[40px]">
              {/** heading1 */}
              <h2 className="w-[173px] h-[23px] font-roboto font-semibold text-[20px] leading-[23.44px] text-[#F3BC4C]">
                TECH SERVICES
              </h2>
              {/** heading2 */}
              <h2 className="h-[240px] font-epilogue font-medium text-[#3D3D3D] text-[64px] leading-[80px]">
                TechSynergy: Innovate, Create, Elevate
              </h2>
              {/** heading3 */}
              <h2 className="w-[424px] h-[21px] font-epilogue font-medium text-[20px] text-[#525252] leading-[20.5px]">
                Unlocking Possibilities, One Code at a Time
              </h2>
            </div>
            {/** button */}
            <div className="w-[172px] h-[48px] rounded-[50px] px-[34px] py-[18px] bg-[#66B066]">
              <h2 className="w-[104px] h-[12px] font-epilogue font-medium text-[16px] leading-[16.4px] text-[#FFFFFF]">
                See projects
              </h2>
            </div>
        </div>

        {/** image container */}
        <div className="w-[1102px] h-[679px] ml-[200px]">
            <div className="relative w-full h-full">
              <Image
                src="/homepage.png"
                alt="home-page"
                objectFit="cover"
                layout="fill"
              />
              {/** gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
            </div>
        </div>
      </div>

      {/** Small Screens */}
      <div className="relative min-w-[375px] h-[419px] py-[19.24px] px-[24px] block sm:hidden">
        <Image
          src='/homepage.png'
          alt='home-page-small-devices'
          objectFit="cover"
          layout="fill" 
        />
        <div className="absolute inset-0 rounded-lg bg-black/90 opacity-80"></div>
        {/** text on image */}
        <div className="absolute">
            {/** headings */}
            <div className="w-[323px] h-[271px] space-y-[20px] mb-[40px]">
              {/** heading1 */}
              <h2 className="w-[107px] h-[14px] font-roboto font-semibold text-[12.02px] leading-[14.09px] text-[#F3BC4C]">
                TECH SERVICES
              </h2>
              {/** heading2 */}
              <h2 className="w-[297px] h-[193px] font-epilogue font-medium text-[#FFFFFF] text-[40px] leading-[48.1px]">
                TechSynergy: Innovate, Create, Elevate
              </h2>
              {/** heading3 */}
              <h2 className="h-[14px] font-epilogue font-medium text-[14px] text-[#FFFFFF] leading-[20.5px]">
                Unlocking Possibilities, One Code at a Time
              </h2>
            </div>
            {/** button */}
            <div className="w-[161px] h-[42.64px] rounded-[50px] px-[29px] py-[15.35px] bg-[#66B066]">
              <h2 className="w-[88.7px] h-[10.23px] font-epilogue font-medium text-[13.65px] leading-[13.99px] text-[#FFFFFF]">
                See projects
              </h2>
            </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
