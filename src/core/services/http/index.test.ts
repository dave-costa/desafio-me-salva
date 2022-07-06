import axios from 'axios'
import { describe, expect, it } from 'vitest'
const instance_api = axios.create({
    //baseURL: process.env.
    baseURL: "https://bff-qa.mesalva.com/json/pages/desafio-mesalva-web"
})

class AxiosClient {
    async get(path: string) { 
        
        try {
            const response = await instance_api.get(`/${path}`)
            return response.data.result
        } catch (error) {
            return false 
        }
    } 
}

class HttpClient {
    private client
    constructor(FetchClient:any) { 
        this.client = new FetchClient()
    }
    async get (path: string) { 
        const response = await this.client.get(path)
        return response
    }
}

const makeRequest = async (httpClient:any, fetchClient:any, path: string) => { 
    const http = new httpClient(fetchClient)
    const data = await http.get(path)
    return data
}

describe("shoult verify call to http request", () => { 
    it("shoult call http client", async () => {
        const path = ""
        const data =await makeRequest(HttpClient,AxiosClient, path )
        expect(data).not.toBeNull()
    })
    it("shoult call http client with error", async () => {
        const path = "/no_exist"
        const data = await makeRequest(HttpClient,AxiosClient, path )
        expect(data).toBe(false)
    })
})
