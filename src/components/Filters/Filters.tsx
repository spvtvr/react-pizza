import css from './Filters.module.scss';

export default function Filters() {
  return (
    <div className={css.container}>
      <ul className={css.filters}>
        <li className={css.active}>Все</li>
        <li className={css.item}>Мясные</li>
        <li className={css.item}>Вегетарианская</li>
      </ul>
      <div className={css.sort}></div>
    </div>
  );
}
