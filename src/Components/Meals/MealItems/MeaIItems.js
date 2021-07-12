// import classes from './MealItems.module.css';
import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';

const MealItems = (props) => {
    const price= `${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div >
            <h3>{props.title}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price} >{ props.currency} {price}</div>
            </div>
            
            <div>
                <MealItemForm/>
            </div>
        </li>
    )
}
export default MealItems;