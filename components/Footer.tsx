import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      {/** desktop */}
      <div className='p-[50px] block max-lg:hidden'>
        {/** container */}
        <div className='w-[1174px] h-[389.69px] mx-[80px]'>
          {/** footer links container */}
          <div className='flex justify-between'>
            {/** product */}
            <div className='w-[197px] h-[219.22px] mt-[30px]'>
              <h2 className='w-[64px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>
                Product
              </h2>
              <div className='flex flex-col space-y-[16px] mt-[20px]'>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Employee database
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Payroll
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Absences
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Time tracking
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Shift planner
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Recruiting
                </Link>
              </div>
            </div>
            
            {/** information */}
            <div className='w-[95.45px] h-[123px] mt-[30px]'>
              <h2 className='w-[64px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>
                Information
              </h2>
              <div className='flex flex-col space-y-[16px] mt-[20px]'>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  FAQ
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Blog
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Support
                </Link>
              </div>
            </div>
            
            {/** company */}
            <div className='w-[97.05px] h-[160.94px] mt-[30px]'>
              <h2 className='w-[64px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>
                Company
              </h2>
              <div className='flex flex-col space-y-[16px] mt-[20px]'>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  About us
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Careers
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Contact us
                </Link>
                <Link href='/' className='font-epilogue font-normal text-[16px] leading-[16.4px] text-[#9b9b9b]'>
                  Lift Media
                </Link>
              </div>
            </div>
            
            {/** subscribe */}
            <div className='w-[369px] h-[261px] rounded-[30px] bg-gray-100'>
              {/** email */}
              <div className='w-[277.65px] h-[197px] mx-[45px] my-[32px] space-y-[20px]'>
                <h2 className='w-[80px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>Subscribe</h2>
                {/** email and button */}
                <div className='w-[271px] h-[50px] rounded-[30px] bg-[#FFFFFF] border-[1.5px] border-solid border-[#E7E8F2] relative'>
                  <h2 className='w-[109px] h-[18px] font-epilogue font-normal text-[14px] leading-[14.35px] text-[#525252] absolute mt-[15px] ml-[20px]'>Email address</h2>
                  <div className='w-[54px] h-[50px] rounded-full bg-[#3171DE] ml-[216px] flex items-center justify-center'>
                    <div className='flex items-center justify-center'>
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6419 13.3047L16.8249 7.6652C17.3942 7.14567 17.3942 6.30357 16.8249 5.78564L10.6419 0.146151L8.58072 2.02691L12.2754 5.39609H0.548676L0.548676 8.05435H12.2754L8.58072 11.4247L10.6419 13.3047Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
                {/** desc */}
                <div className='w-[277px] h-[83px] font-epilogue text-[12px] text-gray-600 font-normal leading-[20.4px]'>
                  Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
                </div>
              </div>
            </div>
          </div>

          {/** border */}
          <div className='w-[1174px] h-[1.01px] border-[1px] border-solid bg-[#0A142F] mt-[60px]'></div>

          {/** bottom (social icons, t&c) */}
          <div className='flex items-center justify-between mt-[30px]'>
            {/** logo */}
            <div className='w-[45.58px] h-[47px]'>
              <Image
                src='/logo.png'
                alt='logo'
                width={45}
                height={47} 
              />
            </div>
            {/** items */}
            <div className='w-[236.11px] h-[18.22px] flex space-x-[30px] font-epilogue font-medium text-[14px] text-[#0A142F]'>
              <Link href='/'>Terms</Link>
              <Link href='/'>Privacy</Link>
              <Link href='/'>Cookies</Link>
            </div>
            {/** social icons */}
            <div className='flex items-center space-x-[20px]'>
              {/** linkedin */}
              <div className='w-[38.26px] h-[35.43px] bg-[#FFFFFF] rounded-full border-[1.5px] border-solid border-[#E7E8F2] flex items-center justify-center'>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07496 3.40563C2.97059 3.40563 3.69664 2.73332 3.69664 1.90399C3.69664 1.07465 2.97059 0.402344 2.07496 0.402344C1.17933 0.402344 0.453278 1.07465 0.453278 1.90399C0.453278 2.73332 1.17933 3.40563 2.07496 3.40563Z" fill="#0A142F"/>
                  <path d="M3.42636 4.4082H0.723558C0.574363 4.4082 0.453278 4.52033 0.453278 4.65848V12.1667C0.453278 12.3048 0.574363 12.417 0.723558 12.417H3.42636C3.57556 12.417 3.69664 12.3048 3.69664 12.1667V4.65848C3.69664 4.52033 3.57556 4.4082 3.42636 4.4082Z" fill="#0A142F"/>
                  <path d="M11.4808 3.99164C10.3256 3.62524 8.88069 3.94709 8.01417 4.52422C7.98444 4.4166 7.87849 4.33651 7.75254 4.33651H5.04973C4.90054 4.33651 4.77945 4.44864 4.77945 4.58679V12.095C4.77945 12.2331 4.90054 12.3453 5.04973 12.3453H7.75254C7.90173 12.3453 8.02282 12.2331 8.02282 12.095V6.6991C8.45959 6.35072 9.02231 6.23959 9.48287 6.42079C9.92937 6.59548 10.1851 7.02195 10.1851 7.59007V12.095C10.1851 12.2331 10.3061 12.3453 10.4553 12.3453H13.1581C13.3073 12.3453 13.4284 12.2331 13.4284 12.095V7.08602C13.3976 5.02927 12.3527 4.26794 11.4808 3.99164Z" fill="#0A142F"/>
                </svg>
              </div>

              {/** facebook */}
              <div className='w-[38.26px] h-[35.43px] bg-[#FFFFFF] rounded-full border-[1.5px] border-solid border-[#E7E8F2] flex items-center justify-center'>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.86442 2.44777H7.62256C7.78431 2.44777 7.91558 2.33323 7.91558 2.19209V0.658022C7.91558 0.516888 7.78431 0.402344 7.62256 0.402344H5.86442C4.08753 0.402344 2.64118 1.66386 2.64118 3.21481V5.00455H0.590019C0.428271 5.00455 0.296997 5.1191 0.296997 5.26023V6.7943C0.296997 6.93544 0.428271 7.04998 0.590019 7.04998H2.64118V12.4192C2.64118 12.5604 2.77245 12.6749 2.9342 12.6749H4.69233C4.85408 12.6749 4.98536 12.5604 4.98536 12.4192V7.04998H7.03651C7.16251 7.04998 7.27445 6.97941 7.31488 6.8751L7.90093 5.34103C7.93082 5.2633 7.91558 5.17739 7.86049 5.1104C7.80482 5.04393 7.71691 5.00455 7.62256 5.00455H4.98536V3.21481C4.98536 2.79191 5.37976 2.44777 5.86442 2.44777Z" fill="#0A142F"/>
                </svg>
              </div>

              {/** twitter */}
              <div className='w-[38.26px] h-[35.43px] bg-[#FFFFFF] rounded-full border-[1.5px] border-solid border-[#E7E8F2] flex items-center justify-center'>
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0319 1.70588C13.9431 1.61298 13.8 1.58961 13.6826 1.64691C13.6096 1.68252 13.4723 1.72925 13.3093 1.77542C13.5149 1.51507 13.6802 1.22356 13.7532 0.96154C13.7848 0.848609 13.7386 0.729558 13.6382 0.662245C13.5377 0.595487 13.404 0.595487 13.3035 0.662245C13.1452 0.767387 12.3812 1.08337 11.8982 1.18573C10.8065 0.275052 9.53609 0.18048 8.21545 0.91481C7.14189 1.51173 6.90825 2.7256 6.95381 3.46549C4.49653 3.24019 2.96912 2.00407 2.10934 0.98101C2.04918 0.909246 1.95222 0.871417 1.8611 0.87698C1.76531 0.883656 1.67886 0.93428 1.6298 1.01272C1.22327 1.66639 1.11054 2.38903 1.30504 3.10278C1.41135 3.4922 1.59709 3.83544 1.81262 4.1136C1.70924 4.0652 1.60936 4.00456 1.51532 3.93224C1.42887 3.86437 1.30796 3.85157 1.20575 3.89663C1.10411 3.94281 1.03928 4.04072 1.03928 4.14809C1.03928 5.37364 1.84416 6.19142 2.59589 6.61866C2.4744 6.60475 2.34765 6.57916 2.21973 6.54189C2.10992 6.51018 1.99077 6.54189 1.91484 6.62422C1.8389 6.706 1.8208 6.82283 1.86811 6.92241C2.29041 7.81195 3.09062 8.42389 4.08065 8.64586C3.2162 9.12929 2.05911 9.36628 0.999562 9.25001C0.8623 9.23165 0.731463 9.31454 0.68824 9.44027C0.645017 9.566 0.701674 9.70396 0.822582 9.76849C2.43001 10.628 3.88323 10.9351 5.13903 10.9351C6.96666 10.9351 8.37725 10.2853 9.23586 9.74179C11.5506 8.27869 12.9933 5.65179 12.7924 3.30138C13.1633 3.04047 13.7182 2.55871 14.0622 2.04078C14.1335 1.9362 14.1206 1.79823 14.0319 1.70588Z" fill="#0A142F"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** mobile */}
      <div className='hidden max-lg:block h-[950px] mt-[400px]'>
        {/** conatiner */}
        <div className='h-[916px] mx-[40px]'>
          {/** footer links */}
          <div className='h-[404px] space-y-[25px]'>
            {/** 1st and 2nd div */}
            <div className='h-[160px] flex space-x-[130px]'>
              <div className='w-[95px] h-[123px] space-y-[10px]'>
                <h2 className='w-[64px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>
                  Information
                </h2>
                <div className='flex flex-col space-y-[10px]'>
                  <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>FAQ</Link>
                  <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Blog</Link>
                  <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Support</Link>
                </div>
              </div>
              <div className='w-[97px] h-[160px] space-y-[10px]'>
                <h2 className='w-[64px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>
                  Company
                </h2>
                <div className='flex flex-col space-y-[10px]'>
                  <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>About us</Link>
                  <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Careers</Link>
                  <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Contact us</Link>
                  <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Lift Media</Link>
                </div>
              </div>
            </div>
            {/** 3rd div */}
            <div className='h-[219px] space-y-[10px]'>
              <h2 className='w-[64px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>
                Product
              </h2>
              <div className='flex flex-col space-y-[10px]'>
                <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Employee database</Link>
                <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Payroll</Link>
                <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Absences</Link>
                <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Time tracking</Link>
                <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Shift planner</Link>
                <Link href='/' className='font-epilogue font-normal text-[14px] leading-[16.4px] text-gray-400'>Recruiting</Link>
              </div>
            </div>
          </div>

          {/** email box */}
          <div className='h-[261px] rounded-[30px] bg-gray-100 mt-[30px] p-[30px]'>
            <div className='h-[197px] space-y-[18px]'>
              <h2 className='w-[80px] h-[28px] font-epilogue font-medium text-[16px] leading-[28px] text-[#0A142F]'>Subscribe</h2>
              <div className='w-[271px] h-[50px] rounded-[30px] border-[1.5px] border-[#E7E8F2] bg-[#FFFFFF] flex justify-between'>
                <h2 className='w-[109px] h-[18px] font-epilogue font-normal text-[14px] leading-[14.35px] text-[#616263] ml-[30px] my-[17px]'>Email address</h2>
                <div className='w-[54.66px] h-[50px] rounded-full bg-[#3171DE] flex items-center justify-center'>
                  <div className='w-[13px] h-[16px]'>
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2045 13.6577L16.3875 8.01823C16.9568 7.4987 16.9568 6.6566 16.3875 6.13867L10.2045 0.499178L8.14337 2.37994L11.8381 5.74912H0.111328L0.111328 8.40738H11.8381L8.14337 11.7778L10.2045 13.6577Z" fill="white"/>
                  </svg>

                  </div>
                </div>
              </div>
              <p className='w-[277px] h-[83px] font-epilogue font-normal text-[12px] leading-[20.4px] text-[#525252]'>
                Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
              </p>
            </div>
          </div>

          {/** border */}
          <div className='w-full h-[1px] border-[1px] bg-[#0A142F] my-[50px]'></div>

          {/** social icons */}
          <div className='h-[103px] space-y-[21px]'>
            {/** icons */}
            <div className='h-[35px] space-x-[16px] flex'>
              <div className='w-[38px] h-[35px] border-[1.5px] rounded-full border-gray-300 bg-white flex items-center justify-center'>
              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.11961 3.29601C3.01524 3.29601 3.74129 2.6237 3.74129 1.79437C3.74129 0.965032 3.01524 0.292725 2.11961 0.292725C1.22398 0.292725 0.497925 0.965032 0.497925 1.79437C0.497925 2.6237 1.22398 3.29601 2.11961 3.29601Z" fill="#0A142F"/>
