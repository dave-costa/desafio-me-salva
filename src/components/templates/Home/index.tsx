import { Layout } from "../../organisms/Layout"
import { Presentation } from "../../organisms/Presentation"

export function HomeTemplate ({loading, dataUseChapter, LessonData}:{dataUseChapter:any, LessonData:any, loading: boolean }) { 

    return (
     
        <Layout>
            {!loading && <Presentation videoContent={LessonData} chapters={dataUseChapter} />  }
        </Layout>
        
    )
}