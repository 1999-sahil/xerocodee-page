import React from 'react'
import ServiceCard from './ServiceCard';
import TechServicesMobile from './TechServicesMobile';

type Props = {}

const TechServices = (props: Props) => {
  
  const svgOne = (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.75 14.5833V35.4166C43.75 41.6666 40.625 45.8333 33.3333 45.8333H16.6667C9.375 45.8333 6.25 41.6666 6.25 35.4166V14.5833C6.25 8.33329 9.375 4.16663 16.6667 4.16663H33.3333C40.625 4.16663 43.75 8.33329 43.75 14.5833Z" stroke="#66B066" stroke-width="3.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.2083 9.375V13.5417C30.2083 15.8333 32.0833 17.7083 34.375 17.7083H38.5416" stroke="#66B066" stroke-width="3.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8334 27.0834L16.6667 31.25L20.8334 35.4167" stroke="#66B066" stroke-width="3.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1667 27.0834L33.3334 31.25L29.1667 35.4167" stroke="#66B066" stroke-width="3.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );

  const svgTwo = (
    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.2076 44.5517C36.4047 44.5517 35.7389 43.8858 35.7389 43.0829V21.5413C35.7389 20.7383 36.4047 20.0725 37.2076 20.0725C38.0105 20.0725 38.6764 20.7383 38.6764 21.5413V43.0829C38.6764 43.8858 38.0105 44.5517 37.2076 44.5517Z" fill="url(#paint0_linear_1929_83)"/>
<path d="M37.2076 15.1767C36.4047 15.1767 35.7389 14.5108 35.7389 13.7079V3.91626C35.7389 3.11334 36.4047 2.44751 37.2076 2.44751C38.0105 2.44751 38.6764 3.11334 38.6764 3.91626V13.7079C38.6764 14.5108 38.0105 15.1767 37.2076 15.1767Z" fill="url(#paint1_linear_1929_83)"/>
<path d="M23.5 44.5517C22.6971 44.5517 22.0312 43.8858 22.0312 43.0829V33.2913C22.0312 32.4883 22.6971 31.8225 23.5 31.8225C24.3029 31.8225 24.9688 32.4883 24.9688 33.2913V43.0829C24.9688 43.8858 24.3029 44.5517 23.5 44.5517Z" fill="url(#paint2_linear_1929_83)"/>
<path d="M23.5 26.9267C22.6971 26.9267 22.0312 26.2608 22.0312 25.4579V3.91626C22.0312 3.11334 22.6971 2.44751 23.5 2.44751C24.3029 2.44751 24.9688 3.11334 24.9688 3.91626V25.4579C24.9688 26.2608 24.3029 26.9267 23.5 26.9267Z" fill="url(#paint3_linear_1929_83)"/>
<path d="M9.79239 44.5517C8.98947 44.5517 8.32364 43.8858 8.32364 43.0829V21.5413C8.32364 20.7383 8.98947 20.0725 9.79239 20.0725C10.5953 20.0725 11.2611 20.7383 11.2611 21.5413V43.0829C11.2611 43.8858 10.5953 44.5517 9.79239 44.5517Z" fill="url(#paint4_linear_1929_83)"/>
<path d="M9.79239 15.1767C8.98947 15.1767 8.32364 14.5108 8.32364 13.7079V3.91626C8.32364 3.11334 8.98947 2.44751 9.79239 2.44751C10.5953 2.44751 11.2611 3.11334 11.2611 3.91626V13.7079C11.2611 14.5108 10.5953 15.1767 9.79239 15.1767Z" fill="url(#paint5_linear_1929_83)"/>
<path d="M13.7083 23.01H5.875C5.07208 23.01 4.40625 22.3442 4.40625 21.5413C4.40625 20.7383 5.07208 20.0725 5.875 20.0725H13.7083C14.5113 20.0725 15.1771 20.7383 15.1771 21.5413C15.1771 22.3442 14.5113 23.01 13.7083 23.01Z" fill="url(#paint6_linear_1929_83)"/>
<path d="M41.1257 23.01H33.2924C32.4895 23.01 31.8236 22.3442 31.8236 21.5413C31.8236 20.7383 32.4895 20.0725 33.2924 20.0725H41.1257C41.9286 20.0725 42.5945 20.7383 42.5945 21.5413C42.5945 22.3442 41.9286 23.01 41.1257 23.01Z" fill="url(#paint7_linear_1929_83)"/>
<path d="M27.4159 26.9275H19.5826C18.7797 26.9275 18.1139 26.2617 18.1139 25.4587C18.1139 24.6558 18.7797 23.99 19.5826 23.99H27.4159C28.2189 23.99 28.8847 24.6558 28.8847 25.4587C28.8847 26.2617 28.2189 26.9275 27.4159 26.9275Z" fill="url(#paint8_linear_1929_83)"/>
<defs>
<linearGradient id="paint0_linear_1929_83" x1="37.2076" y1="20.0725" x2="37.2076" y2="44.5517" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint1_linear_1929_83" x1="37.2076" y1="2.44751" x2="37.2076" y2="15.1767" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint2_linear_1929_83" x1="23.5" y1="31.8225" x2="23.5" y2="44.5517" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint3_linear_1929_83" x1="23.5" y1="2.44751" x2="23.5" y2="26.9267" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint4_linear_1929_83" x1="9.79239" y1="20.0725" x2="9.79239" y2="44.5517" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint5_linear_1929_83" x1="9.79239" y1="2.44751" x2="9.79239" y2="15.1767" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint6_linear_1929_83" x1="9.79167" y1="20.0725" x2="9.79167" y2="23.01" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint7_linear_1929_83" x1="37.2091" y1="20.0725" x2="37.2091" y2="23.01" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
<linearGradient id="paint8_linear_1929_83" x1="23.4993" y1="23.99" x2="23.4993" y2="26.9275" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="#704AF2"/>
</linearGradient>
</defs>
</svg>

  );

  const svgThree = (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.6667 29.1667C43.9679 29.1667 45.8333 27.3012 45.8333 25C45.8333 22.6989 43.9679 20.8334 41.6667 20.8334C39.3655 20.8334 37.5 22.6989 37.5 25C37.5 27.3012 39.3655 29.1667 41.6667 29.1667Z" stroke="#F3BC4C" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.6667 12.5C43.9679 12.5 45.8333 10.6345 45.8333 8.33329C45.8333 6.03211 43.9679 4.16663 41.6667 4.16663C39.3655 4.16663 37.5 6.03211 37.5 8.33329C37.5 10.6345 39.3655 12.5 41.6667 12.5Z" stroke="#F3BC4C" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.6667 45.8333C43.9679 45.8333 45.8333 43.9679 45.8333 41.6667C45.8333 39.3655 43.9679 37.5 41.6667 37.5C39.3655 37.5 37.5 39.3655 37.5 41.6667C37.5 43.9679 39.3655 45.8333 41.6667 45.8333Z" stroke="#F3BC4C" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33333 29.1667C10.6345 29.1667 12.5 27.3012 12.5 25C12.5 22.6989 10.6345 20.8334 8.33333 20.8334C6.03215 20.8334 4.16667 22.6989 4.16667 25C4.16667 27.3012 6.03215 29.1667 8.33333 29.1667Z" stroke="#F3BC4C" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 25H37.5" stroke="#F3BC4C" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5 8.33337H29.1667C25 8.33337 22.9167 10.4167 22.9167 14.5834V35.4167C22.9167 39.5834 25 41.6667 29.1667 41.6667H37.5" stroke="#F3BC4C" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );

  const svgFour = (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.4376 8.20832C42.2292 16.2083 34.1876 27.0833 27.4584 32.4792L23.3542 35.7708C22.8334 36.1458 22.3126 36.4792 21.7292 36.7083C21.7292 36.3333 21.7084 35.9167 21.6459 35.5208C21.4167 33.7708 20.6251 32.1458 19.2292 30.75C17.8126 29.3333 16.0834 28.5 14.3126 28.2708C13.8959 28.25 13.4792 28.2083 13.0626 28.25C13.2917 27.6042 13.6459 27 14.0834 26.5L17.3334 22.3958C22.7084 15.6667 33.6251 7.58332 41.6042 4.39582C42.8334 3.93749 44.0209 4.27082 44.7709 5.04166C45.5626 5.81249 45.9376 6.99999 45.4376 8.20832Z" stroke="#E27244" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.7292 36.7084C21.7292 39.0001 20.8542 41.1876 19.2084 42.8543C17.9375 44.1251 16.2084 45.0001 14.1459 45.2709L9.02087 45.8334C6.22921 46.1459 3.83337 43.7709 4.16671 40.9376L4.72921 35.8126C5.22921 31.2501 9.04171 28.3334 13.0834 28.2501C13.5 28.2293 13.9375 28.2501 14.3334 28.2709C16.1042 28.5001 17.8334 29.3126 19.25 30.7501C20.6459 32.1459 21.4375 33.7709 21.6667 35.5209C21.6875 35.9167 21.7292 36.3126 21.7292 36.7084Z" stroke="#E27244" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.6667 30.1458C29.6667 24.7083 25.25 20.2916 19.8125 20.2916" stroke="#E27244" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );

  const svgFive = (
    <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39 13.5625V36.6875C39 45.9375 36.6875 48.25 27.4375 48.25H13.5625C4.3125 48.25 2 45.9375 2 36.6875V13.5625C2 4.3125 4.3125 2 13.5625 2H27.4375C36.6875 2 39 4.3125 39 13.5625Z" stroke="#5E5DEF" stroke-width="3.46875" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.125 10.0938H15.875" stroke="#5E5DEF" stroke-width="3.46875" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 41.5438C22.4796 41.5438 24.0844 39.939 24.0844 37.9594C24.0844 35.9798 22.4796 34.375 20.5 34.375C18.5204 34.375 16.9156 35.9798 16.9156 37.9594C16.9156 39.939 18.5204 41.5438 20.5 41.5438Z" stroke="#5E5DEF" stroke-width="3.46875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );

  const svgSix = (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.3542 25.5209V34.8959C35.3542 42.7084 32.2292 45.8334 24.4167 45.8334H15.0417C7.22916 45.8334 4.10417 42.7084 4.10417 34.8959V25.5209C4.10417 17.7084 7.22916 14.5834 15.0417 14.5834H24.4167C32.2292 14.5834 35.3542 17.7084 35.3542 25.5209Z" stroke="#DF5E63" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.7708 15.625C45.7708 21.6041 41.2083 26.5 35.3542 27.0208V25.5208C35.3542 17.7083 32.2292 14.5833 24.4167 14.5833H22.9167C23.4375 8.72913 28.3333 4.16663 34.3125 4.16663C40.125 4.16663 44.9167 8.47913 45.6458 14.1041C45.7292 14.5833 45.7708 15.1041 45.7708 15.625Z" stroke="#DF5E63" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );

  return (
    <>
        {/** Desktop */}
        <div className='h-[1000px] space-y-[18px] block max-lg:hidden'>
        {/** heading */}
        <div className='w-[841px] h-[120px] flex space-x-[18px] mx-[250px]'>
            {/** vector */}
            <div className='w-[90.84px] h-[80.88px]'>
                <svg width="90" height="82" viewBox="0 0 90 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M2.04425 45.8235L0.565934 68.4266C0.188206 74.202 4.56383 79.19 10.3392 79.5678L35.0751 81.1856C37.7376 81.3597 40.3663 80.5117 42.4251 78.8145L83.619 44.8553C85.8497 43.0164 87.2216 40.3378 87.4103 37.4531L89.1056 11.5301C89.5017 5.47422 84.6868 0.349132 78.618 0.366737L54.0381 0.438039C51.5489 0.44526 49.1436 1.33828 47.2528 2.95719L5.68576 38.5471C3.54142 40.3831 2.22849 43.0066 2.04425 45.8235Z" fill="url(#paint0_linear_0_349)"/>
                    <defs>
                    <linearGradient id="paint0_linear_0_349" x1="44.417" y1="0.514535" x2="45.3332" y2="81.3874" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3171DE"/>
                        <stop offset="1" stop-color="#4AC0F2"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            
            {/** heading */}
            <div className='w-[731.25px] h-[120px]'>
                <h2 className='text-[40px] font-epilogue font-medium leading-[60px] text-[#3D3D3D]'>
                    Empowering Your Digital Vision: Our Comprehensive Tech Services.
                </h2>
            </div>
        </div>

        {/** card components */}
        <div className='relative w-[1259px] h-[690px] mx-[50px]'>
            {/** svg's */}
            <div className='absolute'>
                <div className='ml-[750px] mt-[200px]'>
                    {/** green svg */}
                    <svg width="200" height="200" viewBox="0 0 90 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M2.04425 45.8238L0.565934 68.4269C0.188206 74.2022 4.56383 79.1903 10.3392 79.568L35.0751 81.1858C37.7376 81.36 40.3663 80.512 42.4251 78.8147L83.619 44.8555C85.8497 43.0167 87.2216 40.338 87.4103 37.4533L89.1056 11.5304C89.5017 5.47447 84.6868 0.349376 78.618 0.366981L54.0381 0.438283C51.5489 0.445504 49.1436 1.33852 47.2528 2.95744L5.68576 38.5474C3.54142 40.3834 2.22849 43.0069 2.04425 45.8238Z" fill="url(#paint0_linear_0_322)"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_322" x1="44.417" y1="0.514779" x2="45.3332" y2="81.3877" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#62AE6E"/>
                            <stop offset="1" stop-color="#EDE14F"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </div>

                <div className='ml-[300px]'>
                    {/** blue svg */}
                    <svg width="200" height="200" viewBox="0 0 90 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M2.04425 45.8235L0.565934 68.4266C0.188206 74.202 4.56383 79.19 10.3392 79.5678L35.0751 81.1856C37.7376 81.3597 40.3663 80.5117 42.4251 78.8145L83.619 44.8553C85.8497 43.0164 87.2216 40.3378 87.4103 37.4531L89.1056 11.5301C89.5017 5.47422 84.6868 0.349132 78.618 0.366737L54.0381 0.438039C51.5489 0.44526 49.1436 1.33828 47.2528 2.95719L5.68576 38.5471C3.54142 40.3831 2.22849 43.0066 2.04425 45.8235Z" fill="url(#paint0_linear_0_349)"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_349" x1="44.417" y1="0.514535" x2="45.3332" y2="81.3874" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3171DE"/>
                            <stop offset="1" stop-color="#4AC0F2"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </div>

            </div>

            {/** cards */}

            {/** top div */}
            <div className='w-[1259px] h-[321px] flex space-x-[52px]'>
                <ServiceCard
                    svg={svgOne}
                    title='Custom Software Development'
                    desc='Create custom software tailored for your unique needs, including front-end, and core back-end technology.' 
                />

                <ServiceCard
                    svg={svgTwo}
                    title='QA and Testing'
                    desc='Create custom software tailored for your unique needs, including front-end, and core back-end technology.' 
                />

                <ServiceCard
                    svg={svgThree}
                    title='AI and Data Science'
                    desc='Use leading AI, machine learning, and data engineering technologies to unlock business value.' 
                />
            </div>
            
            {/** bottom div */}
            <div className='w-[1259px] h-[321px] flex space-x-[52px] mt-[30px]'>
                <ServiceCard
                    svg={svgFour}
                    title='UX/UI Design'
                    desc='Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.' 
                />

                <ServiceCard
                    svg={svgFive}
                    title='Mobile App Development'
                    desc='Build performant, scalable, and secure mobile applications for iOS and Android devices.' 
                />

                <ServiceCard
                    svg={svgSix}
                    title='Platform and Infrastructure'
                    desc='Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.' 
                />
            </div>
        </div>
        </div>

        {/** Mobile */}
        <div className='w-[375px] h-[559px] mt-[50px] pl-[25px] hidden max-lg:block'>
            <TechServicesMobile />
        </div>
    </>
  )
}

export default TechServices;
