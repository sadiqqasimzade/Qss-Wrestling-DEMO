import { DataType, IMappable } from "./types"

const takedownData_Haji: IMappable[] = [
    {
        indicator: 'Takedown count',
        value: 49,
        persentage: 47
    },
    {
        indicator: 'Takedown success Rate',
        value: 0.59,
        persentage: 59
    },
    {
        indicator: 'Takedown per fight',
        value: 2.13,
        persentage: 51
    },
    {
        indicator: 'Avg takedown points',
        value: 2,
        persentage: 100
    },
    {
        indicator:"Single leg takedown count",
        value: 29,
        persentage: 47
    },
    {
        indicator: 'Single leg takedown (success rate)',
        value: 0.41,
        persentage:58,
    },
    {
        indicator: 'Double leg takedown counts',
        value: 8,
        persentage: 90
    },
    {
        indicator: 'Double leg takedown (success rate)',
        value: 0.75,
        persentage: 70
    },
    {
        indicator:"danger zone count",
        value: 0,
        persentage: 0
    },
    {
        indicator: 'Danger zone (success rate)',
        value: 90,
        persentage:0
        
    },
]

const durabilityData_Haji: IMappable[] = [
    {
        indicator: 'Successful defences',
        value: 56,
        persentage:75
    },
    {
        indicator: "Protection zone points",
        value: 0,
        persentage:0
    }
]

const offenceData_Haji: IMappable[] = [
    {
        indicator: "Protection zone rate",
        value: 1,
        persentage:67
    },
    {
        indicator: "Avg protection zone counts",
        value: 0.6,
        persentage:67
    },
    {
        indicator: "Turnover success rate",
        value: 0.79,
        persentage:67
    },
    {
        indicator: "Parterre success rate",
        value: 1,
        persentage:100
    }
]
const defenceData_Haji: IMappable[] = [
    {
        indicator: 'Takedown escape rate',
        value: 0.57,
        persentage: 59
    },
    {
        indicator: 'Exposure escape rate',
        value: 0.07,
        persentage: 47
    },
    {
        indicator: 'Turnover escape rate',
        value: 0.12,
        persentage: 51
        
    },
    {
        indicator: 'Protection zone escape rate',
        value:0,
        persentage:0
    },
    {
        indicator: 'Parterre escape rate',
        value: 0,
        persentage: 0
    }

]
const summaryData_Haji: IMappable[] = [
    { indicator: 'Takedown', value: 0.63,persentage:63 },
    { indicator: 'Durability', value: 0.28,persentage:28  },
    { indicator: 'Offence', value: 0.85,persentage:85 },
    { indicator: 'Defence', value: 0.25,persentage:25 },
]



export const hajiData: DataType = {
    country: 'Azerbaijan',
    name: 'Haji Aliyev',
    score: 50,
    img: 'https://309417.selcdn.ru/im14ru-01/iblock/67c/yx5mo3e2hrq1xe5iy0rjp5klwoietdd9.jpeg',
    defenceData: defenceData_Haji,
    durabilityData: durabilityData_Haji,
    offenceData: offenceData_Haji,
    takedownData: takedownData_Haji,
    summaryData: summaryData_Haji
}