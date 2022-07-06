import { ReactNode } from "react";
import { Header } from "../Header";

export function Layout ({children}:{children: ReactNode}) { 
    return (
        <section style={{maxWidth: '1120px', margin: '0 auto'}}>
            <Header />
            <main>
                {children}
            </main>
        </section>
    )
}