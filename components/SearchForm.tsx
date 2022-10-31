import { FiSearch } from 'react-icons/fi'

type Props = {
    onChange: (query: string) => void
}

export default function SearchForm({ onChange }: Props) {
    return (
        <div className='container'>
            <div className='flex relative mt-8 sm:mt-12 max-w-[32rem] w-full mx-auto'>
                <FiSearch
                    fontSize={22}
                    className='absolute top-1/2 -translate-y-1/2 text-slate-300 left-3.5'
                />
                <input
                    type='text'
                    placeholder='Search rocket...'
                    onChange={(e) => onChange(e.target.value)}
                    className='w-full h-12 bg-slate-900 focus:bg-slate-800 focus:border-cyan-300 hover:bg-slate-800 border border-slate-600 focus:outline-none active:outline-none pr-6 pl-12 rounded-md transition-colors'
                />
            </div>
        </div>
    )
}
