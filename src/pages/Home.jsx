import React from 'react';
import { Categories, SortPopup, PizzaBlock} from '../components';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home({items}) {


  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickCategory={(name) => console.log(name)} />
        <SortPopup items={sortIems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))
        }
      </div>
    </div>
  )
}

export default Home
