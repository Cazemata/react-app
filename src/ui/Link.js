import React from 'react'

export default function Link({ Class, Text, Icon }) {
    return (
        <div className={Class}>
            {Text}
            {Icon}
        </div>
    )
}
