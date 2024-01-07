import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormLabel, Image } from 'react-bootstrap';
import { createUser } from '../services/userAPI';
import { Carregando } from '../helpers/Carregando';
import './loginCSS.css';
import logo from '../images/logo.99baff09.svg';

export function Login() {
  const [disabledButton, setDisabledButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');

  const navigate = useNavigate();

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
    navigate('/search');
  };

  if (isLoading) {
    return (
      <Carregando />
    );
  }

  return (
    <div className="login-container">
      <Form onSubmit={ handleLoginButton } className="login-form">
        <Image src={ logo } alt="logo" className="logo" rounded />
        <FormLabel htmlFor="input-login-name">
          <input
            id="input-login-name"
            data-testid="login-name-input"
            type="text"
            placeholder="Insira seu nome"
            name="name"
            onChange={ handleInputChange }
          />
        </FormLabel>
        <label htmlFor="button-login">
          <Button
            variant="success"
            id="button-login"
            type="submit"
            data-testid="login-submit-button"
            disabled={ disabledButton }
          >
            Entrar
          </Button>
        </label>
      </Form>
    </div>
  );
}
