import React from 'react'

type Props = {}

const TrustedCompaniesMobile = (props: Props) => {
  return (
    <div className=''>
        {/** vector */}
        <div className='w-[36.23px] h-[32.25px]'>
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M1.21344 18.2733L0.623915 27.287C0.473284 29.5901 2.21821 31.5792 4.5213 31.7299L14.3855 32.375C15.4473 32.4445 16.4955 32.1063 17.3165 31.4295L33.7439 17.8872C34.6334 17.1539 35.1805 16.0857 35.2557 14.9353L35.9318 4.59778C36.0897 2.1828 34.1697 0.139017 31.7496 0.146038L21.9476 0.174472C20.9549 0.177351 19.9957 0.533469 19.2417 1.17906L2.6656 15.3716C1.81048 16.1038 1.28691 17.15 1.21344 18.2733Z" fill="url(#paint0_linear_0_543)"/>
                <defs>
                    <linearGradient id="paint0_linear_0_543" x1="18.1109" y1="0.204976" x2="18.4762" y2="32.4555" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#62AE6E"/>
                        <stop offset="1" stop-color="#EDE14F"/>
                    </linearGradient>
                </defs>
            </svg>

        </div>

        {/** heading and lists */}
        <div className='h-[430px] mt-[30px]'>
            {/** heading */}
            <div className='h-[127.89px] space-y-[13.89px]'>
                <h2 className='h-[80px] font-epilogue font-medium text-[26px] leading-[40px] text-center text-[#3D3D3D]'>
                    Trusted by Leading Organizations
                </h2>
                <p className='h-[34px] px-[20px] font-epilogue text-[12px] font-medium leading-[16.53px] text-center text-[#525252]'>
                    Our 4,000+ team has expertise in almost everyprogramming language.
                </p>
            </div>

            {/** companies */}
            <div className='w-[249px] h-[205.65px] py-[40px] mx-[70px] mb-[20px] space-y-[40px]'>
                {/** 1st row */}
                <div className='flex space-x-[20px]'>
                    <div className='ml-[25px] mt-[5px]'>
                    <svg width="71" height="11" viewBox="0 0 71 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.2191 0.64206L58.3527 8.4705H58.2859L56.0193 0.644967H52.2911V10.5017H54.7553L54.6216 2.40883H54.6884L57.1177 10.5017H60.6833V0.644967L58.2191 0.64206ZM11.2891 0.64206L9.42643 10.6034H12.1231L13.4889 1.54288H13.5557L14.8895 10.6034H17.5513L15.7206 0.644967L11.2891 0.64206ZM26.3445 0.64206L25.1124 8.23803H25.0455L23.8134 0.644967H19.7539L19.5534 10.6034H22.0525L22.1193 1.64459H22.1513L23.8164 10.6034H26.3474L28.0124 1.64459H28.0793L28.1461 10.6034H30.6452L30.4127 0.644967L26.3445 0.64206ZM5.23034 7.77309C5.30609 8.00997 5.31713 8.26279 5.26231 8.50537C5.19547 8.83664 4.963 9.17082 4.29755 9.17082C3.66407 9.17082 3.29793 8.80468 3.29793 8.27V7.30524H0.63324V8.0724C0.63324 10.3041 2.39711 10.9696 4.26559 10.9696C6.06142 10.9696 7.56086 10.3361 7.79333 8.70297C7.927 7.83702 7.8282 7.27328 7.79333 7.07277C7.32839 4.97473 3.5304 4.37321 3.26306 3.20795C3.22981 3.03225 3.22981 2.85187 3.26306 2.67618C3.3299 2.342 3.56527 2.00782 4.16388 2.00782C4.7625 2.00782 5.09377 2.37687 5.09377 2.90865V3.50726H7.59282V2.80985C7.59282 0.644966 5.62845 0.310791 4.23072 0.310791C2.46394 0.310791 0.999381 0.909402 0.73204 2.51054C0.644586 2.95125 0.656499 3.40591 0.76691 3.84143C1.16502 5.90461 4.73053 6.50613 5.23034 7.77018M37.6367 7.77018C37.7355 8.00265 37.7006 8.30487 37.6687 8.50537C37.6018 8.83664 37.3694 9.17082 36.7039 9.17082C36.0704 9.17082 35.7043 8.80468 35.7043 8.27V7.30524H33.0396V8.0724C33.0396 10.2692 34.7715 10.9347 36.6371 10.9347C38.4358 10.9347 39.9004 10.3361 40.1329 8.67101C40.2665 7.80506 40.1677 7.27328 40.1329 7.0379C39.7348 4.97473 35.9687 4.34125 35.7043 3.20795C35.6708 3.03228 35.6708 2.85185 35.7043 2.67618C35.7711 2.342 36.0036 2.00782 36.6051 2.00782C37.1689 2.00782 37.535 2.37687 37.535 2.90865V3.50726H39.9992V2.80985C39.9992 0.644966 38.0668 0.310791 36.6691 0.310791C34.9052 0.310791 33.4726 0.877438 33.2052 2.51054C33.1384 2.94352 33.1384 3.34162 33.2401 3.84143C33.6382 5.90461 37.134 6.47126 37.6367 7.77018ZM46.0289 9.10398C46.7263 9.10398 46.9297 8.63904 46.9937 8.3717C47.0285 8.26999 47.0285 8.10436 47.0285 8.00556V0.64206H49.5566V7.80215C49.5566 8.00266 49.5566 8.3688 49.5276 8.4705C49.359 10.3332 47.8945 10.9318 46.0609 10.9318C44.2302 10.9318 42.7656 10.3332 42.5971 8.46759C42.5971 8.36879 42.5651 8.00266 42.5651 7.80215V0.64206H45.0932V8.00265C45.0932 8.13632 45.0932 8.26709 45.1281 8.3688C45.1281 8.63323 45.3315 9.10108 46.0289 9.10108M66.8118 9.00228C67.544 9.00228 67.7765 8.53734 67.8433 8.26709C67.8753 8.16829 67.8753 8.00265 67.8753 7.90095V6.46835H66.8437V5.00379H70.3744V7.66848C70.3744 7.86898 70.3744 8.00266 70.3424 8.33683C70.1739 10.1675 68.6076 10.7981 66.8437 10.7981C65.0798 10.7981 63.5136 10.1675 63.3479 8.33393C63.3131 8.00266 63.3131 7.86898 63.3131 7.66848V3.47239C63.3131 3.30675 63.3479 2.97258 63.3479 2.80404C63.5804 0.941367 65.0798 0.342755 66.8437 0.342755C68.6076 0.342755 70.1419 0.941365 70.3395 2.80694C70.3744 3.10625 70.3744 3.47239 70.3744 3.47239V3.80657H67.8753V3.23992C67.8753 3.23992 67.8753 3.00745 67.8433 2.87378C67.8085 2.64131 67.6109 2.14149 66.8437 2.14149C66.1114 2.14149 65.9138 2.60644 65.8441 2.87378C65.8121 3.00454 65.8121 3.17308 65.8121 3.33872V7.90095C65.8121 8.03462 65.8121 8.16829 65.8441 8.26709C65.8441 8.53443 66.1114 9.00228 66.8118 9.00228Z" fill="#A9A9B9"/>
                    </svg>
                    </div>

                    <div className=''>
                    <svg width="99" height="22" viewBox="0 0 99 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_524)">
                        <path d="M98.4584 9.57411V7.84903H96.3163V5.16744L96.2442 5.18947L94.2322 5.80518L94.1927 5.81725V7.84903H91.0171V6.71724C91.0171 6.19023 91.1349 5.78679 91.3673 5.51801C91.5979 5.25212 91.9278 5.11706 92.3485 5.11706C92.6512 5.11706 92.9642 5.18832 93.2795 5.32874L93.3584 5.36399V3.54753L93.3213 3.53412C93.0272 3.42819 92.6272 3.37512 92.1316 3.37512C91.5067 3.37512 90.9391 3.51094 90.4439 3.78048C89.9559 4.0429 89.5539 4.44036 89.2859 4.9253C89.0138 5.41457 88.8759 5.9795 88.8759 6.60479V7.84922H87.3843V9.5743H88.8759V16.8411H91.0171V9.57411H94.1927V14.1921C94.1927 16.094 95.0896 17.0579 96.859 17.0579C97.1647 17.0562 97.4695 17.0223 97.7682 16.9568C98.0862 16.8884 98.3026 16.82 98.4302 16.747L98.4584 16.7304V14.9894L98.3714 15.047C98.2551 15.1246 98.1105 15.1879 97.9408 15.2348C97.7703 15.2827 97.6279 15.3068 97.5178 15.3068C97.1032 15.3068 96.7967 15.1951 96.6063 14.9746C96.414 14.7524 96.3163 14.3633 96.3163 13.8193V9.57411H98.4584ZM82.6026 15.307C81.8254 15.307 81.2128 15.0492 80.7808 14.5417C80.3465 14.0313 80.1262 13.3042 80.1262 12.3798C80.1262 11.4264 80.3465 10.6802 80.7812 10.1609C81.2131 9.64518 81.82 9.38331 82.5852 9.38331C83.3275 9.38331 83.9185 9.6333 84.3418 10.127C84.7673 10.6229 84.9832 11.3632 84.9832 12.3277C84.9832 13.3042 84.7802 14.0543 84.3798 14.5561C83.9823 15.0541 83.3844 15.307 82.6026 15.307ZM82.698 7.63236C81.2152 7.63236 80.0375 8.06684 79.198 8.92373C78.3588 9.78081 77.9333 10.9666 77.9333 12.449C77.9333 13.8568 78.3486 14.9892 79.1678 15.8143C79.9869 16.6396 81.1018 17.0576 82.4809 17.0576C83.9183 17.0576 85.0725 16.6171 85.9119 15.7484C86.751 14.8806 87.1763 13.7059 87.1763 12.258C87.1763 10.8283 86.7773 9.68752 85.9901 8.86798C85.2024 8.04807 84.0945 7.63236 82.698 7.63236ZM74.4808 7.63236C73.4722 7.63236 72.6379 7.89041 72.0006 8.39902C71.3596 8.9107 71.0343 9.58196 71.0343 10.394C71.0343 10.8161 71.1044 11.191 71.2427 11.509C71.3816 11.8281 71.5968 12.109 71.8826 12.3448C72.1661 12.5787 72.6038 12.8237 73.1841 13.0727C73.6716 13.2735 74.0354 13.4434 74.2665 13.5771C74.4923 13.7084 74.6527 13.8402 74.7431 13.9685C74.831 14.094 74.8756 14.266 74.8756 14.4781C74.8756 15.0823 74.4234 15.3762 73.4925 15.3762C73.1471 15.3762 72.7533 15.3041 72.3218 15.162C71.8935 15.0219 71.4893 14.8169 71.1232 14.5541L71.0343 14.4905V16.5518L71.0669 16.5672C71.3699 16.707 71.7519 16.8248 72.2021 16.9177C72.6515 17.0104 73.0596 17.0578 73.4144 17.0578C74.5088 17.0578 75.3902 16.7986 76.0331 16.2869C76.6806 15.7716 77.0086 15.0848 77.0086 14.2444C77.0086 13.6384 76.832 13.1185 76.4837 12.6994C76.1383 12.2837 75.5383 11.9019 74.7015 11.5645C74.0349 11.2969 73.6077 11.0749 73.4316 10.9044C73.2617 10.7396 73.1755 10.5067 73.1755 10.2118C73.1755 9.95016 73.282 9.74077 73.5006 9.57104C73.7209 9.40055 74.0274 9.31377 74.4117 9.31377C74.7686 9.31377 75.1335 9.37009 75.4965 9.48043C75.8594 9.59097 76.1777 9.73905 76.4438 9.91989L76.5312 9.97966V8.02412L76.4977 8.00975C76.2525 7.90439 75.9287 7.81435 75.536 7.74156C75.1444 7.66914 74.7894 7.63236 74.4808 7.63236ZM65.4522 15.307C64.6752 15.307 64.0623 15.0492 63.6305 14.5417C63.1961 14.0313 62.9763 13.3042 62.9763 12.3798C62.9763 11.4264 63.1963 10.6802 63.6311 10.1609C64.0627 9.64518 64.6694 9.38331 65.4349 9.38331C66.1773 9.38331 66.7683 9.6333 67.1916 10.127C67.6171 10.6229 67.833 11.3632 67.833 12.3277C67.833 13.3042 67.6299 14.0543 67.2295 14.5561C66.8319 15.0541 66.2342 15.307 65.4522 15.307ZM65.5478 7.63236C64.0646 7.63236 62.8869 8.06684 62.0478 8.92373C61.2087 9.78081 60.7829 10.9666 60.7829 12.449C60.7829 13.8574 61.1986 14.9892 62.0175 15.8143C62.8367 16.6396 63.9514 17.0576 65.3309 17.0576C66.7677 17.0576 67.9225 16.6171 68.7619 15.7484C69.6008 14.8806 70.0263 13.7059 70.0263 12.258C70.0263 10.8283 69.627 9.68752 68.8397 8.86798C68.0518 8.04807 66.9441 7.63236 65.5478 7.63236ZM57.5325 9.40629V7.84903H55.4174V16.8407H57.5323V12.2409C57.5323 11.4588 57.7097 10.8162 58.0597 10.331C58.4051 9.8515 58.8656 9.6084 59.4275 9.6084C59.6181 9.6084 59.8319 9.63982 60.0635 9.70208C60.2928 9.76376 60.4589 9.83081 60.5568 9.90131L60.6457 9.96587V7.8337L60.6112 7.81895C60.4145 7.73524 60.1357 7.69309 59.7833 7.69309C59.2517 7.69309 58.776 7.86378 58.3687 8.19998C58.0111 8.49557 57.7524 8.90093 57.5549 9.40629H57.5325ZM51.6297 7.63236C50.6594 7.63236 49.7937 7.8406 49.0575 8.25075C48.32 8.66166 47.7493 9.24882 47.3611 9.99499C46.9748 10.7396 46.7786 11.6093 46.7786 12.5793C46.7786 13.4287 46.9688 14.2084 47.3447 14.8953C47.7209 15.5836 48.2535 16.1221 48.9274 16.4957C49.6006 16.8687 50.3785 17.0578 51.2397 17.0578C52.2448 17.0578 53.103 16.8568 53.7914 16.4606L53.8189 16.4445V14.5068L53.7302 14.5718C53.4136 14.8012 53.0649 14.9827 52.6954 15.1105C52.3214 15.2409 51.9808 15.3068 51.682 15.3068C50.8519 15.3068 50.1858 15.0472 49.7021 14.5354C49.2174 14.0225 48.9717 13.3028 48.9717 12.3969C48.9717 11.4854 49.228 10.7471 49.733 10.2021C50.2366 9.65897 50.904 9.3835 51.7169 9.3835C52.4121 9.3835 53.0894 9.61894 53.7302 10.0839L53.8189 10.1482V8.1065L53.7904 8.0904C53.549 7.95535 53.2203 7.84386 52.8119 7.75937C52.4054 7.67508 52.0077 7.63236 51.6297 7.63236ZM45.3219 7.84903H43.2066V16.8407H45.3219V7.84903ZM44.2859 4.0186C43.9378 4.0186 43.6342 4.13718 43.3847 4.37186C43.1342 4.60749 43.007 4.90404 43.007 5.25384C43.007 5.59828 43.1326 5.88928 43.3805 6.11858C43.6271 6.34713 43.9317 6.46303 44.2859 6.46303C44.6399 6.46303 44.9457 6.34713 45.1951 6.11897C45.446 5.88928 45.5734 5.59828 45.5734 5.25384C45.5734 4.9163 45.4495 4.62262 45.2054 4.38143C44.9615 4.14063 44.652 4.0186 44.2859 4.0186ZM39.0085 7.18582V16.8405H41.1671V4.29389H38.1796L34.3821 13.6132L30.6971 4.29389H27.588V16.8407H29.6165V7.18486H29.6862L33.5776 16.8407H35.1082L38.9388 7.18562L39.0085 7.18582Z" fill="#A9A9B9"/>
                        <path d="M10.3247 10.0533H0.374817V0.103394H10.3247V10.0533Z" fill="#A9A9B9"/>
                        <path d="M21.3121 10.0533H11.3622V0.103394H21.3121V10.0533Z" fill="#A9A9B9"/>
                        <path d="M10.3245 21.043H0.374817V11.0931H10.3245V21.043Z" fill="#A9A9B9"/>
                        <path d="M21.3121 21.043H11.3622V11.0931H21.3121V21.043Z" fill="#A9A9B9"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_0_524">
                        <rect width="98.0834" height="21.0726" fill="white" transform="translate(0.375183 0.102905)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </div>

                </div>

                {/** second row */}
                <div className='flex space-x-[20px]'>
                    <div className='ml-[10px]'>
                    <svg width="69" height="23" viewBox="0 0 69 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_530)">
<path d="M66.3479 14.0569L68.2385 15.3172C67.6249 16.221 66.1573 17.7716 63.62 17.7716C60.4692 17.7716 58.1227 15.3338 58.1227 12.2327C58.1227 8.93265 60.494 6.69385 63.3547 6.69385C66.2319 6.69385 67.6414 8.98229 68.0976 10.2178L68.3463 10.848L60.9336 13.9159C61.4974 15.027 62.3764 15.5909 63.62 15.5909C64.8638 15.5909 65.7261 14.9773 66.3479 14.0569ZM60.5356 12.0587L65.4857 10.0023C65.212 9.31412 64.3996 8.82496 63.4292 8.82496C62.1939 8.82496 60.4775 9.91947 60.5356 12.0587Z" fill="#A9A9B9"/>
<path d="M54.5485 1.04908H56.9364V17.2677H54.5485V1.04895V1.04908Z" fill="#A9A9B9"/>
<path d="M50.7822 7.12614H53.0873V16.9767C53.0873 21.0644 50.6744 22.7477 47.822 22.7477C45.1356 22.7477 43.5187 20.9401 42.9134 19.4725L45.0277 18.5935C45.4091 19.4973 46.3295 20.567 47.822 20.567C49.6544 20.567 50.7822 19.431 50.7822 17.3084V16.5124H50.6993C50.152 17.1757 49.1072 17.7727 47.7806 17.7727C45.0111 17.7727 42.4738 15.3598 42.4738 12.2505C42.4738 9.12442 45.0111 6.68677 47.7806 6.68677C49.099 6.68677 50.152 7.27548 50.6993 7.92223H50.7822V7.12627V7.12614ZM50.9479 12.2505C50.9479 10.2936 49.6462 8.8674 47.9878 8.8674C46.3129 8.8674 44.9033 10.2936 44.9033 12.2505C44.9033 14.1823 46.3129 15.5837 47.9878 15.5837C49.6463 15.592 50.948 14.1823 50.948 12.2505H50.9479Z" fill="#A9A9B9"/>
<path d="M29.3664 12.2078C29.3664 15.4002 26.879 17.7467 23.8276 17.7467C20.7763 17.7467 18.2888 15.3919 18.2888 12.2078C18.2888 8.99899 20.7763 6.66077 23.8276 6.66077C26.879 6.66077 29.3664 8.99899 29.3664 12.2078ZM26.9453 12.2078C26.9453 10.218 25.5024 8.84965 23.8276 8.84965C22.1527 8.84965 20.7099 10.218 20.7099 12.2078C20.7099 14.1812 22.1527 15.566 23.8276 15.566C25.5026 15.566 26.9453 14.1812 26.9453 12.2078Z" fill="#A9A9B9"/>
<path d="M41.4624 12.2327C41.4624 15.425 38.9749 17.7715 35.9236 17.7715C32.8722 17.7715 30.3848 15.4249 30.3848 12.2327C30.3848 9.02382 32.8722 6.69385 35.9236 6.69385C38.9749 6.69385 41.4624 9.01557 41.4624 12.2327ZM39.0329 12.2327C39.0329 10.2428 37.5902 8.87448 35.9152 8.87448C34.2404 8.87448 32.7975 10.2428 32.7975 12.2327C32.7975 14.2061 34.2404 15.5909 35.9152 15.5909C37.5984 15.5909 39.0329 14.1978 39.0329 12.2327Z" fill="#A9A9B9"/>
<path d="M9.18442 15.3441C5.71016 15.3441 2.9906 12.5415 2.9906 9.06724C2.9906 5.59312 5.71016 2.79049 9.18442 2.79049C11.0584 2.79049 12.4264 3.52842 13.438 4.47372L15.1047 2.80713C13.6952 1.4556 11.8129 0.427246 9.18442 0.427246C4.42505 0.427379 0.420105 4.308 0.420105 9.06724C0.420105 13.8267 4.42505 17.7072 9.18442 17.7072C11.7549 17.7072 13.6952 16.8615 15.2125 15.2861C16.7713 13.7272 17.2522 11.5382 17.2522 9.76377C17.2522 9.2082 17.1859 8.63612 17.1113 8.21325H9.18442V10.5183H14.8311C14.6652 11.9612 14.2092 12.9479 13.5376 13.6194C12.725 14.4404 11.4399 15.3441 9.18442 15.3441Z" fill="#A9A9B9"/>
</g>
<defs>
<clipPath id="clip0_0_530">
<rect width="68.1489" height="22.3613" fill="white" transform="translate(0.320984 0.391602)"/>
</clipPath>
</defs>
</svg>

                    </div>

                    <div>
                    <svg width="72" height="19" viewBox="0 0 72 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2382 14.7624L24.1286 12.691C25.0901 13.4106 26.3653 13.784 27.6264 13.784C28.5605 13.784 29.1457 13.4246 29.1457 12.8774C29.1316 11.3553 23.5681 12.5475 23.5273 8.72339C23.5132 6.78354 25.2329 5.28609 27.67 5.28609C29.1182 5.28609 30.5657 5.64621 31.599 6.46773L30.7669 8.58061C29.8216 7.97573 28.6456 7.54457 27.5272 7.54457C26.7662 7.54457 26.2661 7.90468 26.2661 8.36327C26.2802 9.8579 31.8845 9.0392 31.9422 12.691C31.9422 14.6745 30.2668 16.0699 27.8571 16.0699C26.0931 16.0699 24.4719 15.6536 23.2382 14.7624ZM57.3509 11.9434C57.073 12.439 56.6384 12.8283 56.1153 13.0502C55.5922 13.2721 55.0102 13.314 54.4607 13.1694C53.9112 13.0248 53.4252 12.7018 53.0791 12.2511C52.733 11.8005 52.5464 11.2476 52.5484 10.6794C52.5475 10.3418 52.6132 10.0072 52.7418 9.69498C52.8703 9.38274 53.0592 9.09893 53.2976 8.85981C53.536 8.62068 53.8193 8.43093 54.1311 8.30144C54.443 8.17194 54.7773 8.10523 55.115 8.10514C56.0737 8.10514 56.9064 8.63828 57.3517 9.41338L59.8021 8.04747C58.8843 6.41006 57.1202 5.28609 55.115 5.28609C52.1447 5.28609 49.7378 7.70423 49.7378 10.6794C49.7378 13.6546 52.1447 16.0699 55.115 16.0699C56.072 16.072 57.012 15.8168 57.8366 15.331C58.6612 14.8452 59.3401 14.1467 59.8021 13.3086L57.3509 11.9434ZM33.1759 0.815562H36.2453V15.8695H33.1759V0.815562ZM61.0084 0.815562V15.8695H64.0743V11.3554L67.7177 15.8695H71.6467L67.0144 10.5064L71.3027 5.50343H67.5447L64.0743 9.65745V0.816265H61.0077L61.0084 0.815562ZM45.3637 11.9736C44.9191 12.7072 44.0012 13.2509 42.968 13.2509C42.6306 13.2507 42.2966 13.184 41.985 13.0547C41.6734 12.9253 41.3904 12.7358 41.1521 12.497C40.9138 12.2582 40.7249 11.9747 40.5963 11.6628C40.4676 11.351 40.4016 11.0168 40.4022 10.6794C40.4015 10.3419 40.4674 10.0075 40.596 9.69547C40.7246 9.38341 40.9135 9.09974 41.1517 8.86067C41.39 8.62161 41.6731 8.43184 41.9847 8.3022C42.2964 8.17257 42.6305 8.1056 42.968 8.10514C44.0012 8.10514 44.9191 8.67908 45.3637 9.42675V11.9736ZM45.3637 5.50273V6.72656C44.8615 5.87691 43.6137 5.28609 42.309 5.28609C39.6137 5.28609 37.4924 7.67399 37.4924 10.6632C37.4924 13.6553 39.6137 16.0699 42.309 16.0699C43.6137 16.0699 44.8615 15.4791 45.3637 14.633V15.8561H48.4331V5.50273H45.3637ZM4.27009 11.9567C4.27009 13.0068 3.42395 13.8558 2.37665 13.8558C2.12761 13.8556 1.88106 13.8063 1.65109 13.7107C1.42112 13.6151 1.21226 13.4752 1.03646 13.2988C0.860659 13.1224 0.721366 12.913 0.626555 12.6828C0.531743 12.4525 0.483274 12.2058 0.483922 11.9567C0.483459 11.7079 0.53208 11.4614 0.627 11.2314C0.72192 11.0014 0.861275 10.7924 1.03709 10.6163C1.2129 10.4403 1.42171 10.3006 1.65158 10.2053C1.88144 10.1101 2.12783 10.0611 2.37665 10.0612H4.27009V11.9567ZM5.21469 11.9567C5.21423 11.7078 5.26288 11.4613 5.35784 11.2313C5.4528 11.0012 5.59222 10.7922 5.76811 10.6161C5.94399 10.44 6.15289 10.3003 6.38283 10.2051C6.61278 10.1099 6.85925 10.061 7.10813 10.0612C7.35701 10.0611 7.60346 10.1101 7.83337 10.2054C8.06327 10.3007 8.27212 10.4404 8.44794 10.6166C8.62376 10.7927 8.7631 11.0018 8.85798 11.2319C8.95286 11.462 9.00141 11.7085 9.00086 11.9574V16.7023C9.00141 16.9512 8.95288 17.1979 8.85802 17.4281C8.76317 17.6583 8.62386 17.8675 8.44807 18.0438C8.27228 18.2202 8.06345 18.3601 7.83353 18.4556C7.60361 18.5512 7.35711 18.6004 7.10813 18.6006C6.85903 18.6005 6.6124 18.5513 6.38235 18.4558C6.1523 18.3602 5.94336 18.2202 5.76748 18.0438C5.5916 17.8674 5.45225 17.6581 5.35739 17.4278C5.26254 17.1974 5.21405 16.9507 5.21469 16.7016V11.9567ZM7.10813 4.33867C6.85903 4.33858 6.6124 4.28936 6.38235 4.19382C6.1523 4.09828 5.94336 3.9583 5.76748 3.7819C5.5916 3.6055 5.45225 3.39614 5.35739 3.16581C5.26254 2.93548 5.21405 2.68871 5.21469 2.43961C5.21423 2.19073 5.26288 1.94421 5.35784 1.71416C5.4528 1.48411 5.59222 1.27506 5.76811 1.09897C5.94399 0.922892 6.15289 0.783241 6.38283 0.688021C6.61278 0.592801 6.85925 0.543882 7.10813 0.544068C7.35695 0.543975 7.60334 0.592961 7.8332 0.688222C8.06307 0.783484 8.27188 0.92315 8.44769 1.09922C8.6235 1.2753 8.76286 1.48432 8.85778 1.71432C8.9527 1.94432 9.00132 2.19079 9.00086 2.43961V4.33867H7.10813ZM7.10813 5.30297C7.35695 5.30288 7.60334 5.35187 7.8332 5.44713C8.06307 5.54239 8.27188 5.68206 8.44769 5.85813C8.6235 6.0342 8.76286 6.24322 8.85778 6.47323C8.9527 6.70323 9.00132 6.9497 9.00086 7.19852C9.00086 8.24792 8.15472 9.09758 7.10813 9.09758H2.36329C2.11419 9.09749 1.86756 9.04826 1.63751 8.95272C1.40746 8.85719 1.19852 8.71721 1.02264 8.54081C0.846766 8.36441 0.70741 8.15505 0.612554 7.92472C0.517699 7.69439 0.469208 7.44761 0.469855 7.19852C0.469392 6.94964 0.518036 6.70311 0.613 6.47306C0.707964 6.24301 0.847382 6.03396 1.02327 5.85788C1.19915 5.6818 1.40805 5.54215 1.638 5.44693C1.86794 5.35171 2.11441 5.30279 2.36329 5.30297H7.10813ZM14.6938 7.19852C14.6934 6.9497 14.742 6.70323 14.8369 6.47323C14.9318 6.24322 15.0712 6.0342 15.247 5.85813C15.4228 5.68206 15.6316 5.54239 15.8615 5.44713C16.0913 5.35187 16.3377 5.30288 16.5866 5.30297C16.8354 5.30279 17.0819 5.35171 17.3118 5.44693C17.5418 5.54215 17.7507 5.6818 17.9266 5.85788C18.1025 6.03396 18.2419 6.24301 18.3368 6.47306C18.4318 6.70311 18.4804 6.94964 18.48 7.19852C18.48 8.24792 17.6338 9.09758 16.5866 9.09758H14.6938V7.19852ZM13.7485 7.19852C13.7485 8.24792 12.9024 9.09758 11.8558 9.09758C11.6067 9.09749 11.36 9.04826 11.13 8.95272C10.9 8.85719 10.691 8.71721 10.5151 8.54081C10.3393 8.36441 10.1999 8.15505 10.105 7.92472C10.0102 7.69439 9.9617 7.44761 9.96235 7.19852V2.43961C9.96188 2.19073 10.0105 1.94421 10.1055 1.71416C10.2005 1.48411 10.3399 1.27506 10.5158 1.09897C10.6916 0.922892 10.9005 0.783241 11.1305 0.688021C11.3604 0.592801 11.6069 0.543882 11.8558 0.544068C12.1046 0.543975 12.351 0.592961 12.5809 0.688222C12.8107 0.783484 13.0195 0.92315 13.1953 1.09922C13.3712 1.2753 13.5105 1.48432 13.6054 1.71432C13.7004 1.94432 13.749 2.19079 13.7485 2.43961V7.19852ZM11.8558 14.806C12.1047 14.8059 12.3511 14.8549 12.581 14.9502C12.8109 15.0455 13.0198 15.1853 13.1956 15.3614C13.3714 15.5376 13.5108 15.7467 13.6056 15.9768C13.7005 16.2068 13.7491 16.4534 13.7485 16.7023C13.7491 16.9512 13.7005 17.1979 13.6057 17.4281C13.5108 17.6583 13.3715 17.8675 13.1957 18.0438C13.0199 18.2202 12.8111 18.3601 12.5812 18.4556C12.3513 18.5512 12.1048 18.6004 11.8558 18.6006C11.6067 18.6005 11.36 18.5513 11.13 18.4558C10.9 18.3602 10.691 18.2202 10.5151 18.0438C10.3393 17.8674 10.1999 17.6581 10.105 17.4278C10.0102 17.1974 9.9617 16.9507 9.96235 16.7016V14.806H11.8558ZM11.8558 13.8558C11.6067 13.8557 11.36 13.8065 11.13 13.7109C10.9 13.6154 10.691 13.4754 10.5151 13.299C10.3393 13.1226 10.1999 12.9133 10.105 12.6829C10.0102 12.4526 9.9617 12.2058 9.96235 11.9567C9.96188 11.7078 10.0105 11.4613 10.1055 11.2313C10.2005 11.0012 10.3399 10.7922 10.5158 10.6161C10.6916 10.44 10.9005 10.3003 11.1305 10.2051C11.3604 10.1099 11.6069 10.061 11.8558 10.0612H16.6006C16.8495 10.0611 17.096 10.1101 17.3259 10.2054C17.5558 10.3007 17.7646 10.4404 17.9404 10.6166C18.1163 10.7927 18.2556 11.0018 18.3505 11.2319C18.4454 11.462 18.4939 11.7085 18.4933 11.9574C18.4939 12.2064 18.4454 12.453 18.3505 12.6833C18.2557 12.9135 18.1164 13.1227 17.9406 13.299C17.7648 13.4753 17.5559 13.6153 17.326 13.7108C17.0961 13.8063 16.8496 13.8556 16.6006 13.8558H11.8558Z" fill="#A9A9B9"/>
</svg>

                    </div>

                    <div>
                    <svg width="41" height="19" viewBox="0 0 41 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.48506 0.73291C7.1412 0.73291 4.89334 1.66401 3.23598 3.32137C1.57862 4.97872 0.647522 7.22659 0.647522 9.57045C0.647522 11.9143 1.57862 14.1622 3.23598 15.8195C4.89334 17.4769 7.1412 18.408 9.48506 18.408C11.7992 18.363 14.0033 17.4121 15.6239 15.7596C17.2445 14.1072 18.1524 11.885 18.1524 9.57045C18.1524 7.25592 17.2445 5.03372 15.6239 3.38126C14.0033 1.7288 11.7992 0.777925 9.48506 0.73291ZM9.48506 2.17072C9.56865 2.17072 9.74587 2.17072 9.83615 2.17407V2.86455C9.71914 2.86204 9.6021 2.86037 9.48506 2.85954C8.60412 2.85734 7.73149 3.02982 6.91764 3.36701C6.10379 3.70421 5.36487 4.19941 4.74362 4.82399C4.11874 5.44502 3.62334 6.1839 3.28612 6.9978C2.94891 7.8117 2.7766 8.68444 2.77916 9.56543C2.77916 11.3577 3.47634 13.0429 4.74362 14.3069C5.36487 14.9315 6.10379 15.4267 6.91764 15.7639C7.73149 16.101 8.60412 16.2735 9.48506 16.2713C11.185 16.2682 12.8205 15.6212 14.0624 14.4607C15.3042 13.3001 16.06 11.7122 16.1776 10.0168V9.91653H11.6V9.23106H16.5838L16.8798 9.22938V9.56543C16.8829 10.5369 16.6932 11.4993 16.3219 12.3969C15.9505 13.2946 15.4048 14.1097 14.7164 14.7951C14.0306 15.4841 13.215 16.0303 12.3168 16.4023C11.4186 16.7742 10.4555 16.9643 9.48339 16.9618C7.51057 16.9618 5.65479 16.1927 4.25042 14.7951C3.56225 14.1096 3.01685 13.2944 2.6458 12.3967C2.27474 11.4991 2.08538 10.5368 2.08868 9.56543C2.09089 7.60431 2.87081 5.72413 4.25737 4.33725C5.64393 2.95038 7.52394 2.17003 9.48506 2.16738V2.17072ZM36.3404 3.63863C32.6456 3.63863 30.7028 5.65659 30.7028 9.50357C30.7028 13.3322 32.4583 15.4053 36.3203 15.4053C38.0925 15.4053 39.8296 14.9539 40.7726 14.2935V8.74956H36.1916V10.8795H38.34V12.8774C37.9437 13.0279 37.1697 13.18 36.434 13.18C34.06 13.18 33.2675 11.9729 33.2675 9.52196C33.2675 7.18468 34.0198 5.80705 36.3973 5.80705C37.718 5.80705 38.4704 6.22168 39.094 7.01415L40.7358 5.50612C39.736 4.07332 37.9822 3.63863 36.3387 3.63863H36.3404ZM22.2749 3.80916V15.2348H30.3835V13.0112H24.9165V3.80749L22.2749 3.80916ZM6.66293 5.68668C6.9445 5.68668 7.21453 5.79853 7.41363 5.99763C7.61272 6.19672 7.72457 6.46676 7.72457 6.74832C7.72457 7.02989 7.61272 7.29992 7.41363 7.49901C7.21453 7.69811 6.9445 7.80996 6.66293 7.80996C6.38137 7.80996 6.11134 7.69811 5.91224 7.49901C5.71314 7.29992 5.60129 7.02989 5.60129 6.74832C5.60129 6.46676 5.71314 6.19672 5.91224 5.99763C6.11134 5.79853 6.38137 5.68668 6.66293 5.68668ZM9.13397 5.69002H9.83615V12.7453H11.595V13.4375H9.13397V5.69002Z" fill="#A9A9B9"/>
</svg>

                    </div>
                </div>

                {/** third row */}
                <div className=''>
                    <div className='ml-[90px]'>
                    <svg width="62" height="11" viewBox="0 0 62 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.1653 0.0900879C24.5361 0.0900879 26.4332 0.682146 27.8825 2.00012C28.8735 2.8985 29.427 4.17785 29.4115 5.51899C29.4079 6.18073 29.2706 6.83491 29.0078 7.44226C28.7451 8.0496 28.3623 8.59759 27.8825 9.05331C26.5259 10.2992 24.4125 10.9633 22.1678 10.9633C19.9206 10.9633 17.8432 10.2992 16.4661 9.05331C15.9695 8.60954 15.574 8.06439 15.3063 7.45467C15.0385 6.84494 14.9047 6.18486 14.9138 5.51899C14.9138 4.18558 15.475 2.90622 16.4661 2.00012C17.7531 0.831447 20.0287 0.0900879 22.1653 0.0900879ZM22.173 9.53725C23.3597 9.53725 24.4588 9.12281 25.2311 8.35829C26.0033 7.58604 26.3457 6.65934 26.3457 5.51899C26.3457 4.42755 25.9647 3.40561 25.2311 2.67969C24.4743 1.93319 23.3442 1.50845 22.173 1.50845C21.0017 1.50845 19.8743 1.93061 19.1097 2.67969C18.3761 3.40561 17.9925 4.42755 17.9925 5.51899C17.9769 6.57555 18.3783 7.5957 19.1097 8.35829C19.8743 9.11509 20.9966 9.53725 22.173 9.53725ZM9.71147 4.47131C10.1233 4.57942 10.5223 4.71328 10.911 4.8909C11.2717 5.05512 11.6016 5.27972 11.8866 5.55503C12.3937 6.0853 12.6821 6.79577 12.6743 7.52683C12.6798 7.91445 12.5945 8.29798 12.425 8.64665C12.2556 8.99533 12.0069 9.29947 11.6987 9.53468C11.1536 9.94787 10.5339 10.252 9.87364 10.4305C8.87972 10.7424 7.84159 10.8902 6.8001 10.8681C5.89399 10.8681 5.39461 10.7626 4.70731 10.6184L4.5091 10.5772C3.75173 10.4097 3.01215 10.1701 2.30047 9.8616C2.26865 9.84003 2.23077 9.82921 2.19235 9.83071C2.1359 9.83205 2.08222 9.85542 2.04277 9.89583C2.00333 9.93624 1.98126 9.99047 1.98127 10.0469V10.5695H0.467669V6.76488H1.81653C1.82483 7.15058 1.94758 7.5251 2.16919 7.84088C2.71491 8.51016 3.30182 8.76758 3.86041 8.97351C4.80513 9.28241 5.79618 9.44715 6.78465 9.47805C8.20816 9.47805 9.03962 9.13311 9.21981 9.05846L9.24298 9.04816L9.25842 9.04301C9.41802 8.98381 10.0616 8.74956 10.0616 8.03394C10.0616 7.32862 9.4592 7.17417 9.06536 7.07378L9.00873 7.06091C8.57112 6.9425 7.56205 6.83439 6.46031 6.71855L6.06904 6.67736C5.03588 6.57215 4.00781 6.42185 2.98777 6.22688C1.70584 5.94373 1.2013 5.47523 0.887256 5.18435L0.866663 5.16376C0.408856 4.67561 0.154725 4.03108 0.156195 3.36185C0.156195 2.08506 1.03141 1.31281 2.10483 0.839169C3.25291 0.324337 4.61721 0.0952383 5.81162 0.0952383C7.92243 0.102961 9.6394 0.790261 10.2572 1.10946C10.5069 1.24331 10.6304 1.07857 10.6304 0.955006V0.571456H11.987V3.88697H10.772C10.6629 3.39497 10.3974 2.95153 10.0152 2.62306C9.7823 2.43573 9.52513 2.28074 9.2507 2.16229C8.23225 1.73225 7.13585 1.51753 6.03043 1.53162C4.89007 1.53162 3.79863 1.75042 3.25033 2.08506C2.91055 2.29614 2.7355 2.56128 2.7355 2.87275C2.7355 3.31808 3.11133 3.4957 3.30182 3.54976C3.80635 3.70421 4.92869 3.8149 5.80133 3.90242L6.32645 3.95648C7.1682 4.04142 8.9315 4.27567 9.71147 4.47131ZM56.4762 1.90487V0.67185H61.936V1.8817H60.7107C60.2679 1.8817 60.0878 1.96665 59.7531 2.34248L56.0798 6.53836C56.041 6.58995 56.0235 6.65444 56.0309 6.71855V8.62857C56.037 8.71739 56.0473 8.80586 56.0618 8.89371C56.0837 8.9497 56.1184 8.9998 56.163 9.04003C56.2077 9.08025 56.2612 9.10948 56.3192 9.12539C56.43 9.14173 56.5418 9.15033 56.6538 9.15113H57.9049V10.361H51.279V9.15113H52.4631C52.5751 9.15035 52.6869 9.14175 52.7977 9.12539C52.8566 9.10861 52.911 9.07919 52.9572 9.03917C53.0035 8.99915 53.0404 8.9495 53.0655 8.89371C53.0808 8.80877 53.0886 8.72262 53.0886 8.6363V6.72627C53.0886 6.66192 53.0886 6.66192 53.0037 6.56152C51.7945 5.18393 50.583 3.80847 49.369 2.43515C49.1733 2.23179 48.8387 1.90487 48.3238 1.90487H47.1449V0.695017H53.8068V1.90487H53.0037C52.8235 1.90487 52.6999 2.08506 52.8544 2.2807L55.1171 4.98614C55.1402 5.01703 55.1557 5.01703 55.1866 4.99386C55.2174 4.97069 57.4879 2.30387 57.5033 2.2807C57.522 2.25607 57.5357 2.22798 57.5435 2.19805C57.5513 2.16811 57.5531 2.13693 57.5488 2.10629C57.5445 2.07566 57.5342 2.04618 57.5184 2.01957C57.5026 1.99295 57.4818 1.96971 57.457 1.95121C57.4111 1.92112 57.3574 1.90502 57.3025 1.90487H56.4762ZM40.3002 1.89715H41.5487C42.1176 1.89715 42.2179 2.11595 42.2257 2.64623L42.2977 6.67736L35.6513 0.695017H30.9019V1.90487H31.9625C32.727 1.90487 32.7811 2.32703 32.7811 2.70286V8.39947C32.7811 8.72897 32.7837 9.15885 32.3126 9.15885H31.0101V10.361H36.5805V9.15113H35.2214C34.6757 9.15113 34.6551 8.90143 34.6448 8.37116V3.52659L42.2977 10.3507H44.2464L44.1434 2.63851C44.1537 2.07734 44.1923 1.88943 44.7689 1.88943H45.9865V0.67957H40.3002V1.89715Z" fill="#A9A9B9"/>
</svg>

                    </div>
                </div>
            </div>

            {/** button */}
            <div className='w-[194px] h-[40.7px] mx-[100px] rounded-[42.64px] px-[29px] py-[15.35px] bg-[#3171DE]'>
                <h2 className='w-[144px] h-[10px] font-epilogue font-medium text-[16px] leading-[16.4px] text-[#FFFFFF]'>
                    Our full repertorie
                </h2>
            </div>
        </div>
    </div>
  )
}

export default TrustedCompaniesMobile;