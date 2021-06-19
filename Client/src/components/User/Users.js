import { useEffect, useState } from "react";
import classes from "./User.module.css";
import Usertable from "./Usertable";
import useHttp from "../../hooks/use-http";
import { getData } from "../../libs/api";
import Spinner from "../Loading/Spinner";

const User = () => {
  const { sendRequest, data } = useHttp(getData);
  const [searchValue, setSearchValue] = useState("");
  let userData = data;
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let userTable = [];

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value.trim());
  };
  if (data) {
    userData = userData.filter((user) => user.email.includes(searchValue));
  }

  if (userData) {
    userTable = userData.map((user) => {
      return <Usertable userData={user} key={user._id} />;
    });
    userTable.reverse();
  }

  return (
    <div className={classes.usersDiv}>
      {userData === null && <Spinner />}
      <div className={classes.searchBar}>
        <input
          placeholder="search by email"
          value={searchValue}
          onChange={searchValueChangeHandler}
        />
      </div>
      {userData !== null && userData.length !== 0 && (
        <table className={classes.Usertable}>
          <thead className={classes.tablehead}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Profile</th>
            </tr>
          </thead>

          {data != null && (
            <tbody className={classes.tablebody}>{userTable}</tbody>
          )}
        </table>
      )}
      {userData !== null && userData.length === 0 && (
        <p className={classes.info}>
          No account found with email id {searchValue}
        </p>
      )}
    </div>
  );
};

export default User;
