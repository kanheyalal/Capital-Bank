import { useParams } from "react-router";
import React, { useEffect } from "react";
import classes from "./UserProfile.module.css";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getDetailsOfAUser } from "../../libs/api";
import Spinner from "../Loading/Spinner";

const UserProfile = () => {
  const { sendRequest, data } = useHttp(getDetailsOfAUser);
  const params = useParams();
  useEffect(() => {
    sendRequest(params.userId);
  }, [sendRequest, params.userId]);
  let userDetails = {};
  if (data) {
    userDetails = data;
  }

  return (
    <div className={classes.container}>
      {data === null && <Spinner />}
      {data !== null && (
        <div className={classes.data}>
          <div className={classes.name}>
            <label className={classes.label}>
              <i className={`fas fa-user-circle ${classes.icon}`}></i> Name:{" "}
            </label>
            <p className={classes.para}>{userDetails.name}</p>
          </div>

          <div className={classes.name}>
            <label className={classes.label}>
              <i className={`fas fa-envelope ${classes.icon}`}></i> Email:
            </label>
            <p className={classes.para}>{userDetails.email}</p>
          </div>

          <div className={classes.name}>
            <label className={classes.label}>
              <i className={`fas fa-address-book ${classes.icon}`}></i> Account:
            </label>
            <p className={classes.para}>{userDetails.account}</p>
          </div>

          <div className={classes.name}>
            <label className={classes.label}>
              <i className={`fas fa-money-check-alt ${classes.icon}`}></i>{" "}
              Balance:
            </label>
            <p className={classes.para}>{userDetails.money}</p>
          </div>
          <div className={classes.profileBtn}>
            <Link
              to={`/users/transfer/${userDetails._id}`}
              className={classes.buttont}
            >
              Transfer money
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(UserProfile);
