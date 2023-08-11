import { IMappable } from "../../consts/types";
import ChartCard from "./chartCard";



export type Props={
    data:IMappable[];
    card_title:string
}
export default function TableBars({card_title,data}:Props){
    return(
        <ChartCard title={card_title}>
            <div className="py-2">
                {data.map(d => <div key={d.indicator} className='grid items-center gap-2' style={{ gridTemplateColumns: '4fr 6fr 1fr' }}>
                    <p className="text-start text-sm truncate ..." title={d.indicator}>{d.indicator}</p>
                    <div className="relative h-3 w-full rounded-lg overflow-hidden bg-stone-200 dark:bg-[#FFFFFF3D]">
                        <div
                            className={`absolute h-full w-full rounded transition-all duration-500`}
                            style={{ width: d.persentage + '%', backgroundColor: `hsl( ${d.persentage * 1.2} 100% 40% )` }}
                        ></div>
                    </div>
                    <p className='text-gray'>{d.value}</p>
                </div>)
                }
            </div>
        </ChartCard >
    )
}