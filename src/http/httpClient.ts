/* eslint-disable no-console */
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const loadHeroes = async (page: number) => {
  try {
    const response = await axios.get(`${API_URL}/superheroes?page=${page}`);
    const heroes = response.data;

    return heroes;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export const post = async (hero: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/superheroes`, hero);
    const createdHero = await response.data;

    return createdHero;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const patch = async (nickname: string, data: any) => {
  try {
    const response = await axios.patch(`${API_URL}/superheroes/${nickname}`, data);
    const updatedSuperhero = response.data;

    return updatedSuperhero;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getOne = async (nickname: string) => {
  try {
    const response = await axios.get(`${API_URL}/superheroes/${nickname}`);
    const heroData = response.data;

    return heroData;
  } catch (error) {
    console.log(error);

    return null;
  }
};
