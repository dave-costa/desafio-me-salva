import { Exercise } from "../../molecules/Exercise";
import { Lessons } from "../../molecules/Lessons";
import { Materials } from "../../molecules/Materials";
import TextLesson from "../../molecules/TextLesson";
import { Video } from "../../molecules/Video";
import style from './style.module.sass';
export function Presentation ({chapters, videoContent}:{chapters: any[], videoContent:any}) { 
    const templateLesson:any = { 
        video: <Video url={videoContent.children[0].data.link}/>, 
        text: <TextLesson lesson={videoContent.children[0].data.html} />,
        exercise: <Exercise exercise={videoContent.children[0].data} title={videoContent.title}  />
    }
    function getMaterials ( children: any[]) { 

        const materials:any = []
        children.map(element =>  {
            
            if(element.type == "pdf") 
            {
                
                const material = { 
                description: element.data.description, 
                link: element.data.link
                }
        
             materials.push(material)  
            } 
        })
        return materials
    }
    return ( 
        <main className={style["presentation-container"]}>
             <Lessons chapters={chapters} /> 
            <div className={style["presentation__content"]}>
                {templateLesson[videoContent.type]}
                <div>
                    <Materials materials={getMaterials(videoContent.children)} />
                </div>
            </div> 
        </main>
    )
}