import React from 'react';
import Link from './Link';
import Arrowright from './icons/Arrowright';
import Card from './Card';

export default function PathCards({ Title, filteredCards }) {
    return (
        <div className="Cards">
            <div className="title">
                <h6>{Title}</h6>
                <Link Text="See All" className="Item author" Icon={<Arrowright />} />
            </div>
            <div className="card-row">
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => <Card key={card.id} data={card} />)
                ) : (
                    <p>No paths match your search.</p>
                )}
            </div>
        </div>
    );
}
