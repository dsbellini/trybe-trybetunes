import { useState } from 'react';
import { Button, Card, Col, Form, FormLabel, ListGroup, Row } from 'react-bootstrap';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { Carregando } from '../helpers/Carregando';
import { AlbumType } from '../types';
import './searchCSS.css';

export function Search() {
  const [inputValue, setInputValue] = useState('');
  const [artist, setArtist] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [clickedButton, setClickedButton] = useState(false);
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
    setClickedButton(true);
  };

  if (isLoading) {
    return (
      <Carregando />
    );
  }

  return (
    <>
      <Form className="search-group">
        <Form.Group className="mb-3">
          <div className="search-form">
            <input
              id="search-input"
              type="text"
              value={ inputValue }
              data-testid="search-artist-input"
              placeholder="Nome do artista"
              onChange={ handleInputChange }
            />
            <Button
              className="search-button"
              id="button-search"
              type="submit"
              variant="primary"
              onClick={ handleClickButton }
              data-testid="search-artist-button"
              disabled={ inputValue.length < 2 }
            >
              Pesquisar
            </Button>
          </div>
        </Form.Group>
      </Form>

      <section>
        {clickedButton && albums.length === 0 ? (
          <h1>Nenhum álbum foi encontrado</h1>
        ) : (
          <ListGroup>
            {clickedButton && (
              <section>
                {clickedButton && albums.length === 0 ? (
                  <h1>Nenhum álbum foi encontrado</h1>
                ) : (
                  <ListGroup>
                    {clickedButton && (
                      <section className="result-section">
                        <h1>
                          Resultado de álbuns de:
                          {' '}
                          {artist}
                        </h1>
                        <Row>
                          {albums.map((album) => (
                            <Col md={ 1 } key={ album.collectionId }>
                              {' '}
                              {/* Dividindo em duas colunas */}
                              <Card style={ { marginBottom: '20px' } }>
                                <Card.Img
                                  variant="top"
                                  src={ album.artworkUrl100 }
                                  alt="album"
                                />
                                <Card.Body>
                                  <Card.Title>{album.collectionName}</Card.Title>
                                  <Button
                                    variant="primary"
                                    href={ `/album/${album.collectionId}` }
                                  >
                                    Ver detalhes

                                  </Button>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                        </Row>
                      </section>
                    )}
                  </ListGroup>
                )}
              </section>
            )}
          </ListGroup>
        )}
      </section>
    </>
  );
}
