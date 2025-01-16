import React from 'react'
import Arrowright from './icons/Arrowright';
import Data from './Data.json'
import Categories from './Categories.json'

function getData() {
    return Data.map((object) => {
        const matched = Categories.find((element) => element.id === object.id)
        return { ...object, ...matched }
    });
}

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
                {getData().map((card) => (
                    <div className="card" key={card.id}>
                        <div className="img" style={{ backgroundImage: card.image }}></div>
                        <div className="content">
                            <div className="card-title">{card.title}</div>
                            <div className="author">{card.author}</div>
                            <div className="desc"><p>{card.desc}</p></div>
                            <div className="end h2">
                                <div className="btn-link">
                                    Get Started
                                    <Arrowright />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
