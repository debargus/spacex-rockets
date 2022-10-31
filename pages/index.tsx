import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RocketsGrid from '../components/RocketsGrid'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'
import RocketDetailsModal from '../components/RocketDetailsModal'

const BASE_URL = 'https://api.spacexdata.com/v3/rockets'

export default function IndexPage() {
    const [rockets, setRockets] = useState<any>(null)
    const [filteredRockets, setFilteredRockets] = useState<any>(null)
    const [selectedRocket, setSelectedRocket] = useState<any>(null)
    const [pagination, setPagination] = useState({
        limit: 10,
        offset: 0,
    })
    const [searchQuery, setSearchQuery] = useState<string>()

    async function fetchRockets(limit: number, offset: number) {
        const { data } = await axios.get(
            BASE_URL + `?limit=${limit}&offset=${offset}`
        )
        setRockets(data)
        setFilteredRockets(data)
    }

    function handleSelectRocket(rocketId: number) {
        const selectedRocket = rockets.filter(
            (rocket: any) => rocket.id === rocketId
        )[0]
        setSelectedRocket(selectedRocket)
    }

    useEffect(() => {
        fetchRockets(pagination.limit, pagination.offset)
    }, [])

    useEffect(() => {
        if (!searchQuery?.length) {
            setFilteredRockets(rockets)
            return
        }

        setFilteredRockets(
            rockets.filter((rocket: any) =>
                rocket.rocket_name.toLowerCase().includes(searchQuery)
            )
        )
    }, [searchQuery])

    return (
        <>
            <Head>
                <title>SpaceX Rockets</title>
            </Head>
            <div>
                <Header />
                <Banner />
                <SearchForm onChange={(query) => setSearchQuery(query)} />
                <RocketsGrid
                    rockets={filteredRockets}
                    handleSelectRocket={handleSelectRocket}
                />
                {selectedRocket && (
                    <RocketDetailsModal
                        rocket={selectedRocket}
                        hideModal={() => setSelectedRocket(null)}
                    />
                )}
            </div>
        </>
    )
}
