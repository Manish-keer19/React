import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textcolor = 'text-white',
    className = '',
    // or baki jo bhi prope bheji he wo ...propes me a jayegi
    ...props

}) {
    return (
        <button className={` px-4 py-2 rounded-lg ${bgColor} ${className} ${textcolor}`}  {...props}> {children}</button>
    )
}

export default Button