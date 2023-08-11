export type DataType = {
    name: string
    country: string
    score: number
    img: string
    defenceData: IMappable[]
    offenceData: IMappable[]
    durabilityData: IMappable[]
    takedownData: IMappable[]
    summaryData: IMappable[]
}

export interface IMappable {
    indicator: string;
    value: number;
    persentage:number;
}