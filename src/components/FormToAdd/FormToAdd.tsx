import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormToAdd.scss';
import { post } from '../../http/httpClient';

export const FormToAdd: React.FC = () => {
  const [imageInput, setImageInput] = useState<File[]>([]);
  const [nicknameInput, setNicknameInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [superpowersInput, setSuperpowersInput] = useState('');
  const [catchphraseInput, setCatchphraseInput] = useState('');

  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = event.target.files!;

    const imagesArray: File[] = Array.from(files);

    setImageInput(imagesArray);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('nickname', nicknameInput);
    formData.append('real_name', nameInput);
    formData.append('origin_description', descriptionInput);
    formData.append('superpowers', superpowersInput);
    formData.append('catch_phrase', catchphraseInput);
    imageInput.forEach((image) => {
      formData.append('images', image);
    });

    await post(formData);
    navigate(`/${nicknameInput}`);
  };

  return (
    <>
      <h1 className="form__title">Create new hero</h1>

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__input">
          <label htmlFor="nickname" className="form__input-label">Nickname:</label>
          <input
            className="form__input-field"
            type="text"
            name="nickname"
            id="nickname"
            required
            value={nicknameInput}
            onChange={e => setNicknameInput(e.target.value)}
          />
        </div>

        <div className="form__input">
          <label htmlFor="real_name" className="form__input-label">Real name:</label>
          <input
            className="form__input-field"
            type="text"
            name="real_name"
            id="real_name"
            required
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
          />
        </div>

        <div className="form__input">
          <label htmlFor="description" className="form__input-label">Origin description:</label>
          <input
            className="form__input-field"
            type="text"
            name="description"
            id="description"
            required
            value={descriptionInput}
            onChange={e => setDescriptionInput(e.target.value)}
          />
        </div>

        <div className="form__input">
          <label htmlFor="superpowers" className="form__input-label">Superpowers:</label>
          <input
            className="form__input-field"
            type="text"
            name="superpowers"
            id="superpowers"
            required
            value={superpowersInput}
            onChange={e => setSuperpowersInput(e.target.value)}
          />
        </div>

        <div className="form__input">
          <label htmlFor="catch_phrase" className="form__input-label">Catch phrase:</label>
          <input
            className="form__input-field"
            type="text"
            name="catch_phrase"
            id="catch_phrase"
            required
            value={catchphraseInput}
            onChange={e => setCatchphraseInput(e.target.value)}
          />
        </div>

        <div className="form__images">
          <input
            type="file"
            id="profile_pic"
            name="profile_pic"
            accept=".jpg, .jpeg, .png"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="form__button">Create</button>
      </form>
    </>
  );
};
