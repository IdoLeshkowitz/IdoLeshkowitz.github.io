import Buttons from "./buttons";
import React from "react";

const Greeting = () => {
    return (

        <section className='greeting'>

            {/*               HEADER             */}
            <h1 className='greeting_text'>
                Hello <span className='hand-wave_icon'>🖐</span> <br/>I'm Ido,<br/>Junior front-end
                developer
            </h1>

            {/*               CONNECT WITH ME             */}
            <Buttons.CommonButton1 extraclassNames={['connect_button']}>
                connect with me<span className='hands-shake_icon'>🤝</span>
            </Buttons.CommonButton1>
        </section>
    )
}
export default Greeting