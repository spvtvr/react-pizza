import css from './Filters.module.scss';

export default function Filters() {
  return (
    <div className={css.container}>
      <ul className={css.filters}>
        <li className={css.active}>Все</li>
        <li className={css.item}>Мясные</li>
        <li className={css.item}>Вегетарианская</li>
      </ul>
      <span className={css.sort}>Сортировка по:<span>популярности</span></span>
      <ul className={css.modal}>
        <li className={css.checked}>популярности</li>
        <li>цене</li>
        <li>алфавиту</li>
      </ul>
    </div>
  );
}
