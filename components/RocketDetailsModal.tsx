import { useEffect } from 'react'
import {
    GiMoneyStack,
    GiMedallist,
    GiFireworkRocket,
    GiCalendar,
    GiWeight,
    GiBodyHeight,
    GiResize,
    Gi3DStairs,
} from 'react-icons/gi'
import classname from 'classnames'

type Props = {
    rocket: any
    hideModal: () => void
}

export default function RocketDetailsModal({ rocket, hideModal }: Props) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div className='fixed top-0 left-0 w-screen h-screen z-20'>
            <div
                className='bg-black opacity-80 w-full h-full absolute'
                onClick={hideModal}
            ></div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[36rem]'>
                <div className='bg-slate-800 rounded-md p-6 m-4'>
                    <div className='mb-4 aspect-[5/3] bg-sky-800 rounded-md'>
                        <img
                            src={rocket.flickr_images[0]}
                            alt={rocket.rocket_name}
                            className='object-cover aspect-[5/3] border-0 rounded-md w-full'
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-slate-200 text-lg sm:text-2xl'>
                            {rocket.rocket_name}
                        </h2>
                        <span
                            className={classname(
                                rocket.active ? 'bg-emerald-600' : 'bg-red-600',
                                'text-xs py-0.5 px-2 rounded-md'
                            )}
                        >
                            {rocket.active ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                    <p className='line-clamp-3 text-slate-500 my-4'>
                        {rocket.description}
                    </p>
                    <div className='text-slate-300 grid grid-cols-2 gap-2'>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <GiMoneyStack fontSize={20} />
                            <span>Cost: ${rocket.cost_per_launch}</span>
                        </div>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <GiMedallist fontSize={20} />
                            <span>
                                Success Rate: {rocket.success_rate_pct}%
                            </span>
                        </div>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <GiFireworkRocket fontSize={20} />
                            <span>Boosters: {rocket.boosters}</span>
                        </div>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <GiCalendar fontSize={20} />
                            <span>First: {rocket.first_flight}</span>
                        </div>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <GiWeight fontSize={20} />
                            <span>Mass: {rocket.mass.kg} KG</span>
                        </div>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <GiBodyHeight fontSize={20} />
                            <span>Height: {rocket.height.meters} Mtr</span>
                        </div>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <GiResize fontSize={20} />
                            <span>Diameter: {rocket.diameter.meters} Mtr</span>
                        </div>
                        <div className='text-xs sm:text-sm flex items-center gap-2'>
                            <Gi3DStairs fontSize={20} />
                            <span>Stages: {rocket.stages}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
