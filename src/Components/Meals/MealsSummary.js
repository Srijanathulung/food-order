import classes from './MealsSummary.module.css';
import React from 'react';

const MealsSummary = () => {
    return (
        <section className= {classes.summary}>
            <h2>Delicious food, Delivered to you</h2>
            <p>
                choose your favourite meal from our broad selection of available meals and
                enjoy a delicious lunch and dinner.
            </p>
            <p>
                All our meals are cooked with high quality ingredients, by experienced chefs.
            </p>
    </section>
)
}
export default MealsSummary;