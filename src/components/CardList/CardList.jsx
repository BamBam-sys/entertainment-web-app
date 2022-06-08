import React from 'react';
import { Heading, RegularCard } from '..';
import './cardList.scss';

const CardList = ({ data, headingText }) => {
  return (
    <div className="list">
      <Heading text={headingText} />
      <div className="cards">
        {data.map((item) => (
          <RegularCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
