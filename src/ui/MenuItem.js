import React from 'react'

export default function MenuItem({ Icon, Text, isActive, onClick }) {
    return (
        <div
            className={`Item ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {Icon}
            {Text}
        </div>
    )
}
