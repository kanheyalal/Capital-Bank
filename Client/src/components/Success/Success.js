import classes from './Success.module.css';

const Success = (props) => {
    return <div className={classes.main} >
        <div className={classes.icon}>
        <i className="far fa-check-circle" style={{color: "green"}}></i>
        <p>Transaction successful</p>
        </div>
        <div className={classes.data}>
        <div className={classes.details}>
            <label>From:</label> 
            <p>{props.transactionData.sender}</p>
        </div>
        <div className={classes.details}>
            <label>To:</label> 
            <p>{props.transactionData.reciever}</p>
             
        </div>
        <div className={classes.details}>
            <label>Amount:</label> 
            <p>{props.transactionData.amount}</p>
        </div>
        <div className={classes.details}>
            <label>Date:</label> 
            <p>{props.transactionData.date}</p>
        </div>
        <div className={classes.details}>
            <label>Time:</label> 
            <p>{props.transactionData.time}</p>
        </div>
        </div>
        <div className={classes.btnDiv}>
            <div className={classes.button} onClick={props.onClick}>Done</div>
        </div>
    </div>
};

export default Success;