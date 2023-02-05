// import resume from './images /IdoLeshkowitzCV.pdf'
import React, {useEffect, useState} from 'react'
import Menu from "./components/Menu";
import Greeting from "./components/Greetings";
import Buttons from "./components/buttons";

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const handleScroll = () => {
        const position = window.scrollY
        document.documentElement.style.setProperty('--scroll-y', position.toString())
    }
    return (
        <main className='main'>
            {/*                  HAMBURGER                 */}
            <Buttons.HamburgerButton onClick={() => setMenuOpen(!menuOpen)}/>
            {/*                     MENU                   */}
            < Menu menuOpen={menuOpen} onBlur={()=>setMenuOpen(false)}/>
            {/*               GREETING SECTION             */}
            <Greeting/>

            {/*</section>*/}
        </main>
    )
}

export default App
/*<a href={resume} target='_blank' rel='noopener noreferrer' download>
    Download PDF
</a>*/
