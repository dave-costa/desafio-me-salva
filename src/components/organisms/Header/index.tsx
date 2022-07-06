import { Logo } from "../../atoms/Logo";
import style from './style.module.sass';
export function Header () { 
    return ( 
        <header className={style["header-container"]}>
            <Logo />
        </header>
    )
}