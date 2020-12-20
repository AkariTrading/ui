export interface User {
    email: string
}

export interface TaskRequest {
    body: string;
    exchange: string;
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

