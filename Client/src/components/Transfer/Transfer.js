import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import classes from "./Transfer.module.css";
import TransferTo from "./TransferTo"; 
import useHttp from "../../hooks/use-http";
import { getCustomerNames, getDetailsOfAUser } from "../../libs/api";
import Modal from "../Layout/Modal/Modal";
import Success from '../Success/Success';
import GetTime from "./getTime";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../Loading/Spinner";
import { useHistory } from "react-router-dom";


const Transfer = () => {
  const { sendRequest: getNames, data: customerNames } =
    useHttp(getCustomerNames);
  const { sendRequest: getCurrUser, data: currUserData } =
    useHttp(getDetailsOfAUser);
  
  const params = useParams();
  const history = useHistory();
  const amount = useRef();
  const [showList, setShowlist] = useState(false);
  const [customerDetail, setCustomerDetail] = useState({ name: "select user" });
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({});

  const selectListChangeHandler = () => {
    setShowlist((showList) => !showList);
  };

  useEffect(() => {
    getNames(params._id);
  }, [params._id, getNames]);

  useEffect(() => {
    getCurrUser(params.userId);
  }, [params.userId, getCurrUser]);

  let currUser = {};
  if (currUserData) {
    currUser = currUserData;
  }

  const selectCustomer = async (id) => {
    const res = await axios.get(`https://spark-backend-capital.herokuapp.com/getData/${id}`);
    setCustomerDetail(res.data);
    setShowlist(false);
  };
  let USERNAMELIST = [];
  let names=[];
  if(customerNames) {
    names = customerNames.filter(user => user._id !== params.userId)
  }
  if (customerNames) {
    USERNAMELIST = names.map((user) => {
        return (
          <TransferTo
            key={user._id}
            onClick={selectCustomer}
            className={classes.selectListItem}
            user={user}
          />
        );
    });
  }
  const changeShowErrorHandler = () => {
    setShowError(false);
  };

  const successChangeHandler = () => {
    setSuccess(false);
    setSuccessMessage({});
    history.replace(`/users/${params.userId}`);
  }

  const showErrorToast = () => {
    toast.error(error.message, {
      position: "top-center",
  });
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const updatedMoneyOfSender = currUser.money - +amount.current.value;
    const updatedMoneyOfReciever = customerDetail.money + +amount.current.value;

    
    if (amount.current.value.trim().length === 0) {
      setShowError(true);
      setError({ message: "Enter amount" });
      return;
    }

    if (+amount.current.value <= 0) {
      setShowError(true);
      setError({ message: "Enter valid amount" });
      return;
    }

    if (customerDetail.name === "select user") {
      setShowError(true);
      setError({ message: "select a customer" });
      return;
    }

    if (updatedMoneyOfSender < 0) {
      setShowError(true);
      setError({ message: "Insufficient balance" });
      return;
    }


    const updateMoney = async (details) => {
      await axios.patch(`https://spark-backend-capital.herokuapp.com/updateMoney/${details.id}`, {
        updatedMoney: details.money,
      });
    };
    updateMoney({
      id: currUser._id,
      money: updatedMoneyOfSender,
    });
    updateMoney({
      id: customerDetail._id,
      money: updatedMoneyOfReciever,
    });
    
    const {date , time} =  GetTime();
    const transactionData = {
      sender: currUser.name,
      reciever: customerDetail.name,
      amount: +amount.current.value,
      date,time 
    };
    const updateHistory = async () => {
      await axios.post(`https://spark-backend-capital.herokuapp.com/sendhistory`, transactionData)
    }
    updateHistory();
    // setTransaction((transaction) => !transaction);
    // setUpdatingHistory(false);
    setSuccessMessage(transactionData);
    setSuccess(true)
    amount.current.value='';
    setCustomerDetail({name: "select user"})
  };

  return (
    <div className={classes.container}>
      <ToastContainer />

      {currUserData === null && <Spinner />}
      {showError && showErrorToast()}
      {showError && changeShowErrorHandler()}

    { currUserData !== null && 
      <form className={classes.form} onSubmit={formSubmissionHandler}>
        <div className={classes.details}>
          <label className={classes.label}>Name: </label>
          <p className={classes.para}>{currUser.name}</p>
        </div>

        <div className={classes.details}>
          <label className={classes.label}>Balance: </label>
          <p className={classes.para}>{currUser.money}</p>
        </div>

        <div className={classes.details}>
          <label className={classes.label}>Amount: </label>
          <p className={classes.para}>
            <input
              type="number"
              placeholder="Enter Amount"
              ref={amount}
              className={classes.input}
            />
          </p>
        </div>

        <div className={classes.details}>
          <label className={classes.label}>Send to: </label>
          <div className={classes.select} onClick={selectListChangeHandler}>
            <div className={classes.selected}>
              
              <p>{customerDetail.name}</p>
            <i className={`fa fa-caret-down ${classes.icon}`}></i>
            </div>
            
          </div>
          {showList && (    
            <Modal onClose={selectListChangeHandler}>
              <div className={classes.selectList}>{USERNAMELIST}</div>
            </Modal>
          )} 
        </div>

        {success && (
          <Modal onClose={successChangeHandler}>
            <Success onClick={successChangeHandler}  transactionData={successMessage} />
          </Modal>
        )}

        <div className={classes.transferBtnDiv}>
          <button className={classes.transferBtn}>Transfer</button>
        </div>
      </form>}
    </div>
  ); 
};

export default Transfer;
