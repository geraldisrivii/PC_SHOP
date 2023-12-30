export interface StatsGraphValues{
    value: number;
    color: string;
    height? : number;
}

export interface StatsLineGraphProps {
    value: number;
    height: number;
    color: string;
}

export interface Resolutions {
    id: number;
    title: {
        rendered: string;
    };
    cfs: {
        resolution: string;
        color: string;
    };
}