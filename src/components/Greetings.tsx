import Buttons from "./buttons";
import React from "react";

const Greeting = () => {
    return (

            <section className='greeting'>

                {/*               HEADER             */}
                <h1 className='greeting_header'>
                    Hello <span className='greeting_header_handicon'>🖐</span> <br/>I'm Ido,<br/>Junior front-end
                    developer
                </h1>

                {/*               CONNECT WITH ME             */}
                <Buttons.CommonButton1 >
                    connect with me<span>🤝</span>
                </Buttons.CommonButton1>
            </section>
    )
}
export default Greeting