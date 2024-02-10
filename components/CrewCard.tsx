import Image from 'next/image'
import React from 'react'

type Props = {
    src: string;
}

const CrewCard = ({ src }: Props) => {
  return (
    <div className='w-[209px] h-[300px]'>
        {/** image */}
        <div className='w-[209px] h-[209px] rounded-[169.92px]'>
            <Image src={src} alt='crew-image' width={209} height={209} />
        </div>
    </div>
  )
}

export default CrewCard