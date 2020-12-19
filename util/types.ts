export interface User {
    email: string
}

export interface TaskRequest {
    body: string;
    exchange: string;
}


interface LogEntry {
    body: string;
    timestamp: number;
}

export interface TaskResponse {
    logs: LogEntry[];
}

