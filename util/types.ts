export interface User {
    email: string
}

export interface TaskRequest {
    body: string;
    exchange: string;
}

export interface BacktestRequest {
    body: string;
    exchange: string;
    symbol: string;
    baseAsset: string;
    quoteAsset: string;
    startTimestamp: number;
    endTimestamp: number;
    balance: any;
    fee: number;
}
export interface ErrorResponse {
    errCode?: string;
    errorBody?: string;
}

interface LogEntry {
    body: string;
    timestamp: number;
}


// type Trade struct {
//     Amount    float64`json:"amount"`
//     Price     float64`json:"price"`
//     Side      string`json:"side"`      // buy or sell
//     Timestamp int64`json:"timestamp"` // unix timetstamp
// }

interface Trade {
    amount    :number
    price     :number
    side: "buy" | "sell";
    timestamp: number;
}

interface Balance {
    [key:string]: number
}

export interface TaskResponse extends ErrorResponse {
    logs?: LogEntry[];
}

export interface BacktestResponse extends ErrorResponse {
    logs?: LogEntry[];
    lastPrice: number;
    balance: Balance;
    trades: Trade[];
    startTimestamp: number;
    endTimestamp: number;
    state: any;
}

