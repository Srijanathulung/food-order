import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    
    return (
        <button
            className={classes.button}
            
            onClick={ () =>
            { props.onClickHeaderButton() }}
        >
            <span className= {classes.icon }>
                <CartIcon/>
            </span>
            <span>Your text</span>
            <span className= {classes.badge}>3</span>
        </button>
    )
 }
export default HeaderCartButton;