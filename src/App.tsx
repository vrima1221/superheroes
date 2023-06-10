import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HeroesList } from './components/HeroesList/HeroesList';
import { NotFound } from './pages/NotFound';
import { AddHero } from './pages/AddHero';
import { Header } from './components/Header/Header';
import { loadHeroes } from './http/httpClient';
import { Superhero } from './types/Superhero';
import { HeroPage } from './pages/HeroPage/HeroPage';
import { HeroPageEdit } from './pages/HeroPage/HeroPageEdit';

export const App: React.FC = () => {
  const [isError, setIsError] = useState(false);
  const [currentList, setCurrentList] = useState<Superhero[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNoHeroes, setIsNoHeroes] = useState(false);

  const loadHeroesData = async (page: number) => {
    try {
      const data = await loadHeroes(page);

      if (data.length === 0) {
        setIsNoHeroes(true);
        setTimeout(() => setIsNoHeroes(false), 3000);
      }

      setCurrentList(prev => [
        ...prev,
        ...data,
      ]);
    } catch (error) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  useEffect(() => {
    loadHeroesData(currentPage);
  }, [currentPage]);

  return (
    <>
      <Header />

      <div className="starter">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HeroesList heroes={currentList} currentPage={currentPage} onPageChange={setCurrentPage} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/create" element={<AddHero />} />
          <Route path=":nickname" element={<HeroPage />} />
          <Route path=":nickname/edit" element={<HeroPageEdit />} />
        </Routes>
        {isError && (
          <h1>Error</h1>
        )}
        {isNoHeroes && (
          <h1>No More Heroes</h1>
        )}
      </div>
    </>
  );
};
