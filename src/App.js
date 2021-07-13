import { Fragment,useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

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
    <Fragment>
      {cartIsShown && <Cart/>}
      <Header onShowCart={() =>
        {cartShowHandler()}}
      />
      <main>
        <Meals/>
      </main>
   </Fragment>
  );
}

export default App;
