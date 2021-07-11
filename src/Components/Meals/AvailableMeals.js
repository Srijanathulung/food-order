import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItems from './MealItems/MeaIItems';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    currency: 'Rs'
  },
  {
    id: 'm2',
    name: 'Momo',
    description: 'A Nepal specialty!',
    price: 99,
    currency: 'Rs'

  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    currency: 'Rs'

  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    currency: 'Rs'

  },
];

const AvailableMeals = () => {
  // const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItems
    key={meal.id}
    title={meal.name}
    description={meal.description}
    currency={meal.currency}
    price={meal.price}
      
    />
  )
  );

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;