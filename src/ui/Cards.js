import React from 'react'
import Arrowright from './icons/Arrowright';
import Data from './Data.json'

export default function Cards() {
    return (
        <div className="Cards">
            <div className="title">
                <h6>Recently Added</h6>
                <div className="author btn-link">
                    See All
                    <Arrowright />
                </div>
            </div>
            <div className="card-row">
                {Data.map((item) => {
                    return (
                        <div className="card">
                            <div className="img" style={{ backgroundImage: item.image }}></div>
                            <div className="content">
                                <div className="card-title">{item.title}</div>
                                <div className="author">{item.author}</div>
                                <div className="desc"><p>{item.desc}</p></div>
                                <div className="end h2">
                                    <div className="btn-link">
                                        Get Started
                                        <Arrowright />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
