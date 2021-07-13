import classes from './Cart.module.css';
import Modal from '../UI/Card/Modal';

const demoItems = [{ id: 'c1', name: 'burger', amount: 2, currency: 'Rs', price: 55.00 }]

const cartItems = demoItems.map((item) => <li>{item.name}</li>)

const Cart = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
            {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}
                >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        
        </Modal>
    )
    
}
export default Cart;