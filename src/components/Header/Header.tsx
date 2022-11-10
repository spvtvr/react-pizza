import css from './Header.module.scss';
import logo from '../../assets/pizza-logo.svg';

export default function Header() {
  const title = 'React Pizza';
  const subtitle = 'Самая вкусная пицца во вселенной';

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img
          className={css.pizza}
          src={logo}
          alt="Pizza Logo"
        />
        <div className={css.text}>
          <span className={css.title}>{title.toLocaleUpperCase()}</span>
          <span className={css.subtitle}>{subtitle.toLocaleLowerCase()}</span>
        </div>
      </div>
      <button className={css.button}>
        <span className={css.price}>520 ₽</span>
        <span className={css.count}>5</span>
      </button>
    </header>
  );
}
