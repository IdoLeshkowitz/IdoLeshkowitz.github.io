import React, {FC, ReactElement, ReactNode} from "react";
import {RxHamburgerMenu} from "react-icons/rx";

interface ButtonProps {
    children?: ReactNode
    onClick?: () => void
    extraclassNames?: string[]
}

const CommonButton1: FC<ButtonProps> = ({children, onClick,extraclassNames}): ReactElement => {
    return (
        <div className={`button_common1_border ${extraclassNames?.join(' ')}`}>
            <button onClick={onClick} className='button_common1_content'>
                {children}
            </button>
        </div>
    )
}

const HamburgerButton: FC<ButtonProps> = ({children, onClick,extraclassNames}): ReactElement => {
    return (
        <button
            className={`hamburger_ring ${extraclassNames?.join(' ')}`}
            onClick={onClick}
        >
            <RxHamburgerMenu className='hamburger_icon'/>
        </button>
    )
}

const Buttons = {CommonButton1, HamburgerButton}
export default Buttons


