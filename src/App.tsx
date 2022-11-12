import Header from './components/Header';
import Filters from './components/Filters';
import PizzasList from './components/PizzasList';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Filters />
        <PizzasList />
      </main>
    </>
  );
}
