import React from 'react'

type Props = {}

export default function Banner({}: Props) {
    return (
        <div
            className='h-[18rem] sm:h-[28rem] 2xl:h-[38rem] overflow-hidden bg-cover bg-center bg-no-repeat relative -mt-[5rem]'
            style={{ backgroundImage: 'url("/banner.jpeg")' }}
        ></div>
    )
}
