import { Markup } from "interweave"
import React from 'react'

import { useState } from "react"
import { GrFormCheckmark, GrFormClose } from 'react-icons/gr'
export function Exercise({exercise, title}:{exercise: any, title: any}) { 
    const [sent, setSent] = useState(false)
    const [answer, setAnswer ] = useState('')
    const [showCorrect, setShowCorrect] = useState(false)
    return ( 
        <div style={{display: 'flex', flexDirection: 'column', rowGap: '1rem'}}>
            <h1>{title}</h1>
            <div style={{display: 'flex', flexDirection: 'column', rowGap: '2rem'}}>
                <div>
                    <Markup content={exercise.question} />
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.3rem'}}>
                    {
                        showCorrect ? <Markup content={exercise.correction} /> :exercise.answers.map((element:any) => (
                            <>
                            <label key={element.text} style={{display: 'flex', flexDirection: 'row', columnGap: '1rem', alignItems: 'center'}}>
                                <span>{element.text}</span>
                                <input onChange={({target}) => setAnswer(target.value)} value={element.text} type="radio" name="answer" />
                                {sent && (
                                    <div >
                                        {element.isCorrect? <GrFormCheckmark  /> : <GrFormClose  />}
                                    </div>
                                )}
                            </label>
                            </>
                        ))
                    }
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', columnGap: '1rem'}} >
                <button id="send" onClick={() => answer && setSent(!sent)}>{sent ? <span>Voltar</span> : <span>Enviar</span>}
                </button>
                {sent && <button id="showCorrect" onClick={() => setShowCorrect(!showCorrect)}>
                    {!showCorrect ? <span>Ver a resposta</span>:<span>Fechar Reposta</span>}
                    </button>}
            </div>
        </div>
    )
}