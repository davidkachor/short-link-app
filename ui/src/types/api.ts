export interface ApiItem {
    hash: string
    original: string,
    short: string
}

export interface ApiError {
    status: number
    error: string
}