/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getOne, patch } from '../../http/httpClient';
import { Superhero } from '../../types/Superhero';
import './HeroPage.scss';

export const HeroPageEdit: React.FC = () => {
  const { nickname } = useParams();
  const navigate = useNavigate();

  const [currentHero, setCurrentHero] = useState<Superhero | null>(null);
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentSuperpowers, setCurrentSuperpowers] = useState('');
  const [currentCatchPhrase, setCurrentCatchPhrase] = useState('');
  const [currentImages, setCurrentImages] = useState([]);
  const [imagesInput, setImageInput] = useState<File[]>([]);

  useEffect(() => {
    if (nickname) {
      getOne(nickname)
        .then(heroData => {
          setCurrentHero(heroData);
          setCurrentDescription(heroData.origin_description);
          setCurrentCatchPhrase(heroData.catch_phrase);
          setCurrentSuperpowers(heroData.superpowers);
          setCurrentImages(heroData.images);
        });
    }
  }, []);

  const handleImageRemove = (imageToRemove: string) => {
    setCurrentImages(prev => {
      const updatedImages = prev.filter(image => image !== imageToRemove);

      if (nickname) {
        try {
          patch(nickname, { images: updatedImages });
        } catch (error) {
          console.log(error);
        }
      }

      return updatedImages;
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = event.target.files!;

    const imagesArray: File[] = Array.from(files);

    setImageInput(imagesArray);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('origin_description', currentDescription);
    formData.append('superpowers', currentSuperpowers);
    formData.append('catch_phrase', currentCatchPhrase);
    currentImages.forEach((image) => {
      formData.append('images', image);
    });
    imagesInput.forEach((image) => {
      formData.append('newImages', image);
    });

    if (nickname) {
      try {
        await patch(nickname, formData);
        navigate(`/${nickname}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form action="" className="profile" onSubmit={handleFormSubmit}>
      <h1 className="profile__title">{currentHero?.nickname}</h1>
      <p className="profile__real-name">{currentHero?.real_name}</p>
      <img
        src={`http://localhost:5000/${currentHero?.images[0]}`}
        alt={currentHero?.nickname}
        className="profile__avatar"
      />

      <div className="profile__description section">
        <h2 className="profile__description-title section__title">Origin</h2>

        <textarea name="" id="" value={currentDescription} onChange={e => setCurrentDescription(e.target.value)} className="textarea" />
      </div>

      <div className="separator"></div>

      <div className="profile__superpowers section">
        <h2 className="profile__superpovers-title section__title">Superpowers</h2>

        <textarea name="" id="" value={currentSuperpowers} onChange={e => setCurrentSuperpowers(e.target.value)} className="textarea" />

      </div>

      <div className="separator"></div>

      <div className="profile__phrase section">
        <h2 className="profile__phrase-title section__title">Catch phrase</h2>
        <textarea
          name=""
          id=""
          value={currentCatchPhrase}
          onChange={e => setCurrentCatchPhrase(e.target.value)}
          className="textarea"
        />

      </div>

      <div className="separator"></div>

      <div className="profile__gallery">
        <h2 className="profile__gallery-title section__title">Gallery</h2>
        {currentImages.map(image => (
          <div className="profile__gallery-image--container" key={currentHero?.nickname}>
            <img
              src={`http://localhost:5000/${image}`}
              alt={currentHero?.nickname}
              className="profile__gallery-image"
            />
            <button
              type="button"
              className="button--remove"
              onClick={() => handleImageRemove(image)}
            >
              X
            </button>
          </div>
        ))}
        <input
          type="file"
          id="profile_pic"
          name="profile_pic"
          accept=".jpg, .jpeg, .png"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="button--submit">Save</button>
    </form>
  );
};
