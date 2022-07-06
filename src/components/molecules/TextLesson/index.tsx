import { Markup } from 'interweave'
export default function TextLesson ({lesson}: {lesson:any}) { 
    return (
        <div>
            <Markup content={lesson} />
        </div>
    )
}