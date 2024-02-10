import React from "react";
import Card from "./Card";

type Props = {};

const Services = (props: Props) => {
  const svgOne = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4167 4.16675H36.5625C43.9792 4.16675 45.8334 6.02091 45.8334 13.4167V26.6042C45.8334 34.0209 43.9792 35.8542 36.5834 35.8542H13.4167C6.02085 35.8751 4.16669 34.0209 4.16669 26.6251V13.4167C4.16669 6.02091 6.02085 4.16675 13.4167 4.16675Z"
        stroke="url(#paint0_linear_1929_72)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25 35.875V45.8333"
        stroke="url(#paint1_linear_1929_72)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.16669 27.0833H45.8334"
        stroke="url(#paint2_linear_1929_72)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.625 45.8333H34.375"
        stroke="url(#paint3_linear_1929_72)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1929_72"
          x1="25"
          y1="4.16675"
          x2="25"
          y2="35.8544"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1929_72"
          x1="25.5"
          y1="35.875"
          x2="25.5"
          y2="45.8333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1929_72"
          x1="25"
          y1="27.0833"
          x2="25"
          y2="28.0833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1929_72"
          x1="25"
          y1="45.8333"
          x2="25"
          y2="46.8333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
      </defs>
    </svg>
  );

  const svgTwo = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.7083 13.6244L34.3125 7.2286C32.3542 5.27026 29.7083 4.18701 26.9375 4.18701H16.6667C10.4167 4.18701 6.25 8.35368 6.25 14.6037V35.437C6.25 41.687 10.4167 45.8537 16.6667 45.8537H33.3333C39.5833 45.8537 43.75 41.687 43.75 35.437V20.9995C43.75 18.2079 42.6458 15.5619 40.7083 13.6244Z"
        stroke="url(#paint0_linear_1929_5)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.7917 29.1663L15.625 33.3329L19.7917 37.4996"
        stroke="url(#paint1_linear_1929_5)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.2083 29.1663L34.375 33.3329L30.2083 37.4996"
        stroke="url(#paint2_linear_1929_5)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1929_5"
          x1="25"
          y1="4.18701"
          x2="25"
          y2="45.8537"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1929_5"
          x1="17.7083"
          y1="29.1663"
          x2="17.7083"
          y2="37.4996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1929_5"
          x1="32.2917"
          y1="29.1663"
          x2="32.2917"
          y2="37.4996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
      </defs>
    </svg>
  );

  const svgThree = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.2495 20.8329H9.77036C6.68703 20.8329 4.18701 18.312 4.18701 15.2495V9.77036C4.18701 6.68703 6.70786 4.18701 9.77036 4.18701H40.2495C43.3329 4.18701 45.8329 6.70786 45.8329 9.77036V15.2495C45.8329 18.312 43.312 20.8329 40.2495 20.8329Z"
        stroke="url(#paint0_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.2495 45.8329H9.77036C6.68703 45.8329 4.18701 43.312 4.18701 40.2495V34.7704C4.18701 31.687 6.70786 29.187 9.77036 29.187H40.2495C43.3329 29.187 45.8329 31.7079 45.8329 34.7704V40.2495C45.8329 43.312 43.312 45.8329 40.2495 45.8329Z"
        stroke="url(#paint1_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 10.4167V14.5834"
        stroke="url(#paint2_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.8333 10.4167V14.5834"
        stroke="url(#paint3_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 35.4167V39.5834"
        stroke="url(#paint4_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.8333 35.4167V39.5834"
        stroke="url(#paint5_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.1667 12.5H37.5"
        stroke="url(#paint6_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.1667 37.5H37.5"
        stroke="url(#paint7_linear_1929_102)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1929_102"
          x1="25.0099"
          y1="4.18701"
          x2="25.0099"
          y2="20.8329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1929_102"
          x1="25.0099"
          y1="29.187"
          x2="25.0099"
          y2="45.8329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1929_102"
          x1="13"
          y1="10.4167"
          x2="13"
          y2="14.5834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1929_102"
          x1="21.3333"
          y1="10.4167"
          x2="21.3333"
          y2="14.5834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1929_102"
          x1="13"
          y1="35.4167"
          x2="13"
          y2="39.5834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1929_102"
          x1="21.3333"
          y1="35.4167"
          x2="21.3333"
          y2="39.5834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1929_102"
          x1="33.3333"
          y1="12.5"
          x2="33.3333"
          y2="13.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1929_102"
          x1="33.3333"
          y1="37.5"
          x2="33.3333"
          y2="38.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3171DE" />
          <stop offset="1" stop-color="#704AF2" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="w-full h-[520px] max-lg:w-full max-lg:h-[865px]">
      {/** heading */}
      <div className="w-[929px] h-[60px] max-lg:w-[267px] max-lg:h-[172px] max-lg:text-start text-center mx-[200px] max-lg:mx-[20px] max-lg:pt-[30px]">
        <span className="text-[32px] max-lg:text-[24px] font-epilogue font-medium leading-[60px] max-lg:leading-[43px] text-[#3D3D3D]">
          We have multidisciplinary teams to meet any{" "}
          <span className="bg-gradient-to-r from-[#3171DE] to-[#704AF2] inline-block text-transparent bg-clip-text">
            challenge.
          </span>
        </span>
      </div>
      {/** card component */}
      <div className="w-[1250px] h-[270px] max-lg:w-[440px] max-lg:h-[619.5px] max-lg:ml-[20px] max-lg:px-[32px] max-lg:py-[34px] max-lg:mt-[50px] mx-[50px] rounded-[35.39px] shadow-lg">
        <div className="w-[1212px] h-[205px] max-lg:w-[285px] max-lg:h-[551.5px]">
          <div className="space-x-[70px] max-lg:space-x-0 flex flex-row max-lg:flex-col max-lg:space-y-[14px] items-center justify-between ml-[40px] max-lg:ml-0 py-[30px] max-lg:py-0">
            <Card
              svg={svgOne}
              title="Front-end"
              desc="Our frontend developers understand the delicate balance between aesthetics and functionality."
            />

            <Card
              svg={svgTwo}
              title="Back-end"
              desc="Our backend developers are the architects of efficiency and security. They design and build the databases."
            />

            <Card
              svg={svgThree}
              title="Data Analysts"
              desc="Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
