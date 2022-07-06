
import { LinkLesson } from "../LinkLessson"

export function Lessons ({chapters}:{chapters: any[]}) { 
   
    return (
        <div>
            {chapters.map((chapter, i) => (
                <LinkLesson key={i} slug={chapter.slug} checked={true} title={chapter.title} type={chapter.type} />
            ))}
        </div>
    )
}