import React from 'react'
import Link from './Link';
import Arrowright from './icons/Arrowright';
import Paths from './Paths.json'
import Categories from './Categories.json'
import Card from './Card';

function getData() {
    return Paths.map((object) => {
        const matched = Categories.find((element) => element.categoryId === object.categoryId)
        return { ...object, ...matched }
    });
}

export default function PathCards({ Title }) {
    return (
        <div className="Cards">
            <div className="title">
                <h6>
                    {Title}
                </h6>
                <Link Text="See All" className="Item author" Icon={<Arrowright />} />
            </div>
            <div className="card-row">
                {getData().map(card => <Card key={card.id} data={card} />)}
            </div>
        </div>
    )
}
