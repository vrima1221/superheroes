import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getOne } from '../../http/httpClient';
import { Superhero } from '../../types/Superhero';

import './HeroPage.scss';

export const HeroPage: React.FC = () => {
  const { nickname } = useParams();

  const [currentHero, setCurrentHero] = useState<Superhero | null>(null);

  useEffect(() => {
    if (nickname) {
      getOne(nickname)
        .then(heroData => setCurrentHero(heroData));
    }
  }, []);

  return (
    <div className="profile">
      <Link to="./edit" className="edit-button">Edit</Link>
      <h1 className="profile__title">{currentHero?.nickname}</h1>
      <p className="profile__real-name">{currentHero?.real_name}</p>
      <img
        src={`http://localhost:5000/${currentHero?.images[0]}`}
        alt={currentHero?.nickname}
        className="profile__avatar"
      />

      <div className="profile__description section">
        <h2 className="profile__description-title section__title">Origin</h2>

        <p className="profile__description-text section__text">{currentHero?.origin_description}</p>
      </div>

      <div className="separator"></div>

      <div className="profile__superpowers section">
        <h2 className="profile__superpovers-title section__title">Superpowers</h2>

        <p className="profile__superpowers-text">{currentHero?.superpowers}</p>
      </div>

      <div className="separator"></div>

      <div className="profile__phrase section">
        <h2 className="profile__phrase-title section__title">Catch phrase</h2>
        <p className="profile__prhase-text">{currentHero?.catch_phrase}</p>
      </div>

      <div className="separator"></div>

      <h2 className="profile__gallery-title section__title">Gallery</h2>
      <div className="profile__gallery">
        {currentHero?.images.map(image => (
          <div className="profile__gallery-image--container" key={currentHero?.nickname}>
            <img
              src={`http://localhost:5000/${image}`}
              alt={currentHero?.nickname}
              className="profile__gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
