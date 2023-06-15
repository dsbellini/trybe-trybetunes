import { FormEvent, useState } from 'react';
import { createUser } from '../services/userAPI';

export function Login() {
  const [disabledButton, setDisabledButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const isNameValid = () => {
      if (value.length >= 3) {
        return setDisabledButton(false);
      }
      setDisabledButton(true);
    };
    isNameValid();

    setUser(value);
  };

  const handleLoginButton = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    await createUser({ name: user });

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <form onSubmit={ handleLoginButton }>
      <label htmlFor="input-login-name">
        <input
          id="input-login-name"
          data-testid="login-name-input"
          type="text"
          placeholder="Insira seu nome"
          name="name"
          onChange={ handleInputChange }
        />
      </label>
      <label htmlFor="button-login">
        <button
          id="button-login"
          type="submit"
          data-testid="login-submit-button"
          disabled={ disabledButton }
        >
          Entrar
        </button>
      </label>
    </form>
  );
}
