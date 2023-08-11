import { DataType, IMappable } from "./types"

const takedownData_Abubakar: IMappable[] = [
    {
        indicator: 'Takedown count',
        value: 104,
        persentage: 100
    },
    {
        indicator: 'Takedown success Rate',
        value: 0.38,
        persentage: 38
    },
    {
        indicator: 'Takedown per fight',
        value: 4.16,
        persentage: 100
    },
    {
        indicator: 'Avg takedown points',
        value: 2,
        persentage: 100
    },
    {
        indicator:"Single leg takedown count",
        value: 66,
        persentage: 100
    },
    {
        indicator: 'Single leg takedown (success rate)',
        value: 0.24,
        persentage:25,
    },
    {
        indicator: 'Double leg takedown counts',
        value: 9,
        persentage: 95
    },
    {
        indicator: 'Double leg takedown (success rate)',
        value: 0.11,
        persentage: 30
    },
    {
        indicator:"danger zone count",
        value: 0,
        persentage: 0
    },
    {
        indicator: 'Danger zone (success rate)',
        value: 0,
        persentage:0
        
    },
]

const durabilityData_Abubakar: IMappable[] = [
    {
        indicator: 'Successful defences',
        value: 66,
        persentage: 80
    },
    {
        indicator: "Protection zone points",
        value: 16.6,
        persentage:40
    }
]

const offenceData_Abubakar: IMappable[] = [
    {
        indicator: "Protection zone rate",
        value: 0.89,
        persentage:37
    },
    {
        indicator: "Avg protection zone counts",
        value: 0.72,
        persentage:77
    },
    {
        indicator: "Turnover success rate",
        value: 1,
        persentage:77
    },
    {
        indicator: "Parterre success rate",
        value: 0,
        persentage:0
    }
]
const defenceData_Abubakar: IMappable[] = [
    {
        indicator: 'Takedown escape rate',
        value: 0.66,
        persentage: 79
    },
    {
        indicator: 'Exposure escape rate',
        value: 0.25,
        persentage: 70
    },
    {
        indicator: 'Turnover escape rate',
        value: 0.29,
        persentage: 77
        
    },
    {
        indicator: 'Protection zone escape rate',
        value:0.17,
        persentage:100
    },
    {
        indicator: 'Parterre escape rate',
        value: 0,
        persentage: 0
    }
]
const summaryData_Abubakar: IMappable[] = [
    { indicator: 'Takedown', value: 0.72,persentage:72 },
    { indicator: 'Durability', value: 0.41,persentage:41  },
    { indicator: 'Offence', value: 0.65,persentage:65 },
    { indicator: 'Defence', value: 0.4,persentage:40 },
]



export const AbubakarData: DataType = {
    country: 'Azerbaijan',
    name: 'Abubakar Abakarov',
    score: 55,
    img: 'https://avatars.mds.yandex.net/i?id=dd2d129ce442d2d86570c4b7a6a519242f51762e-9182312-images-thumbs&n=13',
    defenceData: defenceData_Abubakar,
    durabilityData: durabilityData_Abubakar,
    offenceData: offenceData_Abubakar,
    takedownData: takedownData_Abubakar,
    summaryData: summaryData_Abubakar
}