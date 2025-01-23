import React from 'react'
import Link from './Link'
import Arrowright from './icons/Arrowright'

export default function Card({ data: { image, title, author, desc } }) {
    return (
        <div className="card">
            <div className="img" style={{ backgroundImage: image }}></div>
            <div className="content">
                <div className="card-title">{title}</div>
                <div className="author">{author}</div>
                <div className="desc"><p>{desc}</p></div>
                <div className="end h2">
                    <Link Text="Get Started" Class="btn-link" Icon={<Arrowright />} />
                </div>
            </div>
        </div>
    )
}
