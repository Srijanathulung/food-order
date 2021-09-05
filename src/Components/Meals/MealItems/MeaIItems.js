// import classes from './MealItems.module.css';
import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItems = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `${props.currency} ${props.price}`
    
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            currency: props.currency,
            price: props.price,
            amount: amount,
           
        })
        cartCtx.currency=props.currency
    };

    return (
        <li className={classes.meal}>
            <div >
            <h3>{props.title}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price} > {price}</div>
            </div>
            
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}
export default MealItems;