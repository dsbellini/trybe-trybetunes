import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { Carregando } from '../helpers/Carregando';
import { AlbumType } from '../types';

export function Search() {
  const [inputValue, setInputValue] = useState('');
  const [artist, setArtist] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleClickButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setArtist(inputValue);
    setInputValue('');
    const result = await searchAlbumsAPI(inputValue);
    setAlbums(result);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Carregando />
    );
  }

  return (
    <>
      <h1>Pesquisar artista</h1>
      <form>
        <label htmlFor="search-input">
          <input
            id="search-input"
            type="text"
            value={ inputValue }
            data-testid="search-artist-input"
            placeholder="Nome do artista"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="button-search">
          <button
            id="button-search"
            type="submit"
            onClick={ handleClickButton }
            data-testid="search-artist-button"
            disabled={ inputValue.length < 2 }
          >
            Pesquisar
          </button>
        </label>
      </form>

      <section>
        {albums.length > 0 ? (
          <h1>
            Resultado de álbuns de:
            {' '}
            {artist}
            <ul>
              {albums.map((album) => (
                <li key={ album.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${album.collectionId}` }
                    to={ `/album/${album.collectionId}` }
                  >
                    {album.collectionName}
                  </Link>
                </li>
              ))}
            </ul>
          </h1>
        ) : <h1>Nenhum álbum foi encontrado</h1>}
      </section>
    </>
  );
}
