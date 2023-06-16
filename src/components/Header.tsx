import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import { Carregando } from '../helpers/Carregando';
import { UserType } from '../types';

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
    <header data-testid="header-component">

      <NavLink
        data-testid="link-to-search"
        to="/search"
      >
        Procurar
      </NavLink>
      <NavLink
        data-testid="link-to-favorites"
        to="/favorites"
      >
        Favoritos
      </NavLink>
      <NavLink
        data-testid="link-to-profile"
        to="/profile"
      >
        Perfil
      </NavLink>

      <h1 data-testid="header-user-name">
        {user.name}
      </h1>

    </header>
  );
}
