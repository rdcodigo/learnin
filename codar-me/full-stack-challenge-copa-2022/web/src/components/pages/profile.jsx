import { ArrowIcon } from "../icons/arrowIcons"
import { HunchCard } from "../hunches/hunchCard"
import { HunchDate } from "../hunches/hunchDate"

import { useAsyncFn, useLocalStorage } from "react-use"
import {useEffect, useState } from "react"
import { format, formatISO } from "date-fns"
import { useParams, useNavigate } from 'react-router-dom';

import axios from "axios"

export function Profile() {
    const params = useParams()
    const navigate = useNavigate()

    const [currentDate, setCurrentDate] = useState(formatISO(new Date(2022, 10, 20)))

    const [auth, setAuth] = useLocalStorage('auth', {})


    const [{value: user, loading, error}, fetchHunches] = useAsyncFn(
        async () => {
            const res = await axios(
                {
                    methoc: 'get',
                    baseURL: import.meta.env.VITE_API_URL,
                    url: `/${params.username}`
                }
            )
            
            const hunches = res.data.hunches.reduce(
                (acc, hunch)=>{
                    acc[hunch.gameId] = hunch
                    return acc
                },
                {}
            )
            return {
                ...res.data,
                hunches
            }
        }
    )

    const [games, fetchGames] = useAsyncFn(
        async (params) => {
            const res = await axios(
                {
                    methoc: 'get',
                    baseURL: import.meta.env.VITE_API_URL,
                    url: '/games',
                    params
                }
            )

            return res.data
        }
    )
    
    function logout(){
        setAuth({})
        navigate('/login')
    }

    const isLoading = games.loading || loading
    const hasError = games.error || error
    const isDone = !isLoading && !hasError

    useEffect(
        ()=>{
            fetchHunches()
        },
        []
    )

    useEffect(
        ()=>{
            fetchGames({gameTime: currentDate})
        },
        [currentDate]
    )

    return (
        <>
            <header className="py-4 text-color2 bg-color3-20 p-6">
                <section className="container max-w-xl flex justify-between">
                    <div className="flex justify-center">
                        <img src="../public/imgs/logo/logo-fundo-vermelho.svg" className="w-20 md:w-28"></img>
                    </div>
                    {auth?.user?.id && (
                        <div className="flex space-x-4 items-center">
                            <div onClick={logout} className="cursor-pointer">
                                Sair
                            </div>
                        </div>
                    )}
                </section>
                <section className="bg-color3-20 container max-w-xl">
                    <div className="container max-w-xl py-6 space-y-6 flex flex-col">
                        <a href="/home" className="flex space-x-3">
                            <ArrowIcon name="arrowBack" className="w-4" /> <span>Palpitar</span>
                        </a>
                        <h1 className="text-xl md:text-2xl font-bold text-white">{user?.name}</h1>
                    </div>
                </section>
            </header>

            <main className="container max-w-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-color3-20">Seus Palpites</h2>

                <HunchDate currentDate={currentDate} onChange={setCurrentDate} />

                {isLoading && 'Carregando jogos...'}
                {hasError && 'Ops, Algo deu errado'}

                
                {isDone && games.value?.map(
                    game => (
                        <HunchCard
                            key={game.id}
                            gameId={game.id}
                            homeTeam={game.homeTeam }
                            awayTeam={game.awayTeam}
                            gameTime={format(new Date(game.gameTime), 'H:mm')}
                            homeTeamScore={user?.hunches?.[game.id]?.homeTeamScore || ''}
                            awayTeamScore={user?.hunches?.[game.id]?.awayTeamScore || ''}
                            disabled={true}
                        />
                    )
                )}
            </main>
        </>
    )
}