import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Card/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';



const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
     };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    currency={item.currency}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                /> 
            ))}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}> 
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount </span>
                    {/* <span>{totalAmount}</span> */}
                {/* <span>{cartCtx.items[0].currency}{totalAmount}</span> */}
                <span>{cartCtx.currency} {totalAmount}</span>
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