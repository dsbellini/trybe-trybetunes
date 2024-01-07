import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { getUser } from '../services/userAPI';
import { Carregando } from '../helpers/Carregando';
import { UserType } from '../types';
import './header.css';

const USER_INITIAL = {
  name: '',
  email: '',
  image: '',
  description: '',
};

export function Header() {
  const [user, setUser] = useState<UserType>(USER_INITIAL);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMusicData = async () => {
      setIsLoading(true);
      const result = await getUser();
      setUser(result);
      setIsLoading(false);
    };
    getMusicData();
  }, []);

  if (isLoading) {
    return (
      <Carregando />
    );
  }

  return (
    <header data-testid="header-component" className="header">

      {/* <Nav.Item>
        <Nav.Link
          data-testid="link-to-search"
          href="/search"
        >
          Procurar
        </Nav.Link>
      </Nav.Item> */}

      <h1 data-testid="header-user-name">
        Olá,
        {' '}
        {user.name}
        ! Seja bem-vindo(a)!
      </h1>

    </header>
  );
}
