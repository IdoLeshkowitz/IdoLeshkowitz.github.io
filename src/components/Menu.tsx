import React, {FC, useEffect, useRef} from "react";
import {useMountTransition} from "../hooks/useMountTransition";



interface MenuProps {
    menuOpen: boolean
    onBlur: () => void
}

const Menu: FC<MenuProps> = (props) => {
    const menuContainer = useRef<HTMLDivElement>(null);
    const isTransitioning = useMountTransition(props.menuOpen, 600);
    console.log(isTransitioning)
    useEffect(() => {
        if (menuContainer.current) {
            menuContainer.current.focus()
        }
    });
    const {menuOpen, onBlur} = props
    if (!isTransitioning && !menuOpen) return null
    return (
        <>
            <div
                // style={{display: menuOpen ? 'flex' : 'none'}}
                className={`${menuOpen ? 'menu_background_open' : 'menu_background_closed'}`}
                onClick={onBlur}
                ref={menuContainer}
            >
                <section
                    className='menu_container'
                    onClick={(e) => e.stopPropagation()}
                >
                </section>
            </div>
        </>
    )
}
export default Menu