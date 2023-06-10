import React from 'react';
import './HeroesList.scss';
import { Superhero } from '../../types/Superhero';
import { HeroesListInfo } from '../HeroListInfo/HeroListInfo';

type Props = {
  heroes: Superhero[],
  currentPage: number,
  onPageChange: React.Dispatch<React.SetStateAction<number>>
};

export const HeroesList: React.FC<Props> = ({ heroes, currentPage, onPageChange }) => {
  return (
    <div className="list__container">
      <div className="list">
        {heroes.map(hero => (
          <HeroesListInfo hero={hero} key={hero.nickname} />
        ))}
      </div>
      <button type="button" className="button--load" onClick={() => onPageChange(currentPage + 1)}>Load more...</button>
    </div>
  );
};
