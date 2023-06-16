type MusicCardProps = {
  trackName: string,
  previewUrl: string,
};

export function MusicCard({ trackName, previewUrl }: MusicCardProps) {
  return (
    <>
      <h2>{trackName}</h2>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </audio>
    </>
  );
}
