import React, { useState } from 'react'
import { RxAvatar } from 'react-icons/rx';
import "./Avatar.css"

const Avatar = ({ className, src, alt, size = 40, ...props }) => {
    const [isSrc, setSrcPresent] = useState(src)
    const handOnError = () => {
        setSrcPresent(false)
    }

    return (
        <>
            {isSrc ? <img
                {...props}
                className={`defaultClass ${className}`}
                style={{ width: `${size}px`, height: `${size}px` }}
                src={src}
                alt={alt}
                onError={handOnError}
            /> : <RxAvatar size={size} />}
        </>
    )
}

export default Avatar