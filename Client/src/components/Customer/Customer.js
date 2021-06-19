import classes from "./Customer.module.css";
import { Link } from 'react-router-dom';
import customerImg from "./5239.svg";
import historyImg from "./4209052.jpg";

const Customer = () => {
  return (
    <div className={classes.Customer}>
      <div className={classes.container}>
        <div className={classes.allCustomers}>
          <img
            src={customerImg}
            className={classes.customerImage}
            alt=""
          />
          <div className={classes.btnDiv}>
          <Link className={classes.btn} to='/users'>View all Customer</Link>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.allCustomers}>
          <img
            src={historyImg}
            className={classes.historyImgae}
            alt=""
          />
          <div className={classes.btnDiv}>
            <Link className={classes.btn} to='/history'>Transaction history</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
