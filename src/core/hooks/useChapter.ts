import { useQuery } from 'react-query';
import { AxiosClient } from '../services/drivers/AxiosClient';
import { HttpClient } from './../services/http/index';

interface Chapter { 
    type:string
    title: string
    slug: string
}
const twentyFourHours = 86400000
export const useChapter =() => useQuery('chapters', async() => {
    const http = new HttpClient(AxiosClient)
    const data = await http.get("")
    const list:Chapter[] = []
    data.children.map((chapter:Chapter ) => { 
        list.push(chapter)
    })
    return list
}, {staleTime:twentyFourHours})

