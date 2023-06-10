import React from 'react';
import './HeroListInfo.scss';
import { Link } from 'react-router-dom';
import { Superhero } from '../../types/Superhero';

type Props = {
  hero: Superhero
};

export const HeroesListInfo: React.FC<Props> = ({ hero }) => {
  return (
    <Link to={`${hero.nickname}`}>
      <div className="hero">
        <img src={`http://localhost:5000/${hero.images[0]}`} alt="" className="hero__img" />

        <p className="hero__nickname">{hero.nickname}</p>
      </div>
    </Link>
  );
};
