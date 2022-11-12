import css from './PizzaItem.module.scss';

const pizzaImg =
  'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg';

export default function PizzaItem() {
  return (
    <li className={css.pizza}>
      <img
        className={css.image}
        src={pizzaImg}
        alt="Pizza"
      />
      <h2>Чизбургер-пицца</h2>
      <div className={css.properties}>
        <ul className={css.thickness}>
          <li>тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul className={css.size}>

        </ul>
      </div>
    </li>
  );
}
