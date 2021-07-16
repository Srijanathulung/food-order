// import classes from './MealItems.module.css';
import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItems = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `${props.price.toFixed(2)}`
    
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        })
    };

    return (
        <li className={classes.meal}>
            <div >
            <h3>{props.title}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price} >{ props.currency} {price}</div>
            </div>
            
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}
export default MealItems;