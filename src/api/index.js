const apiKey = 'N420oGW7HhLIhcQC96nlKRRj2oNtMAIiTrlP3ovVEMcvzQ0U8CnX0rggkV9TcDwN'

// Creating header for API requests with apikey

export const createHeaders = () => {
    return {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
    }
}