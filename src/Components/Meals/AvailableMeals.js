import React,{useEffect,useState} from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItems from './MealItems/MeaIItems';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//     currency: 'NRS'
//   },
//   {
//     id: 'm2',
//     name: 'Momo',
//     description: 'A Nepal specialty!',
//     price: 99,
//     currency: 'NRS'

//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//     currency: 'NRS'

//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//     currency: 'NRS'

//   },
// ];

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-order-9211f-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          currency:responseData[key].currency

        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  },[])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>LOADING...</p>
      </section>
    );
  }
  // const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  // const mealsList = DUMMY_MEALS.map((meal) => (
  //   <MealItems
  //   id={meal.id}
  //   key={meal.id}
  //   title={meal.name}
  //   description={meal.description}
  //   currency={meal.currency}
  //   price={meal.price}
      
  //   />
  // )

   const mealsList = meals.map((meal) => (
    <MealItems
    id={meal.id}
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