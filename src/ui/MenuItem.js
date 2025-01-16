import React, { useState } from 'react'

export default function MenuItem({ Icon, Text }) {
    const [click, setClick] = useState(false);
    return (
        <div className={`Item ${click ? "active" : ""}`}
            onClick={() => setClick(true)}
        >
            {Icon}
            {Text}
        </div>
    )
}
