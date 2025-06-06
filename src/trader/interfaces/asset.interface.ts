export interface Asset {
    id: string;
    name: string;
    symbol: string;
    price: number;
    volume: number;
    marketCap: number;
    changePercentage: number;
    lastUpdated: Date;
}