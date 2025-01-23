import React from 'react'

export default function Link({ className, Text, Icon }) {
    return (
        <div className={className}>
            {Text}
            {Icon}
        </div>
    )
}
