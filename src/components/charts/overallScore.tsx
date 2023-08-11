import { useEffect, useRef } from "react"
import ChartCard from "./chartCard"



type Props={
    name: string
    country: string
    score: number
}


export default function OverallScore({country,name,score}:Props) {


    const flagRef = useRef<string>('')
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => res.json()).then((d) => {
            flagRef.current = d[0].flags.svg as string
        }).catch(() => {
            flagRef.current = '404notfound.png'
        })

    }, [])
    return (
        <ChartCard title="Overall Percentile">
            <div className="w-full h-full flex justify-center items-center flex-col overflow-hidden">
                <div className="flex items-center justify-between gap-5">
                    <p>{name}</p>
                    <img src={flagRef.current} className="h-5 w-8" alt="country flag" />
                </div>
                <div className="progress">
                    <div className="barOverflow">
                        <div className="bar-overall transition-all" style={{
                            transform: `rotate(${45 + score * 1.8}deg)`,
                            borderBottomColor: `hsl(${score}, 100%, 40%)`,
                            borderRightColor: `hsl(${score}, 100%, 40%)`,
                        }}></div>
                    </div>
                    <span className="font-semibold text-lg">{score}</span>%
                </div>

            </div>
        </ChartCard >
    )
}