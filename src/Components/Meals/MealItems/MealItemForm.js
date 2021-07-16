import classes from './MealItemForm.module.css';
import Input from '../../UI/Card/Input';
import { useRef,useState } from 'react';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid]=useState(true)

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountToNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountToNumber < 1 ||
            enteredAmountToNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountToNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {/* // {...props.input} so the property of input is passes In Input component */}
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                // step: '1',
                defaultValue: '1'
            }}/>
            <button> + ADD</button>
            {!amountIsValid && <p>please enter the valid amount i.s between 1 to 5</p>}
        </form>
    )
}
export default MealItemForm;