import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { QueryClient } from 'react-query'
import { HomeTemplate } from "../components/templates/Home"
import { useChapter } from "../core/hooks/useChapter"
const Index = (props:any) => {
  const {isLoading, data} = useChapter()
 
  return (
   <HomeTemplate loading={isLoading} dataUseChapter={data} LessonData={props.data} />
  )
}
export default Index


 export const getServerSideProps: GetServerSideProps = async(ctx: GetServerSidePropsContext ) => {
  const title = ctx.params?.title
  const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       staleTime: 86400000,
     },
   },
 })
  const data = await queryClient.fetchQuery(String(title), async() => {
    try {
      const response = await axios.get(`https://bff-qa.mesalva.com/json/pages/desafio-mesalva-web/${title}`)
      return response.data.result

    } catch (error) {
       return false
    }
  })
  if(!data) { 
    return { 
      redirect: { 
        permanent: false, 
        destination: '/introducao-a-geografia'
      }
    }
  }
  return {
    props: {
      data,
    }
  }
} 
