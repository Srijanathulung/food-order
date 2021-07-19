import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext,useEffect,useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
    
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);

    
    const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump: ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
        
    },[items])
    
    return (
        <button
            className={btnClasses} 
            onClick={ () =>
            { props.onClickHeaderButton() }}
        >
            <span className= {classes.icon }>
                <CartIcon/>
            </span>
            <span>Your text</span>
            <span className= {classes.badge}>{numberOfCartItems}</span>
        </button>
    )
 }
export default HeaderCartButton;