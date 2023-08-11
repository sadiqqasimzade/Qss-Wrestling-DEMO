import { useState } from "react";
import OverallScore from "../components/charts/overallScore";
import TableBars from "../components/charts/tableBars";
import { AbubakarData } from "../consts/abubakarData";
import { hajiData } from "../consts/hajiData";
import { DataType } from "../consts/types";


const datas: DataType[] = [
    hajiData, AbubakarData
]

export default function MainPage() {
    const [data, setData] = useState<DataType>(hajiData)

    
    return (
        <div className='bg-gray-100 min-h-screen dark:bg-gray-700'>
            <div className='py-3 px-10 dark:text-white flex flex-col gap-5'>
                <div className="flex justify-center">
                    <div className="flex flex-col max-w-md">
                        <p className="font-bold">Choose your fighter</p>
                        <select onChange={() => {
                            const selected = datas.find(value => value.name === event.target.value)
                            if (selected) {
                                setData(selected)
                            }
                            else {
                                setData(hajiData)
                            }
                        }}
                            className="shadow-lg bg-gray-50 dark:bg-selectInner border border-gray-300 text-gray-900 dark:text-chartCardHeaderText text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                            <option disabled value=''>Choose</option>
                            {datas.map(value => <option key={value.name} value={value.name}>{value.name}</option>)}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
                    <OverallScore country={data.country} name={data.name} score={data.score} />
                    <TableBars card_title="Summary Stats" data={data.summaryData} />
                    <div className="flex justify-center items-center">
                        <img src={data.img} alt="" className='w-60' />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    <TableBars card_title="Takedown Stats" data={data.takedownData} />
                    <TableBars card_title="Durability Stats" data={data.durabilityData} />
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 ">
                    <TableBars card_title="Offence Stats" data={data.offenceData} />
                    <TableBars card_title="Deffence Stats" data={data.defenceData} />
                </div>
            </div>
        </div>
    )
}