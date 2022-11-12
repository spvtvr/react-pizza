import css from './PizzasList.module.scss';

import PizzaItem from '../PizzaItem';

export default function PizzasList() {
  return (
    <>
      <h1 className={css.title}>Все пиццы</h1>
      <ul className={css.pizzas}>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </ul>
    </>
  );
}