<path d="M3.47101 4.29858H0.768205C0.61901 4.29858 0.497925 4.41071 0.497925 4.54886V12.0571C0.497925 12.1952 0.61901 12.3073 0.768205 12.3073H3.47101C3.6202 12.3073 3.74129 12.1952 3.74129 12.0571V4.54886C3.74129 4.41071 3.6202 4.29858 3.47101 4.29858Z" fill="#0A142F"/>
<path d="M11.5254 3.88202C10.3703 3.51562 8.92533 3.83747 8.05881 4.4146C8.02908 4.30698 7.92313 4.22689 7.79718 4.22689H5.09438C4.94518 4.22689 4.8241 4.33902 4.8241 4.47717V11.9854C4.8241 12.1235 4.94518 12.2356 5.09438 12.2356H7.79718C7.94638 12.2356 8.06746 12.1235 8.06746 11.9854V6.58948C8.50424 6.2411 9.06696 6.12998 9.52752 6.31117C9.97402 6.48586 10.2297 6.91233 10.2297 7.48045V11.9854C10.2297 12.1235 10.3508 12.2356 10.5 12.2356H13.2028C13.352 12.2356 13.4731 12.1235 13.4731 11.9854V6.9764C13.4423 4.91965 12.3974 4.15832 11.5254 3.88202Z" fill="#0A142F"/>
</svg>

              </div>

              <div className='w-[38px] h-[35px] border-[1.5px] rounded-full border-gray-300 bg-white flex items-center justify-center'>
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.51158 2.33815H8.26971C8.43146 2.33815 8.56274 2.22361 8.56274 2.08247V0.548403C8.56274 0.407269 8.43146 0.292725 8.26971 0.292725H6.51158C4.73469 0.292725 3.28833 1.55424 3.28833 3.10519V4.89494H1.23718C1.07543 4.89494 0.944153 5.00948 0.944153 5.15061V6.68468C0.944153 6.82582 1.07543 6.94036 1.23718 6.94036H3.28833V12.3096C3.28833 12.4507 3.41961 12.5653 3.58135 12.5653H5.33949C5.50124 12.5653 5.63251 12.4507 5.63251 12.3096V6.94036H7.68367C7.80967 6.94036 7.9216 6.86979 7.96204 6.76548L8.54808 5.23141C8.57797 5.15368 8.56274 5.06777 8.50765 5.00079C8.45197 4.93431 8.36407 4.89494 8.26971 4.89494H5.63251V3.10519C5.63251 2.68229 6.02692 2.33815 6.51158 2.33815Z" fill="#0A142F"/>
</svg>

              </div>

              <div className='w-[38px] h-[35px] border-[1.5px] rounded-full border-gray-300 bg-white flex items-center justify-center'>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2817 1.59626C14.1929 1.50336 14.0498 1.48 13.9324 1.5373C13.8594 1.5729 13.7222 1.61963 13.5592 1.6658C13.7648 1.40545 13.9301 1.11394 14.0031 0.85192C14.0347 0.738989 13.9885 0.619939 13.8881 0.552625C13.7876 0.485868 13.6538 0.485868 13.5534 0.552625C13.3951 0.657768 12.6311 0.973752 12.148 1.07611C11.0564 0.165433 9.78596 0.0708605 8.46533 0.80519C7.39177 1.40211 7.15813 2.61598 7.20369 3.35587C4.74641 3.13057 3.219 1.89445 2.35922 0.871391C2.29906 0.799627 2.2021 0.761798 2.11098 0.767361C2.01519 0.774037 1.92874 0.824661 1.87968 0.903101C1.47315 1.55677 1.36042 2.27941 1.55492 2.99316C1.66123 3.38258 1.84697 3.72582 2.0625 4.00398C1.95911 3.95558 1.85923 3.89494 1.76519 3.82262C1.67875 3.75475 1.55784 3.74195 1.45562 3.78701C1.35399 3.83319 1.28916 3.9311 1.28916 4.03847C1.28916 5.26402 2.09404 6.0818 2.84577 6.50904C2.72428 6.49513 2.59753 6.46954 2.46961 6.43227C2.3598 6.40056 2.24065 6.43227 2.16471 6.51461C2.08878 6.59638 2.07068 6.71321 2.11799 6.81279C2.54029 7.70233 3.34049 8.31427 4.33053 8.53624C3.46607 9.01967 2.30899 9.25666 1.24944 9.14039C1.11218 9.12203 0.981341 9.20492 0.938118 9.33065C0.894895 9.45638 0.951552 9.59434 1.07246 9.65887C2.67988 10.5184 4.13311 10.8255 5.38891 10.8255C7.21654 10.8255 8.62712 10.1757 9.48574 9.63217C11.8005 8.16907 13.2432 5.54218 13.0423 3.19176C13.4132 2.93085 13.9681 2.44909 14.3121 1.93116C14.3834 1.82658 14.3705 1.68861 14.2817 1.59626Z" fill="#0A142F"/>
</svg>

              </div>
            </div>

            {/** logo */}
            <div className='h-[47px] space-x-[40px] flex items-center'>
              <div className='w-[45px] h-[47px]'>
                <Image src='/logo.png' alt='logo' width={45} height={47} />
              </div>

              <div className='flex space-x-[40px] font-epilogue font-medium text-[14px] text-[#0A142F]'>
                <Link href='/'>Terms</Link>
                <Link href='/'>Privacy</Link>
                <Link href='/'>Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Footer
