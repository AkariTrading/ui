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

export interface TaskResponse extends ErrorResponse {
    logs?: LogEntry[];
}

export interface BacktestResponse extends ErrorResponse {
    logs?: LogEntry[];
}

