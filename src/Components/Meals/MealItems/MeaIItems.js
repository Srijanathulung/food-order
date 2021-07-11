// import classes from './MealItems.module.css';
import classes from './MealItems.module.css';

const MealItems = (props) => {
    const price= `${props.price.toFixed(2)}`
    return (
        <li>
            <div
                className={classes.meal}
            >
            <h3>{props.title}</h3>
                <div
                    className={classes.description}
                >{props.description}</div>
                <div
                    className={classes.price}
                >{ props.currency} {price}</div>
            </div>
            <div>

            </div>
        </li>
    )
}
export default MealItems;