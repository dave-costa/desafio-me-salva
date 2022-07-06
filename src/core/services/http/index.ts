export class HttpClient {
    private client
    constructor(FetchClient:any) { 
        this.client = new FetchClient()
    }
    async get (path: string) { 
        const response = await this.client.get(path)
        return response
    }
}