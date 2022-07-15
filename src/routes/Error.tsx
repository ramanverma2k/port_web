import style from './Error.module.css';
import ErrorGo from '../assets/error_go.svg';

function ErrorRoute() {
  return (
    <main className={style.main}>
      <h1 className={style.heading}>Oops!</h1>
      <img className={style.image} src={ErrorGo} alt="error gopher" />
    </main>
  );
}

export default ErrorRoute;
