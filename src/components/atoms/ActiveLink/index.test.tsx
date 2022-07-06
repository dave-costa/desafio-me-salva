import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createContainerForTesting } from '../../../core/functions/CreateContainerForTesting'
import { ActiveLink } from './index'
import React from 'react'
vi.mock("next/router", () => {
    return { 
        useRouter() { 
            return {
                asPath: '/aula1'
            }
        }
    }
})
let render: any, container: HTMLDivElement
  beforeEach(() => {
    // a gente exportou da funcao o render e o container que a gente desestruturou
    // e atribuiu naquelas variaveis de cima
    const { render: r, container: c } = createContainerForTesting()
    render = r
    container = c
  })

describe("active link component", () => { 
    it("test active in route", () => { 
        render(<ActiveLink  href="/aula1" active="active" >
                 <div >
                    Home
                 </div>
        </ActiveLink>)
      
        expect(container.querySelector("div")?.className).toBe("active")
    })
    it("test no active in route",() => { 
        render(<ActiveLink  href="/other" active="active" >
                 <div >
                    other
                 </div>
        </ActiveLink>)
      
        expect(container.querySelector("div")?.className).toBe("")
    })
})