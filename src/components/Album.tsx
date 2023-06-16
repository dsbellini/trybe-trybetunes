import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import { Carregando } from '../helpers/Carregando';
import { AlbumType, SongType } from '../types';
import { MusicCard } from './MusicCard';

export function Album() {
  const [musics, setMusics] = useState<[AlbumType, ...SongType[]]>();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPage, setLoadedPage] = useState(false);

  const { id } = useParams();
  const paramId = String(id);

  useEffect(() => {
    const getMusicData = async () => {
      setIsLoading(true);
      const resultMusic = await getMusics(paramId);
      setMusics(resultMusic);
      setIsLoading(false);
      setLoadedPage(true);
      console.log(resultMusic);
    };
    getMusicData();
  }, [paramId]);

  if (isLoading) {
    return (
      <Carregando />
    );
  }

  return (

    <main>
      {loadedPage && musics !== undefined ? (
        <>
          <h1
            data-testid="artist-name"
            key={ musics[0].artistId }
          >
            {musics[0].artistName}
          </h1>
          <h2 data-testid="album-name">
            {musics[0].collectionName}
          </h2>
          <ul>
            {musics && musics.length > 1 && musics.slice(1).map((music) => (
              <li key={ music.trackId }>
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                />
              </li>
            ))}
          </ul>

        </>
      ) : 'Album não encontrado'}
    </main>
  );
}
