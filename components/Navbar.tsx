import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      {/** Large Screens */}
      <div className="w-full h-[98px] hidden sm:block">
        {/** Container */}
        <div className="w-[1338.5px] h-[49px] flex items-center justify-between px-[50px] py-[45px]">
          {/** Logo */}
          <div className="w-[45.58px] h-[47px]">
            <Image src="/logo.png" alt="logo" width={45.58} height={47} />
          </div>
          {/** Nav Links */}
          <div className="w-[633px] h-[49px] rounded-[50px] bg-[#F7F7FD] items-center flex">
            <div className="w-[498px] h-[16px] font-epilogue font-semibold text-[16px] leading-[16.4px] ml-[68px] space-x-[70px]">
              <Link href="/" className="text-[#3056D3]">
                Home
              </Link>
              <Link href="/" className="text-[#3D3D3D]">
                About Us
              </Link>
              <Link href="/" className="text-[#3D3D3D]">
                Services
              </Link>
              <Link href="/" className="text-[#3D3D3D]">
                Contact Us
              </Link>
            </div>
          </div>
          {/** Button */}
          <div className="w-[257px] h-[48px] space-x-[14px] flex">
            {/** language */}
            <div className="w-[71px] h-[48px] flex rounded-[12px] px-[16px] py-[6px] gap-[6px] text-[14px] font-epilogue font-normal leading-5 text-[#424242] items-center justify-center">
              <h2 className="w-[17px] h-[20px]">EN</h2>
              <ChevronDown size={14} />
            </div>
            {/** button */}
            <div className="w-[172px] h-[48px] rounded-[50px] px-[25px] py-[18px] bg-[#3171DE]">
              <h2 className="w-[122px] h-[12px] font-epilogue font-medium text-[16px] leading-[16.4px] text-[#FFFFFF]">
                Schedule a Call
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/** Small Screens */}
      <div className="min-w-[375px] h-[92px] px-[40px] py-[20px] sm:hidden block">
        <div className="flex items-center justify-between">
            {/** logo */}
            <div className="w-[45.58px] h-[47px]">
                <Image
                    src='/logo.png'
                    alt='logo'
                    width={45.58}
                    height={47} 
                />
            </div>
            {/** icon */}
            <div className="w-[24px] h-[24px]">
                <Menu color="#3D3D3D" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
