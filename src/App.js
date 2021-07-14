import {useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const cartShowHandler = () => {
    console.log('cartshowHandler funtion is called')
    setCartIsShown(true)
  }
  
  const cartHideHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartHideHandler}/>}
      <Header onShowCart={() =>
        {cartShowHandler()}}
      />
      <main>
        <Meals/>
      </main>
   </CartProvider>
  );
}

export default App;
