import { Spinner } from 'react-bootstrap';
import './carregandoCSS.css';

export function Carregando() {
  return (
    <div>
      <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
