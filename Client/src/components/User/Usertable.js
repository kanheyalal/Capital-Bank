import { Link } from "react-router-dom";
import classes from "./UserTable.module.css";
const UserTable = (props) => {
  const table = (
    <tr className={classes.row}>
      <td>{props.userData.name}</td>
      <td>{props.userData.email}</td>
      <td>
        <Link
          to={`/users/${props.userData._id}`}
          className={classes.viewprofile}
        >
          view profile 
        </Link>
      </td>
    </tr>
  );
  return table;
};

export default UserTable;
