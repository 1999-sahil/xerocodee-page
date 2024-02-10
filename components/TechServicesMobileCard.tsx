import React from 'react'
import MobileCard from './MobileCard';

type Props = {}

const TechServicesMobileCard = (props: Props) => {
    const svgOne = (
        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4875 3.23901H27.3738C32.7848 3.23901 34.1375 4.59174 34.1375 9.98746V19.6086C34.1375 25.0195 32.7848 26.357 27.389 26.357H10.4875C5.0918 26.3722 3.73907 25.0195 3.73907 19.6238V9.98746C3.73907 4.59174 5.0918 3.23901 10.4875 3.23901Z" stroke="#7434F4" stroke-width="2.27988" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9383 26.3722V33.6374" stroke="#7434F4" stroke-width="2.27988" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.73907 19.9583H34.1375" stroke="#7434F4" stroke-width="2.27988" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0986 33.6375H25.7779" stroke="#7434F4" stroke-width="2.27988" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    );

    const svgTwo = (
        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.6176 10.8386V26.0378C32.6176 30.5976 30.3377 33.6374 25.0179 33.6374H12.8586C7.53885 33.6374 5.25897 30.5976 5.25897 26.0378V10.8386C5.25897 6.27886 7.53885 3.23901 12.8586 3.23901H25.0179C30.3377 3.23901 32.6176 6.27886 32.6176 10.8386Z" stroke="#66B066" stroke-width="2.27988" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.7381 7.03882V10.0787C22.7381 11.7506 24.106 13.1185 25.7779 13.1185H28.8178" stroke="#66B066" stroke-width="2.27988" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8984 19.9583L12.8586 22.9981L15.8984 26.0379" stroke="#66B066" stroke-width="2.27988" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.9781 19.9583L25.0179 22.9981L21.9781 26.0379" stroke="#66B066" stroke-width="2.27988" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    );

  return (
    <div className='w-[220px] h-[285px] bg-white flex flex-row space-x-[20px]'>
        {/** card */}
        <MobileCard
            svg={svgOne}
            title='Custom Software Development'
            desc='Create custom software tailored for your unique needs, including front-end, and core back-end technology.' 
        />
        
        <MobileCard
            svg={svgTwo}
            title='QA and Testing'
            desc='Create custom software tailored for your unique needs, including front-end, and core back-end technology.' 
        />
    </div>
  )
}

export default TechServicesMobileCard