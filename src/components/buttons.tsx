import React, {FC, ReactElement, ReactNode} from "react";
import {RxHamburgerMenu} from "react-icons/rx";

interface ButtonProps {
    children?: ReactNode
    onClick?: () => void
}

const CommonButton1: FC<ButtonProps> = ({children, onClick}): ReactElement => {
    return (
        <div className='button_common1_wrapper'>
            <button onClick={onClick} className='button_common1'>
                {children}
            </button>
        </div>
    )
}

const HamburgerButton: FC<ButtonProps> = ({children, onClick}): ReactElement => {
    return (
        <button
            className="hamburger_ring"
            onClick={onClick}
        >
            <RxHamburgerMenu className='hamburger_icon'/>
        </button>
    )
}

const Buttons = {CommonButton1, HamburgerButton}
export default Buttons


