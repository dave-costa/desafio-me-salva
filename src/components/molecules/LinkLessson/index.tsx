import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { useState } from 'react'
import { BsFillFileTextFill } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { SiExercism } from 'react-icons/si'
import { ActiveLink } from '../../atoms/ActiveLink'
import style from './style.module.sass'

export const LinkLesson = ({slug, title, type,}:LinkLessonProps) => { 
    const cookie = parseCookies()
    const [check, setChecked] = useState(Boolean(cookie[slug]) || false)
   
    function handlePersist (ch: any) {  
        setChecked(ch)
        ch && setCookie(null, slug, String(check), {
            path: '/',
        })
        !ch && destroyCookie(null, slug)
    }
    const typeLesson = { 
        video: <FaVideo size={24} />, 
        text: <BsFillFileTextFill size={24} />,
        exercise: <SiExercism size={24} />
    }
    return ( 
        <ActiveLink  href={`/${slug}`} active={style.active} >
            
                 <div className={style["LinkLesson-container"]} >
                       <label className={style["linkLesson__label"]}>
                    <span>
                        {typeLesson[type]}
                    </span>
                    <span>
                        {title}
                    </span>
                </label>
                <span>
                    <input onChange={({target}) => handlePersist(target.checked)} type="checkbox" checked={check} />
                </span>
               
                 </div>
           
        </ActiveLink>
    )
}

interface LinkLessonProps { 
    title: string
  
    type: 'video' | 'text' | 'exercise'
    slug: string
}