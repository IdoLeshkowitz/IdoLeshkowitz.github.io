import {CSSProperties, useState} from "react";
import React from "react";
export interface CustomCssProperties  extends CSSProperties{
    '--min-width': string;
}
interface AvatarProps {
    size: string;
    src: string;
    alt: string;
}
const Avatar = ({src,alt,size} : AvatarProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const style : CustomCssProperties = {
        '--min-width': size,
    }
    return (
        <div className='avatar_container' style={style}>
            {imageLoaded ? null : <div className="avatar_alt" >{alt}</div>}
        <img
            className="avatar_image"
            src={src}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
        />
        </div>
    );
}

export default Avatar;