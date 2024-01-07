import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import getMusics from '../services/musicsAPI';
import { Carregando } from '../helpers/Carregando';
import { AlbumType, SongType } from '../types';
import { MusicCard } from './MusicCard';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import './albumCSS.css';

export function Album() {
  const [musics, setMusics] = useState<[AlbumType, ...SongType[]]>();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPage, setLoadedPage] = useState(false);
  const [favoriteSong, setFavoriteSong] = useState<string[]>([]);

  const { id } = useParams();
  const paramId = String(id);
  const nav = useNavigate();

  useEffect(() => {
    const getMusicData = async () => {
      setIsLoading(true);
      const resultMusic = await getMusics(paramId);
      setMusics(resultMusic);
      setIsLoading(false);
      setLoadedPage(true);
    };
    getMusicData();
  }, [paramId]);

  const addFavoriteSong = (favoriteId: string) => {
    const verifyId = favoriteSong.some((song) => song === favoriteId);

    if (verifyId) {
      const filteredFavoriteSong = favoriteSong.filter((songId) => songId !== favoriteId);
      setFavoriteSong(filteredFavoriteSong);
    } else {
      const filteredFavoriteSong = [...favoriteSong, favoriteId];
      setFavoriteSong(filteredFavoriteSong);
    }

    // addSong();
    // removeSong();
  };

  const isChecked = (favoriteId: string) => {
    const verifyId = favoriteSong.some((song) => song === favoriteId);
    return verifyId;
  };

  if (isLoading) {
    return (
      <Carregando />
    );
  }

  return (

    <main>
      {loadedPage && musics !== undefined ? (
        <>
          <Button
            onClick={ () => nav('/search') }
          >
            Voltar

          </Button>
          <h1
            data-testid="artist-name"
            key={ musics[0].artistId }
          >
            {musics[0].artistName}
          </h1>
          <h2 data-testid="album-name">
            {musics[0].collectionName}
          </h2>

          <ListGroup variant="flush">
            {musics && musics.length > 1 && musics.slice(1).map((music) => (
              <ListGroup.Item
                key={ 'trackId' in music ? music.trackId : music.collectionId }
                variant="dark"
                className="list"
              >
                <MusicCard
                  trackName={ 'trackName' in music ? music.trackName : '' }
                  previewUrl={ 'previewUrl' in music ? music.previewUrl : '' }
                  trackId={ 'trackId' in music ? music.trackId : 0 }
                  addFavoriteSong={ addFavoriteSong }
                  isChecked={ isChecked }
                />
              </ListGroup.Item>
            ))}
          </ListGroup>

        </>
      ) : 'Album não encontrado'}
    </main>
  );
}

// trackName={ 'trackName' in music ? music.trackName : '' }
