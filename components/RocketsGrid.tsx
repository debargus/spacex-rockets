import classname from 'classnames'
import {
    GiMoneyStack,
    GiMedallist,
    GiFireworkRocket,
    GiCalendar,
    GiWeight,
    GiResize,
    Gi3DStairs,
    GiBodyHeight,
} from 'react-icons/gi'

type Props = {
    rockets: any[]
    handleSelectRocket: (rocketId: number) => void
}

export default function RocketsGrid({ rockets, handleSelectRocket }: Props) {
    return (
        <main className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full py-12'>
                {rockets === null ? (
                    <p>Loading rockets 🚀...</p>
                ) : rockets?.length ? (
                    rockets.map((rocket) => (
                        <div
                            key={rocket.rocket_id + rocket.id}
                            className='p-4 border border-slate-600 hover:border-cyan-300 transition-colors hover:bg-slate-800 cursor-pointer rounded-md'
                            onClick={() => handleSelectRocket(rocket.id)}
                        >
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
                                        rocket.active
                                            ? 'bg-emerald-600'
                                            : 'bg-red-600',
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
                                    <span>
                                        Height: {rocket.height.meters} Mtr
                                    </span>
                                </div>
                                <div className='text-xs sm:text-sm flex items-center gap-2'>
                                    <GiResize fontSize={20} />
                                    <span>
                                        Diameter: {rocket.diameter.meters} Mtr
                                    </span>
                                </div>
                                <div className='text-xs sm:text-sm flex items-center gap-2'>
                                    <Gi3DStairs fontSize={20} />
                                    <span>Stages: {rocket.stages}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Oops! No rockets to show 🤷‍♂️</div>
                )}
            </div>
            <p className='py-4 text-xs text-slate-600 text-center'>
                **Pagination is not implemented due to not enough data from
                SpaceX API**
            </p>
        </main>
    )
}
