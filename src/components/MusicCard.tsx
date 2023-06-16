import { useState } from 'react';
import emptyHeart from '../images/empty_heart.png';
import checkedHeart from '../images/checked_heart.png';

type MusicCardProps = {
  trackName: string,
  previewUrl: string,
  trackId: number,
  addFavoriteSong: (favoriteId: string) => void;
  isChecked: (favoriteId: string) => boolean;

};

export function MusicCard(
  { trackName, previewUrl, trackId, addFavoriteSong, isChecked }: MusicCardProps,
) {
  return (
    <>
      <h2>{trackName}</h2>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
      </audio>

      <label
        data-testid={ `checkbox-music-${trackId}` }
        htmlFor={ `favorite-${trackId}` }
      >
        {isChecked(String(trackId))
          ? <img src={ checkedHeart } alt="favorite" />
          : <img src={ emptyHeart } alt="favorite" />}
        <input
          type="checkbox"
          id={ `favorite-${trackId}` }
          checked={ isChecked(String(trackId)) }
          onChange={ () => addFavoriteSong(String(trackId)) }
        />
      </label>
    </>
  );
}

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setHeart(heart === value ? 'off' : 'on');
//     addFavoriteSong();
//   };
