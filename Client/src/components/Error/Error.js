import classes from './Error.module.css';
import Modal from '../Layout/Modal/Modal'; 


const Error = (props) => {
    return  <Modal onClose={props.onClick}>
    <div className={classes.main}> 
        <p>{props.children}</p>
        <div onClick={props.onClick}><i className="fas fa-times"></i></div>
    </div>
    </Modal>
};

export default Error;