import axios from 'axios'

const instance_api = axios.create({
    baseURL: "https://bff-qa.mesalva.com/json/pages/desafio-mesalva-web"

})

export class AxiosClient {
    async get(path: string) { 
        
        try {
            const response = await instance_api.get(`/${path}`)
            return response.data.result
        } catch (error) {
            return false 
        }
    } 
}
