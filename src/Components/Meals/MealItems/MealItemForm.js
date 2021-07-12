import classes from './MealItemForm.module.css';
import Input from '../../UI/Card/Input';

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            {/* // {...props.input} so the property of input is passes In Input component */}
            <Input label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                // step: '1',
                defaultValue: '1'
            }}/>
            <button> + ADD</button>
        </form>
    )
}
export default MealItemForm;