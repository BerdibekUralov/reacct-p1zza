import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Cart, Home } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      try{
        const [cartPizzas] = await Promise.all([
          axios.get('http://localhost:3000/db.json')
        ])

        setPizzas(cartPizzas.data.pizzas)
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }

    fetchData();
  }, [])

  return (
    <div className="wrapper">
      <Header />
      
      <div className="content">
        <Routes>
          <Route path='/' element={<Home items={pizzas} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
