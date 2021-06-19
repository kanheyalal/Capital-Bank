import classes from "./TransferTo.module.css";

const TransferTo = (props) => {

    const nameSelectHandler = () => {
        props.onClick(props.user._id);
    }
    return <div  className={classes.transfer} >
        <div className={classes.content}>
            <p onClick={nameSelectHandler}>{props.user.name}</p>
            <div><input type="radio" onClick={nameSelectHandler} className={classes.radio}/></div>
        </div>
        <hr />
    </div>
}; 

export default TransferTo; 