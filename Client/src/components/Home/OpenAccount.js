import axios from "axios";
import { useRef, useState } from "react";
import classes from "./OpenAccount.module.css";
import Spinner from "../Loading/Spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const OpenAccount = () => {

  const name = useRef();
  const email = useRef();
  const balance = useRef();

  const [showSpinner, setShowSpinner] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const showErrorChangeHandler = () => {
    setShowError(false);
  }
  const showSuccessChangeHandler = () => {
    setShowSuccess(false);
  }
  const ErrorMessage = "Enter all the fields";
  const SuccessMessage = "Your account has been created successfully!";
  
  const errorMessage = () => {
    toast.error(ErrorMessage, {
      position: "top-center"
  });
  };
  const successMessage = () => {
    toast.success(SuccessMessage, {
      position: "top-center"
    })
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (
      name.current.value.trim().length === 0 ||
      email.current.value.trim().length === 0 ||
      balance.current.value.trim().length === 0 
    ) {
      setShowError(true);
      return;
    }
      setShowSpinner(true);
    const Entereddata = {
      name: name.current.value.trim(),
      email: email.current.value.trim(),
      money: balance.current.value.trim(),
      account: ("abc"+Math.floor(Math.random()*100000)),
    };
    await axios.post("https://spark-backend-capital.herokuapp.com/senddata", Entereddata);
    setShowSuccess(true);
    name.current.value = '';
    email.current.value = '';
    balance.current.value = '';
    setShowSpinner(false);
  };

  return (
    <div className={classes.account}>
       <ToastContainer />
      {showSpinner && <Spinner />}
      {showError && errorMessage() }
      {showError && showErrorChangeHandler()}
      {showSuccess && successMessage() }
      {showSuccess && showSuccessChangeHandler()}


      <p className={classes.heading}>Create Account</p>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.inputDiv}>
          <input
            type="text"
            className={classes.input}
            placeholder="&#xf2bd;    Enter name"

            ref={name}
          />
        </div>
        <div className={classes.inputDiv}>
          <input
            type="email"
            className={classes.input}
            placeholder="&#xf0e0;    Enter email"

            ref={email}
          />
        </div>
        <div className={classes.inputDiv}>
          <input
            type="number"
            className={classes.input}
            placeholder="&#xf155;     Enter initial balace"

            ref={balance}
          />
        </div>

        <div className={classes.buttonDIv}>
          <button className={classes.create}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default OpenAccount;
