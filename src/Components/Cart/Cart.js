import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Card/Modal';
import CartContext from '../../store/cart-context';

const demoItems = [{ id: 'c1', name: 'burger', amount: 2, currency: 'Rs', price: 55.00 }]

const cartItems = demoItems.map((item) => <li>{item.name}</li>)

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount =  'Rs ' + cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}> 
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount </span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}
                >Close</button>
               {hasItems && <button className={classes.button}>Order</button>}
            </div>
        
        </Modal>
    )
    
}
export default Cart;